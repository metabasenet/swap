<template>
    <div>
        <div class="main_right">
            <el-tabs v-model="activeNames" type="border-card" class="demo-tabs">
                <el-tab-pane label="Open" name="open">
                   <div class="currently_dont">
                    You currently don't have open orders
                   </div>
                </el-tab-pane>
                <el-tab-pane label="Canceled" name="canceled">
                    <div class="currently_dont">
                    You currently don't have canceled orders
                   </div>
                </el-tab-pane>
                <el-tab-pane label="Completed" name="completed">
                    <div class="currently_dont">
                    You currently don't have completed  orders
                   </div>
                </el-tab-pane>
                <el-tab-pane label="Expried" name="expried">
                    <div class="currently_dont">
                    You currently don't have expried orders
                   </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref('open');
</script>

<style scoped>
.el-tabs--border-card {
    border-radius: 15px;
}
.currently_dont{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 15px;
    font-weight: 500;
    color: black;
    padding: 20px;
}
</style>