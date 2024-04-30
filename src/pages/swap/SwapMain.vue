<template>
  <div class="common-layout">
    <el-container class="container-xxl">
      <div class="container_bgc"></div>
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <el-row :gutter="10">
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
                        <h1 style="color:black">Swap</h1>
                        <p>Trade tokens in an instant</p>
                        <div class="swap_header_button">
                          <el-tooltip effect="dark" content="Buy crypto with fiat." placement="bottom">
                            <el-button text><svg-icon name="money"></svg-icon></el-button>
                          </el-tooltip>
                          <el-button text><svg-icon name="brokeline"></svg-icon></el-button>
                          <el-tooltip effect="dark" content="Check out the top traded tokens" placement="bottom">
                            <el-button text><svg-icon name="fueloil"></svg-icon></el-button>
                          </el-tooltip>
                          <el-button text><svg-icon name="settings"></svg-icon></el-button>
                          <el-button text><svg-icon name="countdown"></svg-icon></el-button>
                          <el-button text><svg-icon name="reset"></svg-icon></el-button>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="!isSorted">
                        <div class="main_header">
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="isSorted">
                        <div class="main_header">
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
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="sort_box">
                          <el-button type="success" icon="Sort" circle size="large" @click="sortAssets" />
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="!isSorted">
                        <div class="main_header">
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
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="isSorted">
                        <div class="main_header">
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div v-if="inputValue" class="swap_footer_button swap_footer_refresh">
                          <span style="color:#a88efc;font-weight:bold">Price</span>
                          <div>
                            <span v-if="showConversion" style="color:black;">1 CAKE <svg-icon name="conversion"
                                width="0.8rem" height="0.8rem"></svg-icon> 0.00461927 BNB</span>
                            <span v-else style="color:black;">1 BNB <svg-icon name="conversion" width="0.8rem"
                                height="0.8rem"></svg-icon>
                              216.27 CAKE</span>
                            <el-button text plain icon="Refresh" @click="clickRefresh"></el-button>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="swap_footer_button">
                          <el-button text plain><span style="color:#a88efc;font-weight:bold">Slippage
                              Tolerance</span><el-icon>
                              <EditPen />
                            </el-icon></el-button>
                          <span style="color:#1fc7d4;font-weight:bold">1%</span>
                        </div>
                        <div v-if="!isConnect">
                          <el-button color="#1fc7d4" class="custom-button" round style="width:100%;"
                            @click="connectWallet">
                            <h2 style="color: #fff;">Connect Wallet</h2>
                          </el-button>
                          <div class="Crypto">
                            <span>Insufficient Funds? </span>
                            <router-link to="swap" style="color:#1fc7d4">Buy Crypto here.</router-link>
                          </div>
                        </div>
                        <div v-else>
                          <el-button color="#e9eaeb" class="custom-button" round style="width:100%;">
                            <h2 style="color: #bdc2c4;">Enter an amount</h2>
                          </el-button>
                        </div>
                        <!-- <div>
                          <el-button color="#e9eaeb" class="custom-button" round style="width:100%;"
                            @click="connectWallet">
                            <h2 style="color: #bdc2c4;">Insufficient BNB balance</h2>
                          </el-button>
                          <div class="Crypto">
                            <span>Insufficient Funds? </span>
                            <router-link to="swap" style="color:#1fc7d4">Buy Crypto here.</router-link>
                          </div>
                        </div> -->
                      </el-col>
                      <el-col :span="24" v-if="inputValue">
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:#7a6eaa">Minimum received</span>
                            <el-tooltip effect="dark" content="" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    Your transaction will revert if there is a
                                    large,unfavorable price movement
                                    before it is confirmed.
                                  </p>

                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <span style="color:black">213.3 CAKE</span>
                        </div>
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:#7a6eaa">Price Impact</span>
                            <el-tooltip effect="dark" content="" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    AMM:The difference between the
                                    market price and estimated price due to
                                    trade size.
                                    MM:No slippage against quote from
                                    market maker
                                  </p>

                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <span style="color:#31d0aa">0.01%</span>
                        </div>
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:#7a6eaa">Trading Fee</span>
                            <el-tooltip effect="dark" content="" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    AMM:Fee ranging from 0.1%to 0.01%
                                    depending on the pool fee tier.You can check the fee tier by clicking the magnifier
                                    icon under
                                    the Route section.
                                  </p>
                                  <p class="content_box_p">Fee Breakdown and Tokenomics </p>
                                  <p>MM:PancakeSwap does not charge any fees for
                                    trades.However,the market makers charge an implied fee of 0.05%-
                                    0.25%(non-stablecoin)/0.01% (stablecoin)factored into the quotes provided by them.
                                  </p>
                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <span style="color:black">0.0005 BNB</span>
                        </div>
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:#7a6eaa">Route</span>
                            <el-tooltip effect="dark" content="" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    Your transaction will revert if there is a
                                    large,unfavorable price movement
                                    before it is confirmed.
                                  </p>

                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <el-button text plain><span style="color:black;font-weight:bold">2 Separate Routes <el-icon>
                                <Search />
                              </el-icon></span></el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <el-dialog v-model="dialogVisible" title="Select a Token">
                      <el-row :gutter="10">
                        <el-col :span="24">
                          <el-input size="large" v-model="seachDialog"
                            placeholder="Search name or paste address"></el-input>
                          <div class="dialog_button">
                            <p>Common tokens</p>
                            <div class="dialog_button_div">
                              <el-button round><svg-icon name="bnb"></svg-icon><span
                                  class="dialog_span">BNB</span></el-button>
                              <el-button round><svg-icon name="bnb"></svg-icon><span
                                  class="dialog_span">USDT</span></el-button>
                              <el-button round><svg-icon name="bnb"></svg-icon><span
                                  class="dialog_span">CAKE</span></el-button>
                              <el-button round><svg-icon name="bnb"></svg-icon><span
                                  class="dialog_span">BTCB</span></el-button>

                            </div>
                          </div>
                          <el-table :data="tableData" style="width: 100%">
                            <el-table-column label="" prop="date" align="left" />
                            <el-table-column label="" prop="name" align="right" />
                          </el-table>
                          <div class="dialog_button">
                            <el-button color="#1fc7d4" class="custom-button" round style="width:100%;">
                              <h2 style="color: #fff;">Manage Tokens</h2>
                            </el-button>
                          </div>
                        </el-col>
                      </el-row>
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
                      <el-col :span="24" class="bnb_header" v-show="!isSorted">
                        <div class="main_header">
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="isSorted">
                        <div class="main_header">
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
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="sort_box">
                          <el-button type="success" icon="Sort" circle size="large" @click="sortAssets" />
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="!isSorted">
                        <div class="main_header">
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
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="isSorted">
                        <div class="main_header">
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:black">Limit price</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    This sets the lowest price for trades in
                                    your order.Trades will ONLY be
                                    executed when this limit price is lower
                                    than or equal to the available market
                                    price.Some trades may not be executed
                                    if the limit price is higher than the
                                    available market price and your order
                                    may only be partially filled.
                                  </p>

                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                            <el-tooltip v-if="value2" effect="dark" content="Reset to default price" placement="top">
                              <el-button type="primary" round icon="RefreshRight">
                                Reset
                              </el-button>
                            </el-tooltip>
                          </div>
                          <!-- <el-tooltip effect="dark" content="Loding" placement="top">
                            <svg-icon name="switch" width="3rem" height="3rem"></svg-icon>
                          </el-tooltip> -->
                          <div>
                            <el-switch size="large" v-model="value2" class="ml-2"
                              style="--el-switch-on-color: #13ce66;" />
                            <el-button text plain icon="Refresh" @click="clickRefresh"></el-button>
                          </div>
                        </div>
                        <el-input v-if="value2" v-model="textarea" resize="none" size="large"
                          input-style="background-color:#eeeaf4;" style="width: 100%;" :rows="2" placeholder="0.0">
                        </el-input>

                        <div v-if="inputValue" class="swap_footer_button swap_footer_refresh">
                          <span style="color:#a88efc;font-weight:bold">Price</span>
                          <div>
                            <span v-if="showConversion" style="color:black;">1 CAKE <svg-icon name="conversion"
                                width="0.8rem" height="0.8rem"></svg-icon> 0.00461927 BNB</span>
                            <span v-else style="color:black;">1 BNB <svg-icon name="conversion" width="0.8rem"
                                height="0.8rem"></svg-icon>
                              216.27 CAKE</span>

                          </div>
                        </div>
                        <div v-if="inputValue" class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:black">Total trades</span>
                            <el-tooltip effect="dark" content="" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    The total number of individual trades
                                    that will be scheduled as part of your
                                    order.Note that in limit orders,it is
                                    possible that not all scheduled trades
                                    will be executed.
                                  </p>

                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                        </div>
                        <div v-if="inputValue" class="slider_box">
                          <el-slider v-model="sliderValue" :max="11" style="width:60%" />
                          <el-tooltip effect="dark" content="" placement="top">
                            <template #content>
                              <div class="content_box">
                                <p>
                                  Individual trades must have a minimum
                                  trade size of $50 USD.
                                </p>
                              </div>
                            </template>
                            <span style="font-weight:bold;color:black">{{ sliderValue }}</span>
                          </el-tooltip>
                        </div>
                        <div v-if="inputValue" class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:black">Total trades</span>
                            <el-tooltip effect="dark" content="T" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    his sets the size of each individual
                                    trade that will be executed over the
                                    duration of your order.
                                  </p>
                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <el-tooltip effect="dark" content="0.166666666666666666BNB" placement="top">
                            <span>0.167 BNB</span>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="twap_trade">
                          <div class="input_width_div">
                            <span style="font-size:12px">Trade interval</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <el-button text plain size="small" circle icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <div class="mt-4">
                            <el-input size="large" v-model="input3" placeholder="0" class="input-width-select">
                              <template #append>
                                <el-select v-model="select" placeholder="MINUTES" class="select_width" size="large">
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
                          <div class="input_width_div">
                            <span style="font-size:12px">Max duration</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <el-button text plain size="small" circle icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <div class="mt-4">
                            <el-input size="large" v-model="input2" placeholder="0" class="input-width-select">
                              <template #append>
                                <el-select v-model="select2" placeholder="MINUTES" class="select_width" size="large">
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
                        <el-button v-if="!isConnect" color="#1fc7d4" class="custom-button" round style="width:100%;">
                          <h2 style="color: #fff;">Connect Wallet</h2>
                        </el-button>
                        <el-button v-else color="#e9eaed" class="custom-button" round style="width:100%;">
                          <h2 style="color: #bdc2c4;">Enter an amount</h2>
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
                <el-tab-pane label="LIMIT" name="LIMIT">
                  <div>
                    <el-row :gutter="10">
                      <el-col :span="24" class="twap_header">
                        <div class="swap_footer_button">
                          <h1 style="color:black">LIMIT</h1>
                          <el-button text><svg-icon name="brokeline"></svg-icon></el-button>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="!isSorted">
                        <div class="main_header">
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="isSorted">
                        <div class="main_header">
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
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="sort_box">
                          <el-button type="success" icon="Sort" circle size="large" @click="sortAssets" />
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="!isSorted">
                        <div class="main_header">
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
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header" v-show="isSorted">
                        <div class="main_header">
                          <el-button text plain @click="dialogVisible = true">
                            <svg-icon name="bnb" width="1.5rem" height="1.5rem" style="margin-right:5px"></svg-icon>
                            <h2 style="color:black">BNB<el-icon>
                                <CaretBottom />
                              </el-icon></h2>
                          </el-button>
                          <el-button text plain><span style="color:rgb(122, 110, 170)">Balance:0</span></el-button>
                        </div>
                        <div class="input-with-result">
                          <el-input v-model="inputValue" type="textarea" resize="none"
                            input-style="background-color:#eeeaf4;border-radius: 15px;padding-left:16px" :rows="3"
                            placeholder="0.0" class="input-area"></el-input>
                          <div class="result-area" v-if="inputValue">
                            <span>~{{ inputValue }} USD</span>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24" class="bnb_header">
                        <div class="swap_footer_button">
                          <div>
                            <span class="el-dropdown_span" style="color:black">Limit price</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <template #content>
                                <div class="content_box">
                                  <p>
                                    This sets the lowest price for trades in
                                    your order.Trades will ONLY be
                                    executed when this limit price is lower
                                    than or equal to the available market
                                    price.Some trades may not be executed
                                    if the limit price is higher than the
                                    available market price and your order
                                    may only be partially filled.
                                  </p>

                                </div>
                              </template>
                              <el-button text plain icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                            <el-button type="primary" round icon="RefreshRight">
                              Reset
                            </el-button>
                          </div>
                          <!-- <el-tooltip effect="dark" content="Loding" placement="top">
                            <svg-icon name="switch" width="3rem" height="3rem"></svg-icon>
                          </el-tooltip> -->
                          <el-button text plain icon="Refresh" @click="clickRefresh"></el-button>
                        </div>
                        <el-input v-model="textarea" size="large" resize="none" input-style="background-color:#eeeaf4;"
                          style="width: 100%;" :rows="2" placeholder="0.0">
                        </el-input>
                      </el-col>
                      <el-col :span="24">
                        <div v-if="inputValue" class="swap_footer_button swap_footer_refresh">
                          <span style="color:#a88efc;font-weight:bold">Price</span>
                          <div>
                            <span v-if="showConversion" style="color:black;">1 CAKE <svg-icon name="conversion"
                                width="0.8rem" height="0.8rem"></svg-icon> 0.00461927 BNB</span>
                            <span v-else style="color:black;">1 BNB <svg-icon name="conversion" width="0.8rem"
                                height="0.8rem"></svg-icon>
                              216.27 CAKE</span>

                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="twap_trade">
                          <div class="input_width_div">
                            <span style="font-size:12px">Trade interval</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <el-button text plain size="small" circle icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <div class="mt-4">
                            <el-input size="large" v-model="input3" placeholder="0" class="input-width-select">
                              <template #append>
                                <el-select v-model="select" placeholder="MINUTES" size="large" class="select_width">
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
                          <div class="input_width_div">
                            <span style="font-size:12px">Max duration</span>
                            <el-tooltip effect="dark" content="Connect Wallet" placement="top">
                              <el-button text plain size="small" circle icon="QuestionFilled">
                              </el-button>
                            </el-tooltip>
                          </div>
                          <div class="mt-4">
                            <el-input size="large" v-model="input2" placeholder="0" class="input-width-select">
                              <template #append>
                                <el-select v-model="select2" placeholder="MINUTES" size="large" class="select_width">
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
                        <el-button v-if="!isConnect" color="#1fc7d4" class="custom-button" round style="width:100%;">
                          <h2 style="color: #fff;">Connect Wallet</h2>
                        </el-button>
                        <el-button v-else color="#e9eaed" class="custom-button" round style="width:100%;">
                          <h2 style="color: #bdc2c4;">Enter an amount</h2>
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
import { computed, onMounted, ref } from 'vue'
import router from '@/router'
import { ElMessage } from 'element-plus'
import MetamaskService from '@/components/MetamaskService';
const showSecondaryNavigation = ref(false);
const showConversion = ref(false)
const activeName = ref('MARKET');
const dialogVisible = ref(false);
const inputValue = ref('')
const textarea = ref('');
const select = ref('')
const input3 = ref('')
const select2 = ref('')
const input2 = ref('')
const value2 = ref(true)
const sliderValue = ref(0)
const seachDialog = ref('')
const isSorted = ref(false)
const isConnect = ref("")
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
// const filterTableData = computed(()=>{
//   tableData.value.filter((data)=>{
//     !seachDialog.value || data.name.toLowerCase().includes(seachDialog.value.toLowerCase())
//   })
// })
const sortAssets = () => {
  isSorted.value = !isSorted.value
}
const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
    const { provider, signer, account } = await MetamaskService.connectWallet();
      isConnect.value = account;
  } catch (error) {

  }
  }
  
}
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
const clickRefresh = () => {
  showConversion.value = !showConversion.value
}
onMounted(() => {

})
</script>

<style scoped>
.el-row {
  padding: 10px 10px;
}

.swap_footer_refresh {
  padding-left: 9px;
}

.container-xxl {
  position: relative;
  background-color: #ebf6ff;
}

.main_header {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.sort_box {
  display: flex;
  justify-content: center;
  height: 4.0625rem;
  align-items: center;
  margin-top: 10px;
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
    width: 51%;
  }

  :deep(.el-dialog) {
    width: 100%;
  }
  .el-main{
    --el-main-padding:0;
  }
  .el-tabs--border-card>.el-tabs__content{
    padding: 0;
  }
}
</style>