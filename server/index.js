import ethWebService from './service/ethWebService.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ParamUtil from "./utils/paramUtil.js";


/**
 * 错误码:
 * -1:参数错误;
 * -2:签名错误;
 * -3:链上执行错误, 如有具体错误信息则返回，如Revert
 * -4:未知错误,且可重试的错误;
 * -5:服务端异常
 */

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World');
})


/**
 * 以太坊用户钱包登陆
 */
app.post('/eth/login', async (req, res) => {
    const {message, signature, address} = req.body
    console.log('message=',message)
    console.log('signature=',signature)
    console.log('address=',address)
    if (!await ethWebService.verifySignature(message, address, signature)) {
        // 签名校验失败
        res.send({Res: -1, Msg: 'sign error'})
    } else {
        // 签名校验成功
        // 1.这里根据业务需求，记录用户登陆成功状态,比如：* 将用户的钱包地址写入redis缓存或写入数据库，标记用户登陆成功 *
        res.send({Res: 0, Msg: 'success'})
    }
})


/**
 * 用户提现
 * @param address 提现用户钱包地址
 * @param order 提现订单ID(由业务系统生成)
 * @param amount 提现数量
 */
app.post('/eth/requestWithdraw', async (req,res) => {
    const { address, order, amount } = req.body
    if (ParamUtil.hasNull(address, order, amount)) {
        res.send({Res: -1, Msg: 'param error : address, order, amount is required'})
        return
    }
    console.log(`address=${address}, order=${order}, amount=${amount}`)
    try {
        const txHash = await ethWebService.withdraw(address, order, amount)
        res.send({Res: 0, Msg: 'success', Amount: amount, txHash: txHash, withdrawOrder: order})
    } catch (e) {
        console.log('withdraw error:', e)
        const errObj = JSON.parse(JSON.stringify(e))
        const msg = JSON.parse(errObj.error.error.body).error.message
        if (msg.includes('ERC20: transfer amount exceeds balance')) {
            res.send({Res: -3, Msg: 'Revert', Error: 'Insufficient balance'})
        } else {
            res.send({Res: -3, Msg: 'Revert', Error: e})
        }
    }
})



const server = app.listen(8081, function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});