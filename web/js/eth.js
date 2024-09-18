

const tokenAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}];
const ogAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"order","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"order","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"maintainer","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogWithdrawProfit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAINTAINER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORACLE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"order","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdt","type":"address"}],"name":"setUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"order","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdraws","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

const tokenContractAddress = '0x67ee9CFC38A901fFD6437b84468C6BEbe5cd86A9';
const ogContractAddress = '0x596185C6FFeD73B30d09fDC9f6AB8F7a65638407';

const config = {
  env: 'testnet',
  baseUrl: '/api',
  provider: 'https://ethereum-goerli.publicnode.com', // eth provider
  // Goerli链ID
  ethChainNumberId: 5,
  // Goerli链配置
  chainConfig: {
    chainId: '0x5',
    chainName: 'Goerli',
    rpcUrls: ['https://ethereum-goerli.publicnode.com'],
    nativeCurrency: {
      name: 'Eth',
      symbol: 'Eth',
      decimals: 6
    },
    blockExplorerUrls: ['https://goerli.etherscan.io/']
  }
}

let provider
try {
  provider = new ethers.providers.Web3Provider(window.ethereum)
} catch (error) {
  provider = new ethers.providers.JsonRpcProvider(config.provider)
}


// 统一错误返回
const failResult = (message) => ({ success: false, message });
// 统一成功返回
const successResult = (result) => ({ success: true, result });


const signer = provider.getSigner();

const getContract = (abi, address) => {
    const signerOrProvider = signer;
    return new ethers.Contract(address, abi, signerOrProvider);
}

// 获取usdt代币合约
const getTokenContract = async () => {
    return getContract(tokenAbi, tokenContractAddress);
}

// 获取业务合约
const getOgContract = async () => {
    return getContract(ogAbi, ogContractAddress);
}

// 领取测试代币
const mint = async (receiver, amount) => {
    try {
        amount = toWei(amount);
        const erc20Contract = await getTokenContract()
        let gasLimit = ethers.utils.hexlify(200000);
        console.log('mint - gasLimit: ', gasLimit);
        const tx = await (await erc20Contract.mint(receiver, amount, {
            gasLimit: gasLimit
        })).wait();
        return successResult(tx)
    } catch (error) {
        console.log(error)
        return failResult(error)
    }
}

/**
 * 连接钱包
 */
const connectWalletEth = async () => {
    // 判断用户是否安装TP,小狐狸,ImToken 钱包插件
    if (!window.ethereum) {
      const message = {
        message: "No Wallet!",
      };
      return failResult(message);
    }
    try {
      const ethChainId = await window.ethereum.request({ method: 'eth_chainId' })
      // const ethChainNumberId = ethers.utils.hexlify(parseInt(config.ethChainNumberId))
        const ethChainNumberId = ethers.utils.hexStripZeros(parseInt(config.ethChainNumberId))
      if (ethChainId !== ethChainNumberId) {
        window.ethereum
          .request({
            method: 'wallet_addEthereumChain',
            params: [config.chainConfig]
          })
          .then(() => {
            location.reload()
          })
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      // todo: 根据业务需求，保存当前用户钱包地址
      return successResult(accounts);
    } catch (reason) {
      console.log(reason);
      const message = reason.message || "There was a problem signing you in";
      return failResult(message);
    }
};

const signData = async (address, message) => {
    try {
      const signature = await window.ethereum
        .request({ method: "personal_sign", params: [address, message] },
        )
      return successResult(signature)
    } catch (error) {
      return failResult(error)
    }
}

const hashMessage = async (message) => {
    try {
      const resp = await ethers.utils.hashMessage(message)
      return successResult(resp)
    } catch (err) {
      console.error(err)
      return failResult(err)
    }
  }


// 查询授权额度
// @spender 合约地址
const allowance = async (account, spender) => {
    spender = spender || ogContractAddress;
    try {
      const erc20Contract = await getTokenContract()
      const resp = await erc20Contract.allowance(account, spender)
      return successResult(getBalanceNumber(new BigNumber(resp ? resp.toString() : 0)))
    } catch (error) {
      return failResult(error)
    }
}

// 授权usdt给业务合约
const approve = async (amount, spender = ogContractAddress, ) => {
    try {
        amount = toWei(amount)
        const erc20Contract = await getTokenContract()
        const gasEstimated = await erc20Contract.estimateGas.approve(spender, amount)
        const gasLimit = gasEstimated.mul(120).div(100)
        const tx = await (await erc20Contract.approve(spender, amount, {
          gasLimit: gasLimit
        })).wait()
        return successResult(tx)
    } catch (error) {
        console.log(error)
        return failResult(error)
    }
}

// 充值
const deposit = async (amount, order) => {
    try {
        amount = toWei(amount)
        const ogContract = await getOgContract()
        const gasEstimated = await ogContract.estimateGas.deposit(amount, order)
        const gasLimit = gasEstimated.mul(120).div(100)
        const tx = await (await ogContract.deposit(amount, order, {
          gasLimit: gasLimit,
        })).wait()
        return successResult(tx)
    } catch (error) {
        console.log(error)
        return failResult(error)
    }
}



 // 账户余额
 const balanceOf = async (address) => {
    try {
      const erc20Contract = await getTokenContract()
      const resp = await erc20Contract.balanceOf(address)
      const balance = getBalanceNumber(new BigNumber(resp ? resp.toString() : 0))
      return successResult(balance)
    } catch (error) {
      console.log(error)
      return 0
    }
}

// 查询业务合约余额
const queryContractBalance = async () => {
    try {
      const erc20Contract = await getTokenContract()
        const resp = await erc20Contract.balanceOf(ogContractAddress)
        const balance = getBalanceNumber(new BigNumber(resp ? resp.toString() : 0))
        return successResult(balance)
    } catch (error) {
        console.log(error)
        return 0
    }
}


const BIG_TEN = new BigNumber(10);

const getBalanceAmount = (amount, decimals = 6) => {
    return BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
}

const getBalanceNumber = (balance, decimals = 6) => {
    return getBalanceAmount(balance, decimals).toNumber();
}


/**
 * @description: 大数据处理使用ethers
 * @param {*} amount
 * @param {*} tokenDecimals
 * @return {*}
 */
const toWei = (amount, tokenDecimals = 6) => {
    if (typeof amount === 'number') {
      amount = amount + ''
    }
    return ethers.utils.parseUnits(amount, tokenDecimals)
  }
  

