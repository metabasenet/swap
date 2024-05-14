<template>
    <div class="common-layout">
        <el-container class="container-xxl">
            <div class="container_bgc"></div>
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="10" style="margin:auto" :xs="24" :sm="24" :md="8" :lg="8">
                        <div class="liquidity-box">
                            <div class="liquidity-title">
                                <div class="back_title">
                                    <el-button text>
                                        <router-link to="/liquidity"> <svg-icon name="back">
                                            </svg-icon></router-link>
                                    </el-button>
                                    <div style="margin-left:10px">
                                        <h1 style="color:black">Import Pool</h1>
                                        <p>Import an existing pool</p>
                                    </div>
                                </div>
                                <el-button text><svg-icon name="settings"></svg-icon></el-button>
                            </div>
                            <div>
                                <!-- <el-button color="#eeeaf4" class="custom-button" round style="width:100%;"
                                    @click="openDialog(true)">
                                    <div class="icon-title">
                                        <svg-icon name="bnb"></svg-icon><span class="find_span">{{ tokenA }}</span>
                                    </div>
                                    <el-icon class="right_icon">
                                        <ArrowDown />
                                    </el-icon>
                                </el-button> -->
                                <el-select v-model="reserve0" @change="monitorValueA" size="default"
                                    style="width: 100%;margin-top:10px">
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
                                <!-- <el-button color="#eeeaf4" class="custom-button" round style="width:100%;"
                                    @click="openDialog(false)">
                                    <div class="icon-title">
                                        <span class="find_span">{{ tokenB }}</span>
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
                            <div class="addbutton">
                                <p style="color:#280d5f;font-size:16px">You don’t have liquidity in this pair yet.</p>
                                <el-button size="large" round color="#1fc7d4">
                                    <router-link style="text-decoration: none;" :to="{
                              name: 'v2add',
                              params: { tokenA: reserve0,tokenB: reserve1 },
                            }"><span
                                            class="button_span">Add
                                            Liquidity</span></router-link>
                                </el-button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-dialog v-model="dialogVisible" title="Select a Token">
                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-input size="large" v-model="searchDialog"
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
                            <el-table :data="tableData" highlight-current-row @cell-click="handleCurrentChange"
                                style="width: 100%;margin-top:20px">
                                <el-table-column prop="ercsymbol" align="left">
                                    <template v-slot="scope">
                                        <div style="display:flex;align-items: center;">
                                            <div style="margin-left:8px">
                                                <div>
                                                    <span class="top_span">{{ scope.row.ercsymbol }}</span>
                                                </div>
                                                <div>
                                                    <span class="b-flex_span">{{ scope.row.ercname }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <!-- <el-table-column label="" prop="decimals" align="right" /> -->
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
import { ref } from 'vue'
import { getTokens } from '@/api/Liquiditys'
import { ElMessage } from 'element-plus';
const dialogVisible = ref(false);
const searchDialog = ref('');

const tokenA = ref('BNB')
const tokenB = ref('Select a Token')
const tableData = ref([])
const optionsA = ref([])
const optionsB = ref([])
const reserve0 = ref("0x70de61B87C6BEC577C30B8A37810C652Ead68ea5");//USDT
const reserve1 = ref("0xAf5eFec32837E3A609e7272C0A2fE19652Cf3e56");//MNB
const isTokenA = ref(false)
const monitorValueA = (newValue) => {
    if (newValue === reserve1.value) {
        reserve0.value = '';
        ElMessage.warning('This token is already selected for the other field.')
        return;
    }

}
const monitorValueB = (newValue) => {
    if (newValue === reserve0.value) {
        reserve1.value = '';
        ElMessage.warning('This token is already selected for the other field.')
        return;
    }
}
const openDialog = (isTokenAVal) => {
    console.log(isTokenAVal);
    dialogVisible.value = true;
    isTokenA.value = isTokenAVal;
    getTokenList();
}
// const getSwapPair = async()=>{
//     const res = await getSwapPairs(page.value,pageSize.value);
//     tableData.value = res.data.list;
//     console.log(tableData.value);
// }
const getTokenList = async () => {
    try {
        const res = await getTokens();
        optionsA.value = res.data;
        optionsB.value = res.data;
    } catch (error) {
        console.log(error);
    }
}
getTokenList();
const handleCurrentChange = (value) => {
    let tokenToCheck = isTokenA.value ? tokenB : tokenA;
    let tokenToUpdate = isTokenA.value ? tokenA : tokenB;
    if (tokenToCheck.value !== 'Select a Token' && value.ercsymbol === tokenToCheck.value) {
        // alert("This token is already selected for the other field.");
        ElMessage.warning('This token is already selected for the other field.')
        return;
    }
    tokenToUpdate.value = value.ercsymbol;
    console.log(tokenToUpdate.value);
    dialogVisible.value = false;
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

.addPlus {
    display: flex;
    justify-content: center;
    margin: 10px 0;
}

.addbutton {
    display: flex;
    border: 1px solid #e8eaec;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
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

.top_span {
    color: black;
    font-weight: 600;
    line-height: 1.5;
    font-size: 14px;
}

.b-flex_span {
    color: #7a6eaa;
    font-weight: 400;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    font-family: "Roboto", system-ui, -apple-system, "Segoe UI", "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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

:deep(.el-select__wrapper) {
    background-color: #eeeaf4;
    border-radius: 15px;
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