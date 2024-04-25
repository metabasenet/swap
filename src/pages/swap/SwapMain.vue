<template>
  <div class="common-layout">
    <el-container class="container-xxl">
      <div class="container_bgc"></div>
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <el-row :gutter="10">
          <el-col :span="showSecondaryNavigation ? 16 : 0" v-if="showSecondaryNavigation">
            <div class="main_left">
              <router-view></router-view>
            </div>
          </el-col>
          <el-col :span="showSecondaryNavigation ? 8: 8">
            <div class="main_right">
              <el-tabs v-model="activeName" type="border-card" class="demo-tabs" @tab-change="handleClick">
                <el-tab-pane name="MARKET">
                  <template #label>
                    <span class="custom-tabs-label">
                      <el-icon>
                        <calendar />
                      </el-icon>
                      <span>MARKET</span>
                    </span>
                  </template>
                  <div>
                    <el-row :gutter="10">
                      <el-col :span="24" class="swap_header">
                        <h1 style="color:black">Swap</h1>
                        <p>Trade tokens in an instant</p>
                        <div class="swap_header_button">
                          <el-button text><svg-icon name="money"></svg-icon></el-button>
                          <el-button text><svg-icon name="brokeline"></svg-icon></el-button>
                          <el-button text><svg-icon name="fueloil"></svg-icon></el-button>
                          <el-button text><svg-icon name="settings"></svg-icon></el-button>
                          <el-button text><svg-icon name="countdown"></svg-icon></el-button>
                          <el-button text><svg-icon name="reset"></svg-icon></el-button>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div>
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                        </div>
                        <el-input v-model="textarea" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="4" type="textarea" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div>
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">CAKE<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain size="large"><el-icon>
                              <CopyDocument />
                            </el-icon></el-button>
                        </div>
                        <el-input v-model="textarea" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="4" type="textarea" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24">
                        <div class="swap_footer_button">
                          <el-button text plain><span style="color:#a88efc;font-weight:bold">Slippage
                              Tolerance</span><el-icon>
                              <EditPen />
                            </el-icon></el-button>
                          <span style="color:#1fc7d4;font-weight:bold">1%</span>
                        </div>
                        <el-button color="#1fc7d4" class="custom-button" round style="width:100%;">
                          <h2 style="color: #fff;">Connect Wallet</h2>
                        </el-button>
                      </el-col>

                    </el-row>
                    <el-dialog v-model="dialogVisible" title="Tips" width="500">
                      <span>This is a message</span>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogVisible = false">Cancel</el-button>
                          <el-button type="primary" @click="dialogVisible = false">
                            Confirm
                          </el-button>
                        </div>
                      </template>
                    </el-dialog>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TWAP" name="TWAP">
                  <div>
                    <el-row :gutter="10">
                      <el-col :span="24" class="twap_header">
                        <div class="swap_footer_button">
                          <h1 style="color:black">TWAP</h1>
                          <el-button text><svg-icon name="brokeline"></svg-icon></el-button>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                        </div>
                          <!-- <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain>
                              <span class="el-dropdown_span" style="color:black">Select token<el-icon>
                                  <CaretBottom />
                                </el-icon></span>
                            </el-button>
                          </el-tooltip> -->
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <el-input v-model="textarea" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="4" type="textarea" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                        </div>
                          <!-- <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain>
                              <span class="el-dropdown_span" style="color:black">Select token<el-icon>
                                  <CaretBottom />
                                </el-icon></span>
                            </el-button>
                          </el-tooltip> -->
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:</span></el-button>
                        </div>
                        <el-input v-model="textarea" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="4" type="textarea" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:black">Limit price</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                            <el-button type="primary" round icon="RefreshRight">
                              Reset
                            </el-button>
                          </div>
                          <el-tooltip effect="dark" content="Loding" placement="top">
                            <svg-icon name="switch" width="3rem" height="3rem"></svg-icon>
                          </el-tooltip>
                        </div>
                        <el-input v-model="textarea" size="large" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="2"  placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24">
                        <div class="twap_trade">
                          <span>Trade interval</span>
                          <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain icon="QuestionFilled">
                            </el-button>
                          </el-tooltip>
                          <div class="mt-4">
                            <el-input size="large" v-model="input3" style="width: 255px" placeholder="0"
                              class="input-with-select">
                              <template #append>
                                <el-select v-model="select" placeholder="MINUTES" size="large" style="width: 115px">
                                  <el-option label="Minutes" value="1" />
                                  <el-option label="Hours" value="2" />
                                  <el-option label="Days" value="3" />
                                </el-select>
                              </template>
                            </el-input>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="twap_trade">
                          <span>Max duration</span>
                          <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain icon="QuestionFilled">
                            </el-button>
                          </el-tooltip>
                          <div class="mt-4">
                            <el-input size="large" v-model="input2" style="width: 259px" placeholder="0"
                              class="input-with-select">
                              <template #append>
                                <el-select v-model="select2" placeholder="MINUTES" size="large" style="width: 115px">
                                  <el-option label="Minutes" value="1" />
                                  <el-option label="Hours" value="2" />
                                  <el-option label="Days" value="3" />
                                </el-select>
                              </template>
                            </el-input>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="swap_footer_button">
                          
                        </div>
                        <el-button color="#1fc7d4" class="custom-button" round style="width:100%;">
                          <h2 style="color: #fff;">Connect Wallet</h2>
                        </el-button>
                        <!-- <el-button color="#e9eaed" class="custom-button" round style="width:100%;">
                          <h2 style="color: #bdc2c4;">Enter an amount</h2>
                        </el-button> -->
                      </el-col>
                    </el-row>
                    <el-dialog v-model="dialogVisible" title="Tips" width="500">
                      <span>This is a message</span>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogVisible = false">Cancel</el-button>
                          <el-button type="primary" @click="dialogVisible = false">
                            Confirm
                          </el-button>
                        </div>
                      </template>
                    </el-dialog>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="LIMIT" name="LIMIT">
                  <div>
                    <el-row :gutter="10">
                      <el-col :span="24" class="twap_header">
                        <div class="swap_footer_button">
                          <h1 style="color:black">LIMIT</h1>
                          <el-button text><svg-icon name="brokeline"></svg-icon></el-button>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                        </div>
                          <!-- <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain>
                              <span class="el-dropdown_span" style="color:black">Select token<el-icon>
                                  <CaretBottom />
                                </el-icon></span>
                            </el-button>
                          </el-tooltip> -->
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <el-input v-model="textarea" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="4" type="textarea" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                        </div>
                          <!-- <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain>
                              <span class="el-dropdown_span" style="color:black">Select token<el-icon>
                                  <CaretBottom />
                                </el-icon></span>
                            </el-button>
                          </el-tooltip> -->
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:</span></el-button>
                        </div>
                        <el-input v-model="textarea" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="4" type="textarea" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:black">Limit price</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                            <el-button type="primary" round icon="RefreshRight">
                              Reset
                            </el-button>
                          </div>
                          <el-tooltip effect="dark" content="Loding" placement="top">
                            <svg-icon name="switch" width="3rem" height="3rem"></svg-icon>
                          </el-tooltip>
                        </div>
                        <el-input v-model="textarea" size="large" input-style="background-color:#eeeaf4;" style="width: 100%;"
                          :rows="2"  placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24">
                        <div class="twap_trade">
                          <span>Trade interval</span>
                          <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain icon="QuestionFilled">
                            </el-button>
                          </el-tooltip>
                          <div class="mt-4">
                            <el-input size="large" v-model="input3" style="width: 255px" placeholder="0"
                              class="input-with-select">
                              <template #append>
                                <el-select v-model="select" placeholder="MINUTES" size="large" style="width: 115px">
                                  <el-option label="Minutes" value="1" />
                                  <el-option label="Hours" value="2" />
                                  <el-option label="Days" value="3" />
                                </el-select>
                              </template>
                            </el-input>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="twap_trade">
                          <span>Max duration</span>
                          <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                            <el-button text plain icon="QuestionFilled">
                            </el-button>
                          </el-tooltip>
                          <div class="mt-4">
                            <el-input size="large" v-model="input2" style="width: 259px" placeholder="0"
                              class="input-with-select">
                              <template #append>
                                <el-select v-model="select2" placeholder="MINUTES" size="large" style="width: 115px">
                                  <el-option label="Minutes" value="1" />
                                  <el-option label="Hours" value="2" />
                                  <el-option label="Days" value="3" />
                                </el-select>
                              </template>
                            </el-input>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="swap_footer_button">
                          
                        </div>
                        <el-button color="#1fc7d4" class="custom-button" round style="width:100%;">
                          <h2 style="color: #fff;">Connect Wallet</h2>
                        </el-button>
                        <!-- <el-button color="#e9eaed" class="custom-button" round style="width:100%;">
                          <h2 style="color: #bdc2c4;">Enter an amount</h2>
                        </el-button> -->
                      </el-col>
                    </el-row>
                    <el-dialog v-model="dialogVisible" title="Tips" width="500">
                      <span>This is a message</span>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogVisible = false">Cancel</el-button>
                          <el-button type="primary" @click="dialogVisible = false">
                            Confirm
                          </el-button>
                        </div>
                      </template>
                    </el-dialog>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-aside class="responsive-aside"></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, ref} from 'vue'
import router from '@/router'
import { ElMessage } from 'element-plus'
const showSecondaryNavigation = ref(false);
const activeName = ref('MARKET');
const dialogVisible = ref(false);
const textarea = ref('');
const select = ref('')
const input3 = ref('')
const select2 = ref('')
const input2 = ref('')
const handleClick = (tab) => {
  showSecondaryNavigation.value = tab === 'MARKET' ? false : true;
  if (tab==='TWAP') {
    router.push('/swap/twap')
  }else if(tab==='LIMIT'){
    router.push('/swap/limit');
  }else if(tab==='MARKET'){
    router.push('/swap')
  }
}
onMounted(() => {
 
})
</script>

<style scoped>
.el-row {
  padding: 10px 10px;
}
.container-xxl {
  position: relative;
  background-color: #ebf6ff;
}
.responsive-aside {
  width: 0rem;
  transition: width 0.5s ease; 
}
@media (min-width: 768px) {
  .responsive-aside {
    width: 10rem;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}
:deep(.el-button+.el-button){
  margin-left: 0px;
}
.main_left{
  height: 300px;
  background-color: pink;
}
.swap_header{
  height: 7.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: #e7e3eb 1px solid;
  padding: 15px 10px;
}
.twap_header{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: #e7e3eb 1px solid;
  padding: 15px 10px;
}
.bnb_header{
  height: 11.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 10px;
}
.swap_header_button{
  display: flex;
  justify-content: flex-end;
}
.swap_footer_button{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
}
.custom-button{
  height: 50px;
}

.demo-tabs{
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #dcdee2;
}
:deep(.el-tabs__header .el-tabs__item.is-active){
  color: #FFF;
  background-color: #7a6eaa;
  border-radius: 15px;
} 
:deep(.el-tabs--border-card>.el-tabs__header ){
  border-radius: 15px;
}
.el-dropdown_span{
  font-size: 15px;
  color: rgb(40, 13, 95)
}
.twap_trade{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
:deep(.el-input__wrapper){
  /* border-radius: 15px; */
  background-color: rgb(238, 234, 244);
}
:deep(.el-input-group__append){
  background-color: rgb(238, 234, 244);
}
</style>