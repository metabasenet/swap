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
                                        <router-link to="/liquidity"> <svg-icon name="back">
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
                                            <el-button color="#eeeaf4" class="custom-button" round style="width:45%;"
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
                                            <el-button color="#eeeaf4" class="custom-button" round style="width:45%;"
                                                @click="dialogVisible = true">
                                                <div class="icon-title">
                                                    <svg-icon name="bnb"></svg-icon><span class="find_span">BNB</span>
                                                </div>
                                                <el-icon class="right_icon">
                                                    <ArrowDown />
                                                </el-icon>
                                            </el-button>
                                        </div>
                                        <el-button color="#faf9fa" class="custom-button" round style="width:100%;"
                                            @click="dialogVisible = true">
                                            <div class="icon-title">
                                                <span class="find_span">V2LP - 0.25 fee tier</span>
                                            </div>
                                            <el-button class="right_icon" text>
                                                <span class="button_More">More<el-icon>
                                                        <ArrowDown />
                                                    </el-icon></span>
                                            </el-button>
                                        </el-button>
                                        <p class="add_leftP">DEPOSIT AMOUNT</p>
                                        <div class="main_header">
                                            <el-button text plain @click="dialogVisible = true">
                                                <svg-icon name="bnb" width="1.5rem" height="1.5rem"
                                                    style="margin-right:5px"></svg-icon>
                                                <h2 style="color:black">BNB<el-icon>
                                                        <CaretBottom />
                                                    </el-icon></h2>
                                            </el-button>
                                            <el-button text plain><span
                                                    style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                                        </div>
                                        <div class="input-with-result">
                                            <el-input v-model="inputValue" type="textarea" resize="none"
                                                input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px"
                                                :rows="3" placeholder="0.0" class="input-area"></el-input>
                                            <div class="result-area" v-if="inputValue">
                                                <span>~{{ inputValue }} USD</span>
                                            </div>
                                        </div>
                                        <div class="main_header">
                                            <div>
                                                <el-button text plain @click="dialogVisible = true">
                                                    <svg-icon name="bnb" width="1.5rem" height="1.5rem"
                                                        style="margin-right:5px"></svg-icon>
                                                    <h2 style="color:black">USDT<el-icon>
                                                            <CaretBottom />
                                                        </el-icon></h2>
                                                </el-button>
                                                <el-button text size="large"><el-icon>
                                                        <CopyDocument />
                                                    </el-icon></el-button>
                                                <el-button text size="large"><svg-icon
                                                        name="fox"></svg-icon></el-button>
                                            </div>
                                            <el-button text plain><span
                                                    style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                                        </div>
                                        <div class="input-with-result">
                                            <el-input v-model="inputValue" type="textarea" resize="none"
                                                input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px"
                                                :rows="3" placeholder="0.0" class="input-area"></el-input>
                                            <div class="result-area" v-if="inputValue">
                                                <span>~{{ inputValue }} USD</span>
                                            </div>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="12">
                                    <div class="add_right">
                                        <svg-icon name="dolphin" width="8rem" height="8rem">
                                        </svg-icon>
                                        <p class="add_right_p">Your position will appear here.</p>
                                        <div class="price_boxs">
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
                                        </div>
                                        <el-button v-if="!isConnect" color="#1fc7d4" class="amount_button" round style="width:90%;"
                                            @click="connectWallet">
                                            <h2 style="color: #fff;">Connect Wallet</h2>
                                        </el-button>
                                        <el-button v-else color="#e9eaeb" class="amount_button" round style="width:90%;">
                                            <h2 style="color: #bdc2c4;">Enter an amount</h2>
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
import { ref } from 'vue'
import MetamaskService from '@/components/MetamaskService';
const dialogVisible = ref(false);
const seachDialog = ref('');
const inputValue = ref('');
const isConnect = ref("");
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

const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
    const { provider, signer, account } = await MetamaskService.connectWallet();
      isConnect.value = account;
  } catch (error) {

  }
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
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
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