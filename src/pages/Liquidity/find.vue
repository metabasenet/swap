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
                                <el-button color="#eeeaf4" class="custom-button" round style="width:100%;"
                                    @click="dialogVisible = true">
                                    <div class="icon-title">
                                        <svg-icon name="bnb"></svg-icon><span class="find_span">BNB</span>
                                    </div>
                                    <el-icon class="right_icon">
                                        <ArrowDown />
                                    </el-icon>
                                </el-button>
                                <div class="addPlus">
                                    <el-icon size="large">
                                        <Plus />
                                    </el-icon>
                                </div>
                                <el-button color="#eeeaf4" class="custom-button" round style="width:100%;"
                                    @click="dialogVisible = true">
                                    <div class="icon-title">
                                        <span class="find_span">Select a Token</span>
                                    </div>
                                    <el-icon class="right_icon">
                                        <ArrowDown />
                                    </el-icon>
                                </el-button>
                            </div>
                            <div class="addbutton">
                                <p style="color:#280d5f;font-size:16px">You don’t have liquidity in this pair yet.</p>
                                <el-button size="large" round color="#1fc7d4">
                                    <router-link style="text-decoration: none;" to="/v2add"><span class="button_span">Add Liquidity</span></router-link>
                                </el-button>
                            </div>
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
import { ref } from 'vue'
const dialogVisible = ref(false);
const seachDialog = ref('');
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