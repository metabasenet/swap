<template>
    <div class="footer">
        <el-container class="container-xxl">
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row class="footer-box">
                    <el-col :span="24">
                        <div class="grid-content ep-bg-purple footertop">
                            <div class="footertop-left">
                                <el-icon>
                                    <Message />
                                </el-icon>
                                <el-icon>
                                    <Filter />
                                </el-icon>
                                <el-icon>
                                    <Discount />
                                </el-icon>
                            </div>
                            <div>
                                <el-backtop icon="Upload" :right="100" :bottom="100" />
                                <!-- <el-icon><Upload /></el-icon> -->
                                <!-- <span>Back to Top</span> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="footerbox-center">
                    <el-col :span="6" :xs="24" :sm="12" :md="6" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>Company</h4>
                            <el-link href="https://element-plus.org" :underline="false">Delegate to BscScan</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Terms & Privacy </el-link>
                            <el-link href="https://element-plus.org" :underline="false">Bug Bounty<el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>Company</h4>
                            <el-link href="https://element-plus.org" :underline="false">Delegate to BscScan</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Terms & Privacy </el-link>
                            <el-link href="https://element-plus.org" :underline="false">Bug Bounty<el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>Community</h4>
                            <el-link href="https://element-plus.org" :underline="false">API Documentation</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Knowledge Base</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Network Status</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Learn BSC <el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center footer-Products">
                            <h4>Products & Services</h4>
                            <el-link href="https://element-plus.org" :underline="false">Advertise<el-icon>
                                    <Position />
                                </el-icon></el-link>
                            <el-link href="https://element-plus.org" :underline="false">Explorer-as-a-Service
                                (EaaS)<el-icon>
                                    <Position />
                                </el-icon></el-link>
                            <el-link href="https://element-plus.org" :underline="false">API Plans </el-link>
                            <el-link href="https://element-plus.org" :underline="false">Priority Support</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Blockscan <el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>Community</h4>
                            <el-link href="https://element-plus.org" :underline="false">API Documentation</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Knowledge Base</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Network Status</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Learn BSC <el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h2><svg-icon name="rabbit"></svg-icon>PancakeSwap</h2>
                        </div>
                    </el-col>
                    <div class="footer_icon">
                               <el-button text plain> <svg-icon name="twitter"></svg-icon></el-button>
                               <el-button text plain> <svg-icon name="flybook"></svg-icon></el-button>
                               <el-button text plain> <svg-icon name="github"></svg-icon></el-button>
                            </div>
                </el-row>
                <el-row class="footer-box">
                    <el-col :span="24">
                        <div class="grid-content ep-bg-purple footer-bottom">
                            
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
.responsive-aside {
    width: 3vw;
    transition: width 0.5s ease;
}

@media (min-width: 768px) {
    .responsive-aside {
        width: 3vw;
        opacity: 0.5;
        /* background-color: #fff;  */
    }
}
@media (max-width: 768px) {
    .footer-Products{
        margin-top: 20px;
    }
}
.footer {
    width: 100%;
    /* position: fixed;
  bottom: 0; */
    background-color: #27262c;
}

.footer-box {
    /* margin-top: 1.25rem; */
    /* margin-left: 1.25rem; */
    margin-right: 1.25rem;
    /* background-color: #f8f9fa; */
}
.footer_icon{
    padding-top: 20px;
    padding-right: 15px;
}
.footertop-left .el-icon {
    margin-right: 10px;
}

.footer-center {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    padding-top: 10px;
}
.footer-center h4{
    color: #a88efc;
}
.footer-center .el-button {
    margin-top: 10px;
    font-size: 13px;
}

.footer-center .el-text {
    font-weight: bold;
    font-size: large;
    color: var(--bs-heading-color, inherit);
}

.footer-center .el-link {
    margin-top: 10px;
    font-size: 13px;
    color: #e9ecef;
}
.footer-center h2 {
    
    color: #e9ecef;
}
.footertop {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e9ecef;
}

.footerbox-center {
    padding: 2rem 0;
    border-bottom: 1px solid #e9ecef;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
}

.footer-bottom span {
    padding: 20px 0;
}
</style>