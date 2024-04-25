<template>
  <div>
    <el-row :gutter="10">
      <div class="header-top">
        <el-col :span="11">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" ellipsis style="max-width: 800px"
          @select="handleSelect">
          <el-menu-item index="0">
            <svg-icon name="rabbit"></svg-icon>
            <span>PancakeSwap</span>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>Trade</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
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
          <el-button text size="large"><svg-icon name="rabbit"></svg-icon><span>$2.801</span></el-button>
        
        <el-button text >
          <svg-icon name="globe"></svg-icon>
        </el-button>
        <el-button text ><svg-icon name="settings"></svg-icon></el-button>
        <el-button text ><svg-icon name="notification"></svg-icon></el-button>
        <el-dropdown>
      <el-button type="info" plain style="margin-right:10px">
        <svg-icon name="fox"></svg-icon>BNB Chain<el-icon class="el-icon--right"><arrow-down /></el-icon>
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
        <el-button type="success">Connect Wallet</el-button>
        </div>
      </el-col>
      </div>       
    </el-row>
    <el-row :gutter="10">
     <el-col :span="24" class="header_col">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-menu-item index="1">Swap</el-menu-item>
          <el-menu-item index="2">Liquidity</el-menu-item>
          <el-menu-item index="3">Perpetual <svg-icon name="share" width="1rem" height="1rem" style="margin-left: 5px;"></svg-icon> </el-menu-item>
          <el-menu-item index="4">Options <svg-icon name="share" width="1rem" height="1rem" style="margin-left: 5px;"></svg-icon></el-menu-item>
          <el-menu-item index="5">Bridge <svg-icon name="share" width="1rem" height="1rem" style="margin-left: 5px;"></svg-icon></el-menu-item>
          <el-menu-item index="6">Limit(Deprecated)</el-menu-item>
          <el-menu-item index="7">Trading Reward</el-menu-item>
        </el-menu>
     </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.header-top{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.25rem;
  border-bottom: 2px solid #e8e8e8;
}
.header-right{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header_col{
  display: flex;
  justify-content: center;
}
</style>