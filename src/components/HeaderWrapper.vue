<template>
  <div>
    <el-row :gutter="10">
      <div class="header-top">
        <el-col :span="11">
          <el-menu :default-active="$route.path" class="el-menu-demo" router mode="horizontal" ellipsis
            style="max-width: 800px" @select="handleSelect">
            <el-menu-item index="0">
              <svg-icon name="rabbit"></svg-icon>
              <span class="PancakeSwap">PancakeSwap</span>
            </el-menu-item>
            <el-sub-menu index="/swap">
              <template #title>Trade</template>
              <el-menu-item index="/swap"><span class="menu_header">Swap</span></el-menu-item>
              <el-menu-item index="/liquidity"><span class="menu_header">Liquidity</span></el-menu-item>
              <el-menu-item index="3">
                <div class="menu_quit">
                  <span class="menu_header">Perpetual</span> <svg-icon name="quit" width="1rem" height="1rem"
                    style="margin-left: 5px;"></svg-icon>
                </div>
              </el-menu-item>
              <el-menu-item index="4">
                <div class="menu_quit">
                  <span class="menu_header">Options</span> <svg-icon name="quit" width="1rem" height="1rem"
                    style="margin-left: 5px;"></svg-icon>
                </div>
              </el-menu-item>
              <el-menu-item index="5">
                <div class="menu_quit">
                  <span class="menu_header">Bridge</span> <svg-icon name="quit" width="1rem" height="1rem"
                    style="margin-left: 5px;"></svg-icon>
                </div>
              </el-menu-item>
              <el-menu-item index="6"><span class="menu_header">Limit(Deprecated)</span></el-menu-item>
              <el-menu-item index="7"><span class="menu_header">Trading Reward</span></el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>Buy</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>Earn</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>Game</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>NFT</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="6">
              <template #title>V4</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="4">Info</el-menu-item>
            <el-menu-item index="5">Orders</el-menu-item>
          </el-menu>
        </el-col>
        <!-- <div class="flex-grow"></div> -->
        <el-col :span="10">
          <div class="header-right">
            <el-button text size="large"><svg-icon name="rabbit"></svg-icon><span
                class="price_header">$2.801</span></el-button>

            <el-button text>
              <svg-icon name="globe"></svg-icon>
            </el-button>
            <el-button text><svg-icon name="settings"></svg-icon></el-button>
            <el-button text><svg-icon name="notification"></svg-icon></el-button>
            <el-dropdown>
              <el-button color="#eff4f5" round style="margin-right:10px;width:10rem">
                <svg-icon name="bnb" style="margin-right:5px"></svg-icon><h3 style="color: black;">BNB Chain</h3><el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button v-if="!isConnect" color="#1fc7d4" class="custom-button" @click="connectWallet" round>
              <h3 style="color: #fff;">Connect Wallet</h3>
            </el-button>
            <el-dropdown v-else>
              <el-button color="#eff4f5" class="custom-buttons" round>
              <svg-icon name="purse" style="margin-right:5px"></svg-icon><h3 style="color: black;">{{ isConnect }}</h3><el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24" class="header_col">
        <el-menu :default-active="$route.path" router class="mobile-menu" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-menu-item index="/swap">Swap</el-menu-item>
          <el-menu-item index="/liquidity">Liquidity</el-menu-item>
          <el-menu-item index="3">Perpetual <svg-icon name="share" width="1rem" height="1rem"
              style="margin-left: 5px;"></svg-icon> </el-menu-item>
          <el-menu-item index="4">Options <svg-icon name="share" width="1rem" height="1rem"
              style="margin-left: 5px;"></svg-icon></el-menu-item>
          <el-menu-item index="5">Bridge <svg-icon name="share" width="1rem" height="1rem"
              style="margin-left: 5px;"></svg-icon></el-menu-item>
          <el-menu-item index="6">Limit(Deprecated)</el-menu-item>
          <el-menu-item index="7">Trading Reward</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MetamaskService from '@/components/MetamaskService';
const value = ref('')
const activeIndex = ref('swap')
const isConnect = ref("")
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
    const { provider, signer, account } = await MetamaskService.connectWallet();
      if (account.length >= 10) {
        const firstPart = account.substring(0, 2);
        const lastPart = account.substring(account.length - 4);
        const result = firstPart + "..." + lastPart;
        isConnect.value = result;
        console.log(isConnect.value);
      }
  } catch (error) {

  }
  }
  
}
</script>

<style scoped>
.mobile-menu {
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.flex-grow {
  flex-grow: 1;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.25rem;
  border-bottom: 2px solid #e8e8e8;
}

.header-right {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header_col {
  display: flex;
  justify-content: center;
}

:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
  color: #7645d9;
  font-size: 16px;
}

:deep(.el-sub-menu.is-active) {
  color: #7645d9;
  font-weight: 700;
}

:deep(.el-menu-item.is-active) {
  color: #7645d9 !important;
  font-weight: 700;
}
.el-button--small.is-round{
  padding: 15px 11px;
}
.el-menu-item {
  color: #7a6eaa;
  font-size: 16px;
}

.menu_header {
  color: #7a6eaa;
}

.menu_quit {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price_header {
  font-weight: 700;
  color: #7a6eaa;
  font-size: 16px;
}

.PancakeSwap {
  font-weight: 700;
  color: black;
  font-size: 16px;
}
.custom-buttons{
  width: 9.365rem;
  height: 33px;
    display: flex;
    align-items: center;
}
@media (max-width: 768px) {
  .header-top {
  padding-right: 0;
}
}
</style>