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
                                <h1 style="color:black">Your Liquidity</h1>
                                <div>
                                    <el-button text><svg-icon name="countdown"></svg-icon></el-button>
                                    <el-button text><svg-icon name="settings"></svg-icon></el-button>
                                </div>
                            </div>
                            <div class="liquidity_p">
                                <p>List of your liquidity positions</p>
                            </div>
                            <!-- <div>
                                <el-checkbox size="large" value="Online activities" name="type" style="padding:10px 0">
                                    Hide closed positions
                                </el-checkbox>
                                <el-tabs type="border-card">
                                    <el-tab-pane label="ALL">
                                        <div class="box_v2">
                                            <p>ALL</p>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="V3">
                                        <div class="box_v2">
                                            <p>V3</p>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="StableSwap">
                                        <div class="box_v2">
                                            <p>StableSwap</p>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="V2">
                                        <div class="box_v2">
                                            <p style="font-size:16px">Don't see a pair you joined?</p>
                                            <el-button type="success" color="#1fc7d4"    round>
                                                <router-link style="text-decoration: none;" to="/find" class="liquidity_link">Find other LP
                                                    tokens</router-link>
                                            </el-button>
                                            <el-button type="success" round>
                                                <router-link style="text-decoration: none;" to="/swap" class="liquidity_link">Migrate to
                                                    V3</router-link>
                                            </el-button>
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div> -->
                            <div class="addLiquidity">
                                <router-link style="text-decoration: none;" to="/find">
                                    <el-button color="#1fc7d4" class="custom-button" round style="width:100%;"
                                    >
                                    <el-icon size="large" color="#fff"><Plus /></el-icon><h2 style="color: #fff;padding:10px">Add Liquidity</h2>
                                </el-button>
                                </router-link>
                               
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>
</template>

<script setup>

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
}

.liquidity-box {
    background-color: #fff;
    padding: 25px;
    border-radius: 15px;
}

.liquidity_p {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
}

.el-tabs__nav {
    float: none;
    justify-content: space-around;
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

.el-tabs--border-card {
    border-radius: 15px;
    padding: 10px;
}

.box_v2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 130px;
    background-color: #eee;
}

.liquidity_link {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
}

.el-button--small.is-round {
    padding: 15px 11px;
}
.addLiquidity{
    margin: 20px;
}
.custom-button{
    height:50px;
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