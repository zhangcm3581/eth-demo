

const tokenAbi = [{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const ogAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"order","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"maintainer","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogWithdrawProfit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAINTAINER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORACLE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"addSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getContractTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"removeSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"supportedTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"order","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawProfit","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const tokenUsdtAddress = '0x62DACA6D591434c550Ae84b3731Fc492E1C0bF68';  // 精度为6
const tokenUsdcAddress = '0x8142f4c68bDfe435CF861e675e39798657C65366';  // 精度为6
const ogContractAddress = '0x39f9c7328903DD94fD78B1Fa468c04A35Fcc3C75';

const config = {
  env: 'testnet',
  baseUrl: '/api',
  provider: 'https://ethereum-sepolia-rpc.publicnode.com', // eth provider
  // Goerli链ID
  ethChainNumberId: 11155111,
  // Goerli链配置
  chainConfig: {
    chainId: '0xaa36a7',
    chainName: 'Sepolia',
    rpcUrls: ['https://ethereum-sepolia-rpc.publicnode.com'],
    nativeCurrency: {
      name: 'Eth',
      symbol: 'Eth',
      decimals: 6
    },
    blockExplorerUrls: ['https://sepolia.etherscan.io/']
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
const getTokenUsdtContract = async () => {
    return getContract(tokenAbi, tokenUsdtAddress);
}

// 获取usdc代币合约
const getTokenUsdcContract = async () => {
  return getContract(tokenAbi, tokenUsdcAddress);
}

// 获取业务合约
const getOgContract = async () => {
    return getContract(ogAbi, ogContractAddress);
}

// 领取USDT测试代币
const mintUsdt = async (receiver, amount) => {
    try {
        amount = toWei(amount);
        const erc20Contract = await getTokenUsdtContract()
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

// 领取USDC测试代币
const mintUsdc = async (receiver, amount) => {
  try {
      amount = toWei(amount);
      const erc20Contract = await getTokenUsdcContract()
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
      // 针对不支持原始消息签名的钱包做 "消息签名" 处理
      const result = await signDataForNativeMessage(address, message);
      return result;
    }
}

// 针对有些钱包没有对原始消息进行hash处理的（比如：coinbase, bitpie 钱包），自己做消息hash处理
const signDataForNativeMessage = async (address, message) => {
  try {
   // 将消息进行哈希处理
   const encodedMessage = ethers.utils.hashMessage(message);
   // 设置默认参数 (适用于非 Coinbase 钱包)
   let params = [address, encodedMessage];
   // 如果是 Coinbase 钱包，调整参数顺序
   if (isCoinbase()) {
      params = [encodedMessage, address];  // Coinbase 特殊处理
    }
    const signature = await window.ethereum
      .request({ method: "personal_sign", params: params },
      )
    return successResult(signature)
  } catch (error) {
    return failResult(error)
  }
}

const isCoinbase = () => {
  return window.ethereum?.isCoinbaseWallet
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
const allowanceUsdt = async (account, spender) => {
    spender = spender || ogContractAddress;
    try {
      const erc20Contract = await getTokenUsdtContract()
      const resp = await erc20Contract.allowance(account, spender)
      return successResult(getBalanceNumber(new BigNumber(resp ? resp.toString() : 0)))
    } catch (error) {
      return failResult(error)
    }
}

const allowanceUsdc = async (account, spender) => {
  spender = spender || ogContractAddress;
  try {
    const erc20Contract = await getTokenUsdcContract()
    const resp = await erc20Contract.allowance(account, spender)
    return successResult(getBalanceNumber(new BigNumber(resp ? resp.toString() : 0)))
  } catch (error) {
    return failResult(error)
  }
}

// 授权usdt给业务合约
const approveUsdt = async (amount, spender = ogContractAddress, ) => {
    try {
        amount = toWei(amount)
        const erc20Contract = await getTokenUsdtContract()
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

// 授权usdc给业务合约
const approveUsdc = async (amount, spender = ogContractAddress, ) => {
  try {
      amount = toWei(amount)
      const erc20Contract = await getTokenUsdcContract()
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

// 充值Usdt
const depositUsdt = async (amount) => {
    try {
        amount = toWei(amount)
        const ogContract = await getOgContract()
        const gasEstimated = await ogContract.estimateGas.deposit(tokenUsdtAddress,amount)
        const gasLimit = gasEstimated.mul(120).div(100)
        const tx = await (await ogContract.deposit(tokenUsdtAddress,amount, {
          gasLimit: gasLimit,
        })).wait()
        return successResult(tx)
    } catch (error) {
        console.log(error)
        return failResult(error)
    }
}


// 充值Usdc
const depositUsdc = async (amount) => {
  try {
      amount = toWei(amount)
      const ogContract = await getOgContract()
      const gasEstimated = await ogContract.estimateGas.deposit(tokenUsdcAddress,amount)
      const gasLimit = gasEstimated.mul(120).div(100)
      const tx = await (await ogContract.deposit(tokenUsdcAddress,amount, {
        gasLimit: gasLimit,
      })).wait()
      return successResult(tx)
  } catch (error) {
      console.log(error)
      return failResult(error)
  }
}




 // 账户USDT余额
 const balanceOfUsdt = async (address) => {
    try {
      const erc20Contract = await getTokenUsdtContract()
      const resp = await erc20Contract.balanceOf(address)
      const balance = getBalanceNumber(new BigNumber(resp ? resp.toString() : 0))
      return successResult(balance)
    } catch (error) {
      console.log(error)
      return 0
    }
}

 // 账户USDC余额
 const balanceOfUsdc = async (address) => {
  try {
    const erc20Contract = await getTokenUsdcContract()
    const resp = await erc20Contract.balanceOf(address)
    const balance = getBalanceNumber(new BigNumber(resp ? resp.toString() : 0))
    return successResult(balance)
  } catch (error) {
    console.log(error)
    return 0
  }
}

// 查询业务合约USDT余额
const queryContractUsdtBalance = async () => {
    try {
      const erc20Contract = await getTokenUsdtContract()
        const resp = await erc20Contract.balanceOf(ogContractAddress)
        const balance = getBalanceNumber(new BigNumber(resp ? resp.toString() : 0))
        return successResult(balance)
    } catch (error) {
        console.log(error)
        return 0
    }
}

// 查询业务合约USDC余额
const queryContractUsdcBalance = async () => {
  try {
    const erc20Contract = await getTokenUsdcContract()
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
  

