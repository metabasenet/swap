<template>
    <div class="common-layout">
        <el-container class="container-xxl">
            <div class="container_bgc"></div>
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="10" style="margin:auto" :xs="24" :sm="24" :md="12" :lg="12">
                        <div class="liquidity-box">
                            <div class="liquidity-title">
                                <div class="back_title">
                                    <el-button text>
                                        <router-link to="/swap"> <svg-icon name="back">
                                            </svg-icon></router-link>
                                    </el-button>
                                    <div style="margin-left:10px">
                                        <p>Add V2 Liquidity</p>
                                    </div>
                                </div>
                                <el-button text><svg-icon name="settings"></svg-icon></el-button>
                            </div>
                            <el-row>
                                <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="12">
                                    <div class="add_left">
                                        <p class="add_leftP">CHOOSE TOKEN PAIR</p>
                                        <div class="addv2_button">
                                            <!-- <el-button color="#eeeaf4" class="custom-button" round style="width:45%;"
                                                @click="dialogVisible = true">
                                                <div class="icon-title">
                                                    <svg-icon name="bnb"></svg-icon><span class="find_span">BNB</span>
                                                </div>
                                                <el-icon class="right_icon">
                                                    <ArrowDown />
                                                </el-icon>
                                            </el-button> -->
                                            <el-select v-model="reserve0" @change="monitorValueA" size="default"
                                                style="width:100%;">
                                                <template #prefix>
                                                    <div>
                                                        <svg-icon name="bnb" width="1.5rem" height="1.5rem"
                                                            style="margin-top:5px"></svg-icon>
                                                    </div>
                                                </template>
                                                <el-option v-for="item in optionsA" :key="item.contractaddress"
                                                    :label="item.ercsymbol" :value="item.contractaddress" />
                                            </el-select>
                                            <div class="addPlus">
                                                <el-icon size="large">
                                                    <Plus />
                                                </el-icon>
                                            </div>
                                            <!-- <el-button color="#eeeaf4" class="custom-button" round style="width:45%;"
                                                @click="dialogVisible = true">
                                                <div class="icon-title">
                                                    <svg-icon name="bnb"></svg-icon><span class="find_span">BNB</span>
                                                </div>
                                                <el-icon class="right_icon">
                                                    <ArrowDown />
                                                </el-icon>
                                            </el-button> -->
                                            <el-select v-model="reserve1" @change="monitorValueB" placeholder="Select"
                                                size="default" style="width: 100%">
                                                <template #prefix>
                                                    <div>
                                                        <svg-icon name="bnb" width="1.5rem" height="1.5rem"
                                                            style="margin-top:5px"></svg-icon>
                                                    </div>
                                                </template>
                                                <el-option v-for="item in optionsB" :key="item.contractaddress"
                                                    :label="item.ercsymbol" :value="item.contractaddress" />
                                            </el-select>
                                        </div>
                                        <!-- <el-button color="#faf9fa" class="custom-button" round style="width:100%;"
                                            @click="dialogVisible = true">
                                            <div class="icon-title">
                                                <span class="find_span">V2LP - 0.25 fee tier</span>
                                            </div>
                                            <el-button class="right_icon" text>
                                                <span class="button_More">More<el-icon>
                                                        <ArrowDown />
                                                    </el-icon></span>
                                            </el-button>
                                        </el-button> -->
                                        <p class="add_leftP">DEPOSIT AMOUNT</p>
                                        <div class="main_header">
                                            <el-button text plain>
                                                <svg-icon name="bnb" width="1.5rem" height="1.5rem"
                                                    style="margin-right:5px"></svg-icon>
                                                <h2 style="color:black">{{ reserve0Name }}</h2>
                                            </el-button>
                                            <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:{{
                                                userBalanceA }}</span></el-button>
                                        </div>
                                        <div class="input-with-result">
                                            <el-input v-model="reserve0Input" @input="update0" type="textarea"
                                                resize="none"
                                                input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px"
                                                :rows="3" placeholder="0.0" class="input-area"></el-input>
                                            <!-- <div class="result-area" v-if="inputValue">
                                                <span>~{{ inputValue }} USD</span>
                                            </div> -->
                                        </div>
                                        <div class="main_header">
                                            <div>
                                                <el-button text plain>
                                                    <svg-icon name="bnb" width="1.5rem" height="1.5rem"
                                                        style="margin-right:5px"></svg-icon>
                                                    <h2 style="color:black">{{ reserve1Name }}</h2>
                                                </el-button>
                                                <el-tooltip content="Copy TokenAddress" placement="top">
                                                    <el-button text style="margin-left:0" size="small"
                                                        @click="copyTokenAddress"><el-icon>
                                                            <CopyDocument />
                                                        </el-icon></el-button>
                                                </el-tooltip>
                                                <el-tooltip content="Add token" placement="top">
                                                    <el-button text plain style="margin-left:0" size="small"
                                                        @click="addToken">
                                                        <svg-icon name="fox" width="0.9rem" height="0.9rem"></svg-icon>
                                                    </el-button>
                                                </el-tooltip>
                                            </div>
                                            <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:{{
                                                userBalanceB }}</span></el-button>
                                        </div>
                                        <div class="input-with-result">
                                            <el-input v-model="reserve1Input" @input="update1" type="textarea"
                                                resize="none"
                                                input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px"
                                                :rows="3" placeholder="0.0" class="input-area"></el-input>
                                            <!-- <div class="result-area" v-if="inputValue">
                                                <span>~{{ inputValue }} USD</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="12">
                                    <div class="add_right">
                                        <svg-icon name="dolphin" width="8rem" height="8rem">
                                        </svg-icon>
                                        <p class="add_right_p">Your position will appear here.</p>
                                        <!-- <div class="price_boxs">
                                            <div class="price_box">
                                                <p>Min Price</p>
                                                <div class="minprice">
                                                    <el-button color="#1fc7d4" circle>
                                                        <el-icon color="#fff">
                                                            <Minus />
                                                        </el-icon>
                                                    </el-button>
                                                    <span>0.0</span>
                                                    <el-button color="#1fc7d4" circle>
                                                        <el-icon color="#fff">
                                                            <Plus />
                                                        </el-icon>
                                                    </el-button>
                                                </div>
                                                <p>USDT per BNB</p>
                                            </div>
                                            <div class="price_box">
                                                <p>Min Price</p>
                                                <div class="minprice">
                                                    <el-button color="#1fc7d4" circle>
                                                        <el-icon color="#fff">
                                                            <Minus />
                                                        </el-icon>
                                                    </el-button>
                                                    <span>0.0</span>
                                                    <el-button color="#1fc7d4" circle>
                                                        <el-icon color="#fff">
                                                            <Plus />
                                                        </el-icon>
                                                    </el-button>
                                                </div>
                                                <p>USDT per BNB</p>
                                            </div>
                                        </div> -->
                                        <!-- <el-button v-if="!isConnect" color="#1fc7d4" class="amount_button" round style="width:90%;"
                                            @click="connectWallet">
                                            <h2 style="color: #fff;">Connect Wallet</h2>
                                        </el-button>
                                        <el-button v-else color="#e9eaeb" class="amount_button" round style="width:90%;">
                                            <h2 style="color: #bdc2c4;">Enter an amount</h2>
                                        </el-button> -->
                                        <el-button v-if="!isapprove" color="#1fc7d4" class="amount_button" round
                                            style="width:40%;" @click="approve">
                                            <h2 style="color: #fff;">授权</h2>
                                        </el-button>
                                        <el-button v-else color="#1fc7d4" class="amount_button" round style="width:40%;"
                                            @click="addLiquidity">
                                            <h2 style="color: #fff;">Add Liquidity</h2>
                                        </el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <el-dialog v-model="dialogVisible" title="Select a Token">
                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-input size="large" v-model="seachDialog"
                                placeholder="Search name or paste address"></el-input>
                            <div class="dialog_button">
                                <div>
                                    <span>Common tokens</span>
                                    <el-tooltip effect="dark" content="Connect Wallet" placement="right">
                                        <template #content>
                                            <div class="content_box">
                                                <p>
                                                    These tokens are commonly paired with
                                                    other tokens.
                                                </p>
                                            </div>
                                        </template>
                                        <el-button text plain icon="QuestionFilled">
                                        </el-button>
                                    </el-tooltip>
                                </div>
                                <div class="dialog_button_div">
                                    <el-button round class="dialog_icon_button"><svg-icon name="bnb"></svg-icon><span
                                            class="dialog_span">BNB</span></el-button>
                                    <el-button round class="dialog_icon_button"><svg-icon name="bnb"></svg-icon><span
                                            class="dialog_span">USDT</span></el-button>
                                    <el-button round class="dialog_icon_button"><svg-icon name="bnb"></svg-icon><span
                                            class="dialog_span">CAKE</span></el-button>
                                    <el-button round class="dialog_icon_button"><svg-icon name="bnb"></svg-icon><span
                                            class="dialog_span">BTCB</span></el-button>
                                </div>
                            </div>
                            <el-table :data="tableData" style="width: 100%;margin-top:20px">
                                <el-table-column label="" prop="date" align="left" />
                                <el-table-column label="" prop="name" align="right" />
                            </el-table>
                            <div class="dialog_button">
                                <el-button color="#1fc7d4" class="find-button" round style="width:100%;">
                                    <h2 style="color: #fff;">Manage Tokens</h2>
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-dialog>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getTokens } from '@/api/Liquiditys'
import { ElMessage, ElLoading } from 'element-plus';
import MetamaskService from '@/components/MetamaskService';
import { ethers, parseEther, formatEther } from "ethers";
import { config } from "@/const/config";
const reserve0 = ref(config.usdt_addr);
const reserve1 = ref(config.wmnt_addr);
const reserve0Input = ref('');
const reserve1Input = ref('');
const reserve0Name = ref("");
const reserve1Name = ref("");
const optionsA = ref([])
const optionsB = ref([])
const dialogVisible = ref(false);
const seachDialog = ref('');
const isConnect = ref("");
const readProvider = new ethers.JsonRpcProvider(config.rpc);
const writeProvider = new ethers.BrowserProvider(window.ethereum);
const Router02 = new ethers.Contract(config.router02_addr, config.router02, readProvider);
const userAddress = ref('')
const userBalanceA = ref('')
const userBalanceB = ref('')
const copiedText = ref("");
const getToken = ref({})
const isapprove = ref(false);
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
    },
])
const findName = async (data,token) => {
    const foundItem = data.find(item => item.contractaddress === token);
    return foundItem.ercsymbol
}
async function updateTokenNames() {
    reserve0Name.value = await findName(optionsA.value,reserve0.value);
    reserve1Name.value = await findName(optionsB.value,reserve1.value);
   await getBalance()
}
const getBalance = async () => {
    try {
        
        const tokenContractA = new ethers.Contract(reserve0.value, config.erc20, readProvider);
        const tokenContractB = new ethers.Contract(reserve1.value, config.erc20, readProvider);
        let balanceA;
        if (reserve0.value.toLocaleLowerCase() === config.wmnt_addr.toLocaleLowerCase()) {
            balanceA = await readProvider.getBalance(userAddress.value)
        } else {
            balanceA = await tokenContractA.balanceOf(userAddress.value);
        }
        let balanceB;
        if (reserve1.value.toLocaleLowerCase() === config.wmnt_addr.toLocaleLowerCase()) {
            balanceB = await readProvider.getBalance(userAddress.value);
        } else {
            balanceB = await tokenContractB.balanceOf(userAddress.value);
        }
        // BalanceAs.value = balanceA;
        // BalanceBs.value = balanceB;
        userBalanceA.value = parseFloat(formatEther(balanceA)).toFixed(6);
        userBalanceB.value = parseFloat(formatEther(balanceB)).toFixed(6);
    } catch (error) {
        console.log(error);
    }
}
const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const { provider, signer, account } = await MetamaskService.connectWallet();
            isConnect.value = account;
            userAddress.value = account;
        } catch (error) {
        }
    }
}
connectWallet()
const monitorValueA = async (newValue) => {
    if (newValue === reserve1.value) {
        reserve0.value = '';
        ElMessage.warning('This token is already selected for the other field.')
        return;
    }
    reserve0Name.value = await findName(optionsA.value,newValue);
    reserve0Input.value = "";
    reserve1Input.value = "";
    getBalance()
    ifapprove()
}
const monitorValueB = async (newValue) => {
    if (newValue === reserve0.value) {
        reserve1.value = '';
        ElMessage.warning('This token is already selected for the other field.')
        return;
    }
    reserve1Name.value = await findName(optionsB.value,newValue);
    getBalance()
    ifapprove()
}
const update0 = async () => {
    if (reserve0Input.value == "" || reserve0Input.value == 0) {
        reserve0Input.value == ""
        reserve1Input.value = "";
        return;
    }
    const path = [reserve0.value, reserve1.value];
    const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
    const p_addr = await factory.getPair(...path)
    if (p_addr === ethers.ZeroAddress) {
        // ElMessage.warning('当前交易对池子没有建立,请手动输入价格');
    } else {
        const amountIn = parseEther(reserve0Input.value);
        const amounts = await Router02.getAmountsOut(amountIn, path);
        const amountOutMin = amounts[1];
        reserve1Input.value = formatEther(amountOutMin);
    }
}
const update1 = async () => {
    if (reserve1Input.value == "" || reserve1Input.value == 0) {
        reserve0Input.value = "";
        reserve1Input.value == "";
        return;
    }
    const path = [reserve0.value, reserve1.value];
    const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
    const p_addr = await factory.getPair(...path)
    if (p_addr === ethers.ZeroAddress) {
        // ElMessage.warning('当前交易对池子没有建立,请手动输入价格');
    } else {
        const amountOut = parseEther(reserve1Input.value);
        const amounts = await Router02.getAmountsIn(amountOut, path);
        const amountInMax = amounts[0];
        reserve0Input.value = formatEther(amountInMax);
    }
}
const copyTokenAddress = () => {
    if (!reserve1.value) {
        ElMessage.warning('Please select a token to swap.');
        reserve1Input.value = '';
        return
    } else {
        copiedText.value = reserve1.value
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
const addToken = async () => {
    getToken.value = optionsB.value.find(item => item.contractaddress === reserve1.value);
    console.log(getToken.value);
    const token = {
        address: reserve1.value,
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
//判断代币是否授权
const ifapprove = async () => {
    const tokenA = new ethers.Contract(reserve0.value, config.erc20, readProvider);
    const tokenB = new ethers.Contract(reserve1.value, config.erc20, readProvider);
    const result = await tokenA.allowance(userAddress.value, config.router02_addr)
    const res = await tokenB.allowance(userAddress.value, config.router02_addr)
    if (result === ethers.MaxUint256 && res === ethers.MaxUint256) {
        isapprove.value = true;
    } else {
        isapprove.value = false;
    }


}
const approve = async () => {
    if (!isapprove.value) {
        const loading = ElLoading.service({
            lock: true,
            text: '正在授权，请稍候...',
            background: 'rgba(0, 0, 0, 0.7)',
        });
        const signer = await writeProvider.getSigner();
        const TokenA = new ethers.Contract(reserve0.value, config.erc20, signer);
        const TokenB = new ethers.Contract(reserve1.value, config.erc20, signer);
        try {
            const txa = await TokenA.approve(config.router02_addr, ethers.MaxUint256);
            const txb = await TokenB.approve(config.router02_addr, ethers.MaxUint256);
            await txa.wait();
            await txb.wait();
            ElMessage.success('授权成功')
            ifapprove();
        } catch (error) {
            console.log(error);
        } finally {
            // 关闭 loading 动画
            loading.close();
        }
    }
}
const addLiquidity = async () => {
    const loading = ElLoading.service({
        lock: true,
        text: '正在添加流动性，请稍候...',
        background: 'rgba(0, 0, 0, 0.7)',
    });
    const overrides = {
        gasLimit: 9999999
    }
    const signer = await writeProvider.getSigner();
    const routerForTransactions = new ethers.Contract(config.router02_addr, config.router02, signer);
    try {
        if (reserve0.value === config.wmnt_addr || reserve1.value === config.wmnt_addr) {
            if (reserve0.value === config.wmnt_addr) {
                await routerForTransactions.addLiquidityETH(
                    reserve1.value,
                    parseEther(reserve1Input.value),
                    0,
                    0,
                    userAddress.value,
                    ethers.MaxUint256,
                    { value: parseEther(reserve0Input.value), ...overrides }
                )
                
            } else {
                await routerForTransactions.addLiquidityETH(
                    reserve0.value,
                    parseEther(reserve0Input.value),
                    0,
                    0,
                    userAddress.value,
                    ethers.MaxUint256,
                    { value: parseEther(reserve1Input.value), ...overrides }
                )
            }
            ElMessage.success("Liquidity added successfully.")
        } else {
            await routerForTransactions.addLiquidity(
                reserve0.value,
                reserve1.value,
                parseEther(reserve0Input.value),
                parseEther(reserve1Input.value),
                0,
                0,
                userAddress.value,
                ethers.MaxUint256,
                overrides
            )
            ElMessage.success("Liquidity added successfully.")
        }

    } catch (error) {
        console.log(error
        )
        ElMessage.error("Liquidity failure.")
    }finally {
      // 关闭 loading 动画
      loading.close();
    }
}

const getTokenList = async () => {
    try {
        const res = await getTokens();
        optionsA.value = res.data;
        optionsB.value = res.data;
        await updateTokenNames();
        await  ifapprove()
    } catch (error) {
        console.log(error);
    }
}
getTokenList();
</script>

<style scoped>
.container-xxl {
    position: relative;
    background-color: #ebf6ff;
}

.responsive-aside {
    width: 3vw;
    transition: width 0.5s ease;
}

.liquidity-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e8eaec;
}

.liquidity-box {
    background-color: #fff;
    padding: 25px;
    border-radius: 15px;
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

.back_title {
    display: flex;
    align-items: center;
}

.custom-button {
    height: 45px;
    display: flex;
    position: relative;
    justify-content: flex-start;
    padding-left: 20px;
    margin: 10px 0;
}

.right_icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.el-button {
    border-radius: 10px;
}

.icon-title {
    display: flex;
    align-items: center;
}

.find_span {
    color: #280d5f;
    font-size: 16px;
    margin: 0 5px;
}

/* .addPlus {
    display: flex;
    justify-content: center;
    margin: 10px 0;
} */
.addv2_button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.addbutton {
    display: flex;
    border: 1px solid #e8eaec;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 125px;
}

.button_span {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
}

.dialog_button {
    margin: 10px 0;
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
}

:deep(.el-dialog) {
    width: 450px;
    border-radius: 20px;
}

.dialog_button_div {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
}

.dialog_span {
    color: var(--colors-text);
    line-height: 1.5;
    font-size: 16px;
    margin-left: 7px;
}

.dialog_icon_button {
    height: 35px;
}

.find-button {
    height: 50px;
}

:deep(.el-input__wrapper) {
    background-color: rgb(238, 234, 244);
    border-radius: 15px;
}

.button_More {
    color: #1fc7d4;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
}

.add_leftP {
    color: #7645d9;
    font-weight: 600;
    font-size: 12px;
    margin-top: 10px;
}

.main_header {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.input-with-result {
    position: relative;
    width: 100%;
}

.add_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px
}

.add_right_p {
    color: #280d5f;
    font-weight: 600;
    font-size: 20px;

}

.price_box {
    width: 42%;
    border-radius: 15px;
    border: 1px solid #e8eaec;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
    justify-content: space-evenly;
}

.minprice {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.price_boxs {
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 150px;
    align-items: center;
}

.amount_button {
    height: 50px;
}

@media (min-width: 768px) {
    .responsive-aside {
        width: 3vw;
        opacity: 0.5;
        /* background-color: #fff;  */
    }

}

@media (max-width: 768px) {
    .el-main {
        --el-main-padding: 5px;
    }

    .liquidity-box {
        padding: 13px;
    }

    :deep(.el-dialog) {
        width: 100%;
    }
}
</style>