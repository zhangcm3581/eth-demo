// 业务合约地址
const OgEthContractAddr = "0x8413f7297892C5341282FCd5d7E7a2E3267609F4"
// 合约管理员(合约部署者)私钥
const oraclePrivateKey = "389f320ae3342535d75ecf2652cf85ccce37a98413db0c6791560a1a31f63f03"
// 以太坊goerli测试网节点 , 主网节点: https://eth-mainnet.public.blastapi.io , 可从 https://chainlist.org 查询节点信息
const ethFullHost = "https://ethereum-goerli.publicnode.com"

const ethConfig = {
    OgEthContractAddr,
    oraclePrivateKey,
    ethFullHost
}

export default ethConfig