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
                    <el-col :span="6" :xs="24" :sm="12" :md="4" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>{{ $t('footer.github') }}</h4>
                            <el-link href="https://github.com/metabasenet" target="_blank" :underline="false">to {{
                                $t('footer.github') }}<svg-icon name="github"
                                    style="margin-left:5px"></svg-icon></el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="24" :sm="12" :md="4" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>{{ $t('footer.telegram') }}</h4>
                            <el-link href="https://t.me/www_metabasenet_club" target="_blank" :underline="false">to {{
                                $t('footer.telegram') }}<svg-icon name="flybook"
                                    style="margin-left:5px"></svg-icon></el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="24" :sm="12" :md="4" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>{{ $t('footer.twitter') }}</h4>
                            <el-link href="https://x.com/Jkaorr?t=Lb8tUaBP1m701lSfx7KGOQ&s=09" target="_blank"
                                :underline="false">to {{ $t('footer.twitter') }}<svg-icon name="twitter"
                                    style="margin-left:5px"></svg-icon></el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="24" :sm="12" :md="4" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center footer-Products">
                            <h4>{{ $t('footer.faceBook') }}</h4>
                            <el-link href="https://www.facebook.com/profile.php?id=61559045363979&mibextid=ZbWKwL"
                                target="_blank" :underline="false">to {{ $t('footer.faceBook') }} <svg-icon
                                    name="facebook" style="margin-left:5px"></svg-icon></el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="24" :sm="12" :md="4" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4>{{ $t('footer.mntBrowser') }}</h4>
                            <el-link href="https://main.metabasenet.site/" target="_blank" :underline="false">to {{
                                $t('footer.mntBrowser') }}<svg-icon name="globe"
                                    style="margin-left:5px"></svg-icon></el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="24" :sm="12" :md="4" :lg="4">
                        <div class="grid-content ep-bg-purple footer-center rabbits">
                            <svg-icon name="rabbits" width="2rem" height="2rem"></svg-icon>
                            <h2>MntSwap</h2>
                        </div>
                    </el-col>
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
    .footer-Products {
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

.footer_icon {
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
    font-size: 16px;
}

.footer-center h4 {
    color: #a88efc;
}

.footer-center .el-button {
    margin-top: 10px;
    font-size: 16px;
}

.footer-center .el-text {
    font-weight: bold;
    font-size: large;
    color: var(--bs-heading-color, inherit);
}

.footer-center .el-link {
    margin-top: 5px;
    font-size: 16px;
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

.rabbits {
    display: flex;
    flex-direction: row;
    align-items: center;
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