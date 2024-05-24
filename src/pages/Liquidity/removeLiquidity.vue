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
                                <h1 style="color:black">{{ $t('header.removeLiquidity') }}</h1>
                                <div>
                                    <el-button text><svg-icon name="countdown"></svg-icon></el-button>
                                    <el-button text><svg-icon name="settings"></svg-icon></el-button>
                                </div>
                            </div>
                            <el-table :data="tableData" size="default" style="width: 100%"
                                :row-style="{ height: '70px' }">
                                <el-table-column prop="hash" :label="$t('remove.transaction_pair')" width="180" align="center">
                                    <template v-slot="scope">
                                        <span style="font-size: 14.4992px; color: #0784C3;">{{ scope.row.token0Symbol
                                            }}<el-icon>
                                                <Switch />
                                            </el-icon>{{ scope.row.token1Symbol }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="userMobility" :label="$t('remove.user_liquidity')" width="180" align="center">
                                    <template v-slot="scope">
                                        <el-tooltip :content="scope.row.userMobility">
                                            <span style="font-size: 14.4992px; color: #0784C3;">{{
                                                scope.row.userMobility
                                            }}</span>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="pairNumber" :label="$t('remove.number')" width="180" align="center">
                                    <template v-slot="scope">
                                        <el-input v-model="scope.row.pairNumber"
                                            style="font-size: 14.4992px; color: #0784C3;" size="small"
                                            @input="pairNumberChange(scope.row)"></el-input>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="address" :label="$t('remove.remove')" width="150" align="center">
                                    <template #default="scope">
                                        <el-button size="small" type="danger" @click="removeLiquidity(scope.row)">
                                            Delete
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>
</template>

<script setup>
import { config } from "@/const/config";
import { ref } from 'vue'
import { ethers, parseEther, formatEther } from "ethers";
import { getSwapPairs } from '@/api/Liquiditys'
import { ElMessage, ElLoading } from 'element-plus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const readProvider = new ethers.JsonRpcProvider(config.rpc);
const writeProvider = new ethers.BrowserProvider(window.ethereum);
const tableData = ref([]);
const page = ref(1);
const size = ref(100);
const userAddress = ref("")
const isapprove = ref("")
// 获取交易对
const getSwapPair = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    userAddress.value = account;
    tableData.value = [];
    const res = await getSwapPairs(page.value, size.value);
    const responseData = res.data.list;
    responseData.forEach(item => {
        const newDataItem = { ...item };
        newDataItem.pairNumber = "";
        tableData.value.push(newDataItem);
    })
    getPairAll();
}
getSwapPair();
// 根据交易对获取池子地址以及对应的流动性
const getPairAll = async () => {
    try {
        const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
        const signer = await writeProvider.getSigner();
        for (let i = 0; i < tableData.value.length; i++) {
            const item = tableData.value[i];
            // 根据交易对获取池子地址
            const pair = await factory.getPair(item.token0Address, item.token1Address);
            // 根据池子地址获取流动性
            const pairContract = new ethers.Contract(pair, config.UniswapV2Pair, signer);
            const userMobility = await pairContract.balanceOf(signer.address);
            if (userMobility > 0) {
                item.userMobility = formatEther(userMobility);
            } else {
                item.userMobility = "";
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const pairNumberChange = (data) => {
    const pairNumberStr = String(data.pairNumber).trim();
    // 使用正则表达式检查pairNumberStr是否只包含数字
    if (!/^\d+$/.test(pairNumberStr)) {
        data.pairNumber = "";
        ElMessage.error(t('remove.input'));
        return;
    }
    const pairNumber = Number(pairNumberStr);
    if (pairNumber > Number(data.userMobility)) {
        data.pairNumber = "";
        ElMessage.error(t('remove.remove_input'));
    }
}
//判断代币是否授权
const ifapprove = async (row) => {
    const tokenA = new ethers.Contract(row.token0Address, config.erc20, readProvider);
    const tokenB = new ethers.Contract(row.token1Address, config.erc20, readProvider);
    const result = await tokenA.allowance(userAddress.value, config.router02_addr)
    const res = await tokenB.allowance(userAddress.value, config.router02_addr)
    if (result === ethers.MaxUint256 && res === ethers.MaxUint256) {
        isapprove.value = true;
    } else {
        isapprove.value = false;
    }


}
// 进行授权
const approve = async (row) => {
    const loading = ElLoading.service({
        lock: true,
        text: t('Swap.authorizing'),
        background: 'rgba(0, 0, 0, 0.7)',
    });
    const signer = await writeProvider.getSigner();
    const factory = new ethers.Contract(config.factoryAddr, config.UniswapV2Factory, readProvider);
    const p_addr = await factory.getPair(row.token0Address, row.token1Address);
    const Token = new ethers.Contract(p_addr, config.erc20, signer);
    try {
        const tx = await Token.approve(config.router02_addr, ethers.MaxUint256);
        await tx.wait();
        ElMessage.success(t('Swap.accredit_success'))
        ifapprove(row);
    } catch (error) {
        console.log(error);
        ElMessage.error(t('Swap.accredit_error'))
    } finally {
        // 关闭 loading 动画
        loading.close();
    }
}

// 移除流动性
const removeLiquidity = async (row) => {
   await ifapprove(row)
    if (isapprove.value) {
        const loading = ElLoading.service({
            lock: true,
            text: t('Swap.remove_liquidity'),
            background: 'rgba(0, 0, 0, 0.7)',
        });
        const overrides = {
            gasLimit: 9999999
        }
        const signer = await writeProvider.getSigner();
        const deleteRouter02 = new ethers.Contract(config.router02_addr, config.router02, signer);
        try {
            if (row.token0Address.toLocaleLowerCase() === config.mnt_addr.toLocaleLowerCase() || row.token1Address.toLocaleLowerCase() === config.mnt_addr.toLocaleLowerCase()) {
                await deleteRouter02.removeLiquidityETH(row.token0Address, parseEther(row.pairNumber), 0, 0, userAddress.value, ethers.MaxUint256, overrides)
            } else {
                await deleteRouter02.removeLiquidity(row.token0Address, row.token1Address, parseEther(row.pairNumber), 0, 0, userAddress.value, ethers.MaxUint256, overrides)
            }
            ElMessage.success(t('Swap.remove_success'));
            getSwapPair();
        } catch (error) {
            console.log(error);
            ElMessage.error(t('Swap.remove_error'));
        } finally {
            // 关闭 loading 动画
            loading.close();
        }
    } else {
        approve(row)
    }

}
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

.liquidity-box {
    background-color: #fff;
    padding: 25px;
    border-radius: 15px;
}

.liquidity-title {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
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
}
</style>