<template>
  <div class="common-layout">
    <el-container class="container-xxl">
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <el-row :gutter="10" style="margin-left: 0;margin-right: 0;">
          <el-col :span="showSecondaryNavigation ? 16 : 0" v-if="showSecondaryNavigation" :xs="0" :sm="16" :md="16"
            :lg="16">
            <div class="main_left">
              <router-view></router-view>
            </div>
          </el-col>
          <el-col :span="showSecondaryNavigation ? 8 : 8" style="margin:auto" :xs="24" :sm="24" :md="8" :lg="8">
            <div class="main_right">
              <el-tabs v-model="activeName" type="border-card" class="demo-tabs" @tab-change="handleClick">
                <el-tab-pane name="MARKET">
                  <template #label>
                    <span class="custom-tabs-label">
                      <span>MARKET</span>
                    </span>
                  </template>
                  <div>
                    <el-row :gutter="10">
                      <el-col :span="24" class="swap_header">
                        <h1 style="color:black;font-size:20px">Swap</h1>
                        <p>Trade tokens in an instant</p>
                        <div class="swap_header_button">
                          <el-tooltip effect="dark" content="Buy crypto with fiat." placement="bottom">
                            <el-button text>
                              <svg-icon name="moneyBangs" width="1.5rem" height="1.6rem"></svg-icon>
                            </el-button>
                          </el-tooltip>
                          <el-button text @click="tolineChart">
                            <svg-icon name="brokeline"></svg-icon>
                          </el-button>
                          <el-tooltip effect="dark" content="Check out the top traded tokens" placement="bottom">
                            <el-button text><svg-icon name="fueloil"></svg-icon></el-button>
                          </el-tooltip>
                          <el-button text><svg-icon name="settings"></svg-icon></el-button>
                          <el-button text><svg-icon name="countdown"></svg-icon></el-button>
                          <el-button text><svg-icon name="reset"></svg-icon></el-button>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="main_header">
                          <div :class="{ a: true, a1: isSorted }">
                            <el-select v-model="tokenSelectA" @change="monitorValueA" placeholder="Select"
                              size="default" style="width: 170px">
                              <template #prefix>
                                <div>
                                  <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-top:5px"></svg-icon>
                                </div>
                              </template>
                              <el-option v-for="item in optionsA" :key="item.contractaddress" :label="item.ercsymbol"
                                :value="item.contractaddress" />
                            </el-select>
                          </div>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:{{ userBalanceA
                              }}</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="tokenInputA" @input="update0" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="sort_box">
                          <el-button type="success" icon="Sort" circle size="large" @click="sortAssets" />
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="main_header">
                          <div class="tokenB">
                            <div :class="{ a: true, a2: isSorted }">
                              <el-select v-model="tokenSelectB" @change="monitorValueB" placeholder="Select"
                                size="default" style="width: 170px">
                                <template #prefix>
                                  <div>
                                    <svg-icon name="bnb" width="1.6rem" height="1.6rem"
                                      style="margin-top:5px"></svg-icon>
                                  </div>
                                </template>
                                <el-option v-for="item in optionsB" :key="item.contractaddress" :label="item.ercsymbol"
                                  :value="item.contractaddress" />
                              </el-select>
                            </div>
                            <el-tooltip content="Copy TokenAddress" placement="top">
                              <el-button text plain size="small" @click="copyTokenAddress"><el-icon>
                                  <CopyDocument />
                                </el-icon></el-button>
                            </el-tooltip>
                            <el-tooltip content="Add token" placement="top">
                              <el-button text plain size="default" @click="addToken">
                                <svg-icon name="fox" width="0.9rem" height="0.9rem"></svg-icon>
                              </el-button>
                            </el-tooltip>
                          </div>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:{{ userBalanceB
                              }}</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="tokenInputB" @input="update1" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div v-if="tokenInputA || tokenInputB" class="swap_footer_button swap_footer_refresh">
                          <span style="color:#a88efc;font-weight:bold">Price</span>
                          <div>
                            <span v-if="showConversion" style="color:black;">1 {{ priceA }} <svg-icon name="conversion"
                                width="0.8rem" height="0.8rem"></svg-icon> {{ topriceB }} {{ priceB }}</span>
                            <span v-else style="color:black;">1 {{ priceB }} <svg-icon name="conversion" width="0.8rem"
                                height="0.8rem"></svg-icon>
                              {{ topriceA }} {{ priceA }}</span>
                            <el-button text plain icon="Refresh" @click="clickRefresh"></el-button>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="swap_footer_button">
                        </div>
                        <div v-if="!userAddress">
                          <el-button color="#1fc7d4" class="custom-button" round style="width:100%;"
                            @click="connectWallet">
                            <h2 style="color: #fff;">Connect Wallet</h2>
                          </el-button>
                          <div class="Crypto">
                            <span>Insufficient Funds? </span>
                            <router-link to="swap" style="color:#1fc7d4">Buy Crypto here.</router-link>
                          </div>
                        </div>
                        <div v-else-if="userAddress && !tokenInputA">
                          <el-button color="#e9eaeb" class="custom-button" round style="width:100%;">
                            <h2 style="color: #bdc2c4;">Enter an amount</h2>
                          </el-button>
                        </div>
                        <div v-else-if="userAddress && tokenInputA && !isAdequacy">
                          <el-button color="#e9eaeb" class="custom-button" round style="width:100%;">
                            <h2 style="color: #bdc2c4;">Insufficient balance</h2>
                          </el-button>
                          <div class="Crypto">
                            <span>Insufficient Funds? </span>
                            <router-link to="swap" style="color:#1fc7d4">Buy Crypto here.</router-link>
                          </div>
                        </div>
                        <div v-else-if="isapprove || tokenSelectA === config.wmnt_addr">
                          <el-button color="#1fc7d4" class="custom-button" round style="width:100%;" @click="trading">
                            <h2 style="color: #fff;">Trading</h2>
                          </el-button>
                        </div>
                        <div v-else>
                          <el-button color="#1fc7d4" class="custom-button" round style="width:100%;" @click="approve">
                            <h2 style="color: #fff;">授权</h2>
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="showSecondaryNavigation ? 16 : 0" v-if="showSecondaryNavigation" :xs="24" :sm="0" :md="0"
            :lg="0">
            <div class="main_left main_footer">
              <router-view></router-view>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-aside class="responsive-aside"></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import { ElMessage, ElLoading } from 'element-plus'
import MetamaskService from '@/components/MetamaskService';
import { ethers, parseEther, formatEther } from "ethers";
import { config } from "@/const/config";
import { getTokens } from '@/api/Liquiditys'
const showConversion = ref(false)
const activeName = ref('MARKET');
const readProvider = new ethers.JsonRpcProvider(config.rpc);
const writeProvider = new ethers.BrowserProvider(window.ethereum);
const Router02 = new ethers.Contract(config.router02_addr, config.router02, readProvider)
const tokenSelectA = ref('')
const tokenSelectB = ref('')
const tokenInputA = ref('')
const tokenInputB = ref('')
const reserve0swap = ref('')
const reserve1swap = ref('')
const isSorted = ref(false)
const sortAssets = async () => {
  isSorted.value = !isSorted.value;
  reserve1swap.value = '';
  reserve0swap.value = '';
  if (isSorted.value) {
    const tempA = tokenSelectA.value;
    const tempB = tokenSelectB.value;
    tokenSelectA.value = tempB;
    tokenSelectB.value = tempA;
    tokenInputA.value = reserve1swap.value;
    tokenInputB.value = reserve0swap.value;
  } else {
    const tempA = tokenSelectA.value;
    const tempB = tokenSelectB.value;
    tokenSelectA.value = tempB;
    tokenSelectB.value = tempA;
    tokenInputA.value = reserve0swap.value;
    tokenInputB.value = reserve1swap.value;
  }
  ifapprove();
  getBalance();
}
const getToken = ref({})
const addToken = async () => {
  getToken.value = optionsB.value.find(item => item.contractaddress === tokenSelectB.value);
  const token = {
    address: tokenSelectB.value,
    symbol: getToken.value.ercsymbol,
    decimals: getToken.value.decimals,
  }
  try {
    await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: token
      }
    });
    ElMessage.success("添加代币成功")
  } catch (error) {
    ElMessage.error("添加代币失败")
    console.log(error);
  }
}
const tolineChart = () => {
  if (tokenSelectA.value && tokenSelectB.value) {
    router.push({
      name: 'linechart',
      params: {
        tokenA: tokenSelectA.value,
        tokenB: tokenSelectB.value,
      }
    })
  } else {
    ElMessage.warning('Please select two tokens.')
  }

}
const monitorValueA = async (newValue) => {
  tokenInputA.value = '';
  tokenInputB.value = '';
  if (tokenSelectA.value === newValue) {
    if (newValue === tokenSelectB.value) {
      tokenSelectA.value = '';
      ElMessage.warning('This token is already selected for the other field.')
      return;
    }
  }
  const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
  const p_addr = await factory.getPair(tokenSelectA.value, tokenSelectB.value)
  if (p_addr === ethers.ZeroAddress) {
    ElMessage.warning('当前交易对池子没有建立');
    tokenSelectA.value = '';
    return
  }
  ifapprove();
  await getBalance()
}
const monitorValueB = async (newValue) => {
  tokenInputA.value = '';
  tokenInputB.value = '';
  if (tokenSelectB.value === newValue) {
    if (newValue === tokenSelectA.value) {
      tokenSelectB.value = '';
      ElMessage.warning('This token is already selected for the other field.')
      return;
    }
  }
  const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
  const p_addr = await factory.getPair(tokenSelectA.value, tokenSelectB.value)
  if (p_addr === ethers.ZeroAddress) {
    ElMessage.warning('当前交易对池子没有建立');
    tokenSelectB.value = '';
    return
  }
  ifapprove();
  await getBalance()
}
const isapprove = ref(false);
//判断某个合约,是否授权
const ifapprove = async () => {
  const token = new ethers.Contract(tokenSelectA.value, config.erc20, readProvider);
  const result = await token.allowance(userAddress.value, config.router02_addr)
  if (result === ethers.MaxUint256) {
    isapprove.value = true;
  } else {
    isapprove.value = false;
  }
}

const copiedText = ref("");
const copyTokenAddress = () => {
  if (!tokenSelectB.value) {
    ElMessage.warning('Please select a token to swap.');
    tokenInputB.value = '';
    return
  } else {
    copiedText.value = tokenSelectB.value
    navigator.clipboard.writeText(copiedText.value)
      .then(() => {
        ElMessage.success('Copy successful!');
      })
      .catch(err => {
        console.error('Copy failed:', err);
        ElMessage.error('Copy failed, please copy manually!');
      });
  }

}
const optionsA = ref([])
const optionsB = ref([])
const reserve0 = ref(config.usdt_addr);//USDT
const reserve1 = ref(config.wmnt_addr);//MNB
const getSwapPair = async () => {
  const res = await getTokens();
  optionsA.value = res.data;
  optionsB.value = res.data;
  tokenSelectA.value = reserve0.value;
  tokenSelectB.value = reserve1.value;
  await getBalance()
  await ifapprove();
}
getSwapPair();
const userAddress = ref('')
const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const { account } = await MetamaskService.connectWallet();
      userAddress.value = account;
    } catch (error) {

    }
  }

}
connectWallet()
const userBalanceA = ref('')
const userBalanceB = ref('')
const BalanceAs = ref(0);
const BalanceBs = ref(0);
const getBalance = async () => {
  try {
    const tokenContractA = new ethers.Contract(tokenSelectA.value, config.erc20, readProvider);
    const tokenContractB = new ethers.Contract(tokenSelectB.value, config.erc20, readProvider);
    let balanceA;
    if (tokenSelectA.value.toLocaleLowerCase() === config.wmnt_addr.toLocaleLowerCase()) {
      balanceA = await readProvider.getBalance(userAddress.value)
    } else {
      balanceA = await tokenContractA.balanceOf(userAddress.value);
    }
    let balanceB;
    if (tokenSelectB.value.toLocaleLowerCase() === config.wmnt_addr.toLocaleLowerCase()) {
      balanceB = await readProvider.getBalance(userAddress.value);
    } else {
      balanceB = await tokenContractB.balanceOf(userAddress.value);
    }
    BalanceAs.value = balanceA;
    BalanceBs.value = balanceB;
    userBalanceA.value = parseFloat(formatEther(balanceA)).toFixed(6);
    userBalanceB.value = parseFloat(formatEther(balanceB)).toFixed(6);
  } catch (error) {
    console.log(error);
  }
}
const showSecondaryNavigation = ref(false);
const handleClick = (tab) => {
  showSecondaryNavigation.value = tab === 'MARKET' ? false : true;
  if (tab === 'TWAP') {
    router.push('/swap/twap')
  } else if (tab === 'LIMIT') {
    router.push('/swap/limit');
  } else if (tab === 'MARKET') {
    router.push('/swap')
  }
}
const getCurrentercsymbolA = () => {
  const selectedOption = optionsA.value.find(option => option.contractaddress === tokenSelectA.value)
  if (selectedOption) {
    return selectedOption.ercsymbol
  }
}
const getCurrentercsymbolB = () => {
  const selectedOption = optionsB.value.find(option => option.contractaddress === tokenSelectB.value)
  if (selectedOption) {
    return selectedOption.ercsymbol
  }
}

const priceA = ref('');
const priceB = ref('');
const topriceA = ref(0);
const topriceB = ref(0);
const isAdequacy = ref(false);
let state = 1;
const update0 = async () => {
  priceA.value = getCurrentercsymbolA();
  priceB.value = getCurrentercsymbolB();
  if (tokenInputA.value == "" || tokenInputA.value == 0) {
    tokenInputB.value = "";
    return;
  } else if (!tokenSelectA.value || !tokenSelectB.value) {
    ElMessage.warning('Please select a token to swap.');
    tokenInputA.value = '';
    return
  }
  const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
  const p_addr = await factory.getPair(tokenSelectA.value, tokenSelectB.value)
  const uniswapV2Pair1 = new ethers.Contract(p_addr, config.UniswapV2Pair, readProvider);
  const res = await uniswapV2Pair1.getReserves();
  const reserveA_Number = Number(res[0]);
  const reserveB_Number = Number(res[1]);
  if (tokenSelectA.value > tokenSelectB.value) {
    topriceB.value = reserveA_Number / reserveB_Number;
    topriceA.value = reserveB_Number / reserveA_Number;
  } else {
    topriceA.value = reserveA_Number / reserveB_Number;
    topriceB.value = reserveB_Number / reserveA_Number;
  }
  try {
    if (tokenSelectA.value == config.usdt_addr && tokenSelectB.value == config.wmnt_addr) {
      state = 1;
    } else if (tokenSelectA.value == config.wmnt_addr && tokenSelectB.value == config.usdt_addr) {
      state = 2;
    } else {
      state = 3;
    }
    // 输入上面 计算下面的值
    const path = [tokenSelectA.value, tokenSelectB.value];
    const amountIn = parseEther(tokenInputA.value);
    const amounts = await Router02.getAmountsOut(amountIn, path);
    const amountOutMin = amounts[1];
    tokenInputB.value = formatEther(amountOutMin);
    const amountIns = parseEther(tokenInputA.value);
    if (BalanceAs.value >= amountIns) {
      isAdequacy.value = true
    } else {
      isAdequacy.value = false;
      tokenInputA.value = '';
      tokenInputB.value = '';
      ElMessage.warning('用户余额不足')
      return
    }

    if (tokenInputA.value == "" || tokenInputA.value == 0) {
      tokenInputB.value = "";
      return true;
    }
  } catch (err) {
    console.log(err);
    ElMessage.error("输入的金额不对")
  }
}
const update1 = async () => {
  priceA.value = getCurrentercsymbolA();
  priceB.value = getCurrentercsymbolB();
  if (tokenInputB.value == "" || tokenInputB.value == 0) {
    tokenInputA.value = "";
    return;
  } else if (!tokenSelectB.value || !tokenSelectA.value) {
    ElMessage.warning('Please select a token to swap.');
    tokenInputB.value = '';
    return
  }
  const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
  const p_addr = await factory.getPair(tokenSelectA.value, tokenSelectB.value)
  const uniswapV2Pair1 = new ethers.Contract(p_addr, config.UniswapV2Pair, readProvider);
  const res = await uniswapV2Pair1.getReserves();
  const reserveA_Number = Number(res[0]);
  const reserveB_Number = Number(res[1]);
  topriceA.value = reserveA_Number / reserveB_Number;
  topriceB.value = reserveB_Number / reserveA_Number;
  if (p_addr === ethers.ZeroAddress) {
    ElMessage.warning('当前交易对没有匹配');
  }
  try {
    if (tokenSelectA.value == config.usdt_addr && tokenSelectB.value == config.wmnt_addr) {
      state = 4;
    } else if (tokenSelectA.value == config.wmnt_addr && tokenSelectB.value == config.usdt_addr) {
      state = 5;
    } else {
      state = 6;
    }
    const path = [tokenSelectA.value, tokenSelectB.value];
    const amountOut = parseEther(tokenInputB.value);
    const amounts = await Router02.getAmountsIn(amountOut, path);
    const amountInMax = amounts[0];
    tokenInputA.value = formatEther(amountInMax);
    const amountOuts = parseEther(tokenInputB.value);
    if (BalanceBs.value >= amountOuts) {
      isAdequacy.value = true
    } else {
      isAdequacy.value = false;
      tokenInputA.value = '';
      tokenInputB.value = '';
      ElMessage.warning('用户余额不足')
      return
    }
    if (tokenInputB.value == "" || tokenInputB.value == 0) {
      tokenInputA.value = "";
      return true;
    }
  } catch (err) {
    console.log(err);
    ElMessage.error("输入的金额不对")
    tokenInputA.value = '';
    tokenInputB.value = '';
  }
}
const clickRefresh = () => {
  showConversion.value = !showConversion.value
}
const approve = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在授权，请稍候...',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  const tokenA_addr = tokenSelectA.value;
  const signer = await writeProvider.getSigner();
  const TokenA = new ethers.Contract(tokenA_addr, config.erc20, signer);
  try {
    const tx = await TokenA.approve(config.router02_addr, ethers.MaxUint256);
    await tx.wait();
    ElMessage.success('授权成功')
    ifapprove();
  } catch (error) {
    console.log(error);
  } finally {
    // 关闭 loading 动画
    loading.close();
  }
}

const trading = async () => {
  if (tokenInputA.value == "" || tokenInputB.value == "") {
    ElMessage.warning('Please fill in the data')
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    text: '正在交易，请稍候...',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  const signer = await writeProvider.getSigner();
  const routerForTransactions = new ethers.Contract(config.router02_addr, config.router02, signer);
  try {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      throw new Error("MetaMask not detected");
    }
    let tx;
    const amountA = parseEther(tokenInputA.value);
    const amountB = parseEther(tokenInputB.value);
    if (state == 1) {
      //不精确买入  usdt上面  mnt下面
      const path = [tokenSelectA.value, tokenSelectB.value];
      const amounts = await Router02.getAmountsOut(amountA, path)
      const amountOutMin = amounts[1]; // 0
      tx = await routerForTransactions.swapExactTokensForETH(amountA, amountOutMin, path, userAddress.value, ethers.MaxUint256);

    } else if (state == 2) {
      //精确卖出ETH  mnt上面 usdt下面
      const path = [tokenSelectA.value, tokenSelectB.value];
      const amounts = await Router02.getAmountsOut(amountA, path)
      const amountOutMin = amounts[1]; // 0
      tx = await routerForTransactions.swapExactETHForTokens(amountOutMin, path, userAddress.value, ethers.MaxUint256, { value: amountA }
      );
    } else if (state == 3) {
      //精确输入 普通交易对 输入上面计算下面
      let path = [];
      path = [tokenSelectA.value, tokenSelectB.value];
      const amounts = await Router02.getAmountsOut(amountA, path);
      const amountOutMin = amounts[1];
      tx = await routerForTransactions.swapExactTokensForTokens(amountA, amountOutMin, path, userAddress.value, ethers.MaxUint256)
    } else if (state == 4) {
      // 精确买入  usdt在上面/mnt在下面
      const path = [tokenSelectA.value, tokenSelectB.value];
      const ret = await Router02.getAmountsIn(amountB, path)
      const amountInMax = ret[0]; //ret[0]
      tx = await routerForTransactions.swapTokensForExactETH(amountB, amountInMax, path, userAddress.value, ethers.MaxUint256,
      );
    }
    else if (state == 5) {
      //不精确卖出  mnt在上面,usdt在下面
      console.log(amountB);
      const path = [tokenSelectA.value, tokenSelectB.value];
      const amounts = await Router02.getAmountsIn(amountB, path);
      const amountInMin = amounts[0]
      tx = await routerForTransactions.swapETHForExactTokens(amountB, path, userAddress.value, ethers.MaxUint256,
        { value: amountInMin }
      );
    }
    else if (state == 6) {
      //精确输出 普通交易对 输入下面计算上面
      let path = [];
      path = [tokenSelectA.value, tokenSelectB.value];
      const ret = await Router02.getAmountsIn(amountB, path)
      const amountInMax = ret[0]
      tx = await routerForTransactions.swapTokensForExactTokens(amountB, amountInMax, path, userAddress.value, ethers.MaxUint256
      );
    }
    if (tx) {
      const receipt = await tx.wait();
      console.log("Transaction successful:", receipt);
      tokenInputA.value = "";
      tokenInputB.value = "";
      ElMessage.success('Successful transaction');
      getBalance()
    } else {
      console.error("Transaction was not sent.");
    }
  } catch (error) {
    console.error("An error occurred during the transaction:", error);
    ElMessage.error('交易失败');
  } finally {
    // 关闭 loading 动画
    loading.close();
  }
}

</script>

<style scoped>
.el-row {
  padding: 10px 10px;
}

/* .swap_footer_refresh {
  padding-left: 9px;
} */

.container-xxl {
  position: relative;
  background: linear-gradient(to right, #e5fdff, #f3efff);
}

.main_header {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.input-with-result {
  position: relative;
  width: 100%;
}

.content_box {
  max-width: 18.75rem;
  font-size: 15px;
}

.content_box_p {
  margin: 10px 0;
  color: #1fc7d4;
  font-weight: 700;
}

.slider_box {
  display: flex;
  background-color: rgb(238, 234, 244);
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  height: 3.5rem;
}

.el-slider {
  --el-slider-main-bg-color: #1fc7d4;
}

.input-area {
  height: 50px;
  resize: none;
  border-bottom: none;
}

.Crypto {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.result-area {
  position: absolute;
  top: 31px;
  left: 7px;
  width: 90%;
  padding: 5px;
  font-size: 12px;
  background-color: #eeeaf4;
}

.responsive-aside {
  width: 3vw;
  transition: width 0.5s ease;
}

:deep(.el-button+.el-button) {
  margin-left: 0px;
}

.main_left {
  height: auto;
}

.main_footer {
  height: auto;
  margin-top: 20px;
}

.swap_header {
  height: 7.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: #e7e3eb 1px solid;
  padding: 15px 10px;
}

.twap_header {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: #e7e3eb 1px solid;
  padding: 15px 10px;
}

.bnb_header {
  /* height: 11.75rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 10px;
}
.tokenB{
  display: flex;
  align-items: center;
}
.a {
  transition: transform 1.1s;
}

.a1 {
  transform: translate(0, 13rem);
}

.a2 {
  transform: translate(0, -13rem);
}

.swap_header_button {
  display: flex;
  justify-content: flex-end;
}

.swap_footer_button {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
}

.custom-button {
  height: 50px;
}

.demo-tabs {
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  border: 1px solid #dcdee2;
}

:deep(.el-tabs__header .el-tabs__item.is-active) {
  color: #FFF;
  background-color: #7a6eaa;
  border-radius: 15px;
}

:deep(.el-tabs--border-card>.el-tabs__header) {
  border-radius: 15px;
  background-color: #eeeaf4;
  width: 100%;
}

:deep(.el-tabs__nav) {
  float: none;
  justify-content: space-around;
}

:deep(.el-tabs__header .el-tabs__item) {
  flex: 1;
}

.el-dropdown_span {
  font-size: 15px;
  color: rgb(40, 13, 95)
}

.twap_trade {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

:deep(.el-input__wrapper) {
  /* border-radius: 15px; */
  background-color: rgb(238, 234, 244);
}

:deep(.el-input-group__append) {
  background-color: rgb(238, 234, 244);
}

.input-width-select {
  width: 100%;
}

.input_width_div {
  width: 30%;
}

.select_width {
  width: 140px;
}

:deep(.el-dialog) {
  width: 450px;
  border-radius: 20px;
}

.dialog_button {
  margin: 10px 0;
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
}

.dialog_button_div {
  display: flex;
  justify-content: space-around;
}

.dialog_span {
  color: var(--colors-text);
  line-height: 1.5;
  font-size: 16px;
  margin-left: 7px;
}

.dialog_row {
  border-top: 1px solid #e7e3eb;
  padding-top: 10px;
}

.sort_box {
  display: flex;
  justify-content: center;
  height: 4.0625rem;
  align-items: center;
  margin-top: 10px;
}

.dialog_title {
  font-size: 20px;
  font-weight: 600;
  color: black;
  padding-bottom: 10px;
}

:deep(.el-select__placeholder) {
  color: #280d5f;
  font-weight: 600;
  font-size: 16px;
}

:deep(.el-select__caret) {
  color: #280d5f;
  font-weight: 600;
  font-size: 16px;
}

@media (min-width: 768px) {
  .responsive-aside {
    width: 3vw;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}

@media (max-width: 768px) {
  .input-width-select {
    width: 205px;
  }

  .select_width {
    width: 113px;
  }

  .input_width_div {
    width: 37%;
  }

  :deep(.el-dialog) {
    width: 100%;
  }

  .el-main {
    --el-main-padding: 0;
  }

  :deep(.el-tabs--border-card>.el-tabs__content) {
    padding: 0;
  }
}
</style>