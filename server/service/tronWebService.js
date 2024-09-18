import ParamUtil from "../utils/paramUtil.js";
import TronWeb from 'tronweb'
import config from "../config/constant.js"

const HttpProvider = TronWeb.providers.HttpProvider
const tronWeb = new TronWeb({
    fullHost: new HttpProvider(config.tronFullHost),
    headers: {'TRON-PRO-API-KEY': config.tronApiKey},
    privateKey: config.oraclePrivateKey
})


/**
 * 获取用户USDT余额
 * @param address
 */
const getBalanceOfUsdt = async (address) => {
    try {
        const usdtContract = await tronWeb.contract().at(config.usdtContractAddr)
        const result = await usdtContract.balanceOf(address).call()
        return tronWeb.toDecimal(result)
    } catch (error) {
        console.error('trigger smart contract error', error)
    }
}

/**
 * 获取用户TRX余额
 * @param address
 */
const getBalanceOfTrx = async (address) => {
    try {
        return await tronWeb.trx.getBalance(address)
    } catch (error) {
        console.error('trigger smart contract error', error)
        return 0
    }
}

/**
 * 轮询确定某个交易是否确认
 * @param txId 交易hash
 */
const waitTransactionConfirm = async (txId) => {
    for (let i = 0; i < 10; i++) {
        const result = await tronWeb.trx.getTransaction(txId)
        console.log(`txId:[${txId}]=>正在进行第${i}次确认:该次结果为:`, result)
        if (result && result.ret && result.ret[0].contractRet === 'SUCCESS') {
            return true
        }
        await new Promise(resolve => setTimeout(resolve, 2000))
    }
    console.log(
        `txId:[${txId}]=>轮询次数已超出:所以返回失败`
    )
    return false
}

/**
 * 验证签名
 * @param messageHash
 * @param signature
 * @param address
 * @return true,false
 */
const verifySignature = async (messageHash, signature, address) => {
    if (ParamUtil.hasNull(messageHash, signature, address)) {
        return false
    }
    try {
        return await tronWeb.trx.verifyMessage(messageHash, signature, address)
    } catch (e) {
        console.error(e.message)
        return false
    }
}

/**
 * 根据订单号获取用户充值的USDT数量
 * @param address
 * @param order
 */
const getDepositOrderAmount = async (address, order) => {
    const ogContract = await tronWeb.contract().at(config.OgContractAddr)
    const result = await ogContract.deposits(address, order).call()
    return tronWeb.toDecimal(result)
}

/**
 * 由游戏服务器发起提现
 * @param address
 * @param order
 * @param amount
 * @returns {Promise<void>}
 */
const withdraw = async (address, order, amount) => {
    try {
        const OgContract = await tronWeb.contract().at(config.OgContractAddr)
        let txId = await OgContract.withdraw(
            address, //address _to,
            order, //uint256 _order,
            amount   //amount
        ).send({
            feeLimit: 50000000
        })
        console.log('withdraw result', txId)
        return {result: true, txId}
    } catch (error) {
        console.error('[tronWebService.withdraw()]trigger smart contract error : ', error)
        return {result: false}
    }
}

/**
 * 通过前端传过来的txId去链上查询该笔交易是否成功
 * @param address
 * @param txId
 * @param amount
 */
const verifyDepositByTxId = async (address, txId, amount) => {
    const resp = await tronWeb.trx.getTransactionInfo(txId)
    if (!resp || !resp.receipt || resp.receipt.result !== 'SUCCESS') {
        return {Res: 1, Msg: 'order not exist'}
    }

    let log = resp.log

    for (let i = 0; i < resp.log.length; i++) {
        if (tronWeb.address.fromHex('41' + resp.log[i].address) === config.OgContractAddr) {
            log = resp.log[i]
            // const topic0 = log.topics[0]
            const addrLog = tronWeb.address.fromHex('41' + log.topics[1].replace(/^0+/, ''))
            const orderLog = tronWeb.toDecimal(`0x${log.topics[2]}`)
            const amountLog = tronWeb.toDecimal(`0x${log.topics[3]}`)
            if (addrLog.toLowerCase() === address.toLowerCase() && amountLog === amount) {
                return {Res: 0, Msg: 'success', NAmount: amount, txId: txId}
            }
            break
        }
    }
    return {Res: 1, Msg: 'fail'}
}

/**
 * 获取合约USDT余额，Oracle管理员Gas余额
 */
const getContractTotalUsdtNum = async () => {
    const totalUsdt = await getBalanceOfUsdt(config.OgContractAddr)
    const balance = await getBalanceOfTrx(config.oracleAddr)
    return {Res: 0, Msg: 'success', NAmount: totalUsdt, OracleGas: balance}
}

export default {
    tronWeb,
    getBalanceOfUsdt,
    waitTransactionConfirm,
    verifySignature,
    getDepositOrderAmount,
    withdraw,
    verifyDepositByTxId,
    getContractTotalUsdtNum

}