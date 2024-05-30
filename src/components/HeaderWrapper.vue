<template>
  <div>
    <el-row :gutter="10">
      <div class="header-top">
        <el-col :span="11" :xs="3" :sm="3" :md="11" :lg="11">
          <el-menu :default-active="$route.path" class="el-menu-demo" router mode="horizontal" ellipsis
            style="max-width: 800px" @select="handleSelect">
            <el-menu-item index="0">
              <svg-icon name="rabbit"></svg-icon>
              <span class="PancakeSwap">MntSwap</span>
            </el-menu-item>
            <el-menu-item index="/swap">{{ $t('header.swap') }}</el-menu-item>
            <el-menu-item index="/v2add">{{ $t('header.addLiquidity') }}</el-menu-item>
            <el-menu-item index="/remove">{{ $t('header.removeLiquidity') }}</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="10" :xs="19" :sm="19" :md="10" :lg="10">
          <div class="header-right">
            <!-- <el-button class="price_button" text size="large"><svg-icon name="rabbit"></svg-icon><span
                class="price_header">$2.801</span></el-button> -->
            <el-dropdown @command="handleCommand">
              <el-button text>
                <svg-icon name="globe" width="1.6rem" height="1.6rem"></svg-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="en"><span class="english">English</span></el-dropdown-item>
                  <el-dropdown-item command="zh"><span class="english">简体中文</span></el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <!-- <el-button text><svg-icon name="settings" width="1.6rem" height="1.6rem"></svg-icon></el-button>
            <el-button text><svg-icon name="notification" width="1.6rem" height="1.6rem"></svg-icon></el-button> -->
            <!-- <el-button color="#eff4f5" round class="custom-buttons" style="margin-right:10px;">
              <svg-icon name="bnb" style="margin-right:5px"></svg-icon>
              <h3 class="button_h3">BNB Chain</h3><el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button> -->
            <!-- <el-dropdown>
              <el-button color="#eff4f5" round style="margin-right:10px;width:100%">
                <svg-icon name="bnb" style="margin-right:5px"></svg-icon>
                <h3 class="button_h3">BNB Chain</h3><el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown> -->
            <el-button v-if="!isConnect" color="#1fc7d4" class="custom-button" @click="connectWallet" round>
              <h3 style="color: #fff;">{{ $t('header.connect') }}</h3>
            </el-button>
            <el-button v-else color="#eff4f5" class="custom-buttons" round>
              <svg-icon name="purse" style="margin-right:5px"></svg-icon>
              <h3 class="button_h3" style="color: black;">{{ isConnect }}</h3><el-icon
                class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <!-- <el-dropdown v-else style="width:130px">
              <el-button color="#eff4f5" class="custom-buttons" round>
                <svg-icon name="purse" style="margin-right:5px"></svg-icon>
                <h3 style="color: black;">{{ isConnect }}</h3><el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <span class="english">{{ $t('header.quit') }}</span> <svg-icon name="quit"></svg-icon>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown> -->
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MetamaskService from '@/components/MetamaskService';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
const isConnect = ref("")
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleCommand = (command) => {
  locale.value = command;
  console.log(command);
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
      }
    } catch (error) {

    }
  }
}
connectWallet()
</script>

<style scoped>
.el-row {
  width: 100%;
}

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

.button_h3 {
  color: black;
}

:deep(.el-menu-item.is-active) {
  color: #7645d9 !important;
  font-weight: 700;
}

.el-button--small.is-round {
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
  margin-left: 7px;
}

.PancakeSwap {
  font-weight: 700;
  color: black;
  font-size: 16px;
  margin-left: 7px;
}

.custom-buttons {
  width: 9.365rem;
  height: 33px;
  display: flex;
  align-items: center;
}

.english {
  color: #280d5f;
  font-size: 14px;
  padding: 15px 20px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
}

@media (max-width: 768px) {
  .header-top {
    padding-right: 0;
  }

  /* .button_h3 {
    display: none;
  } */

  .el-button+.el-button {
    margin-left: 0px
  }

  .price_button {
    display: none;
  }

}
</style>