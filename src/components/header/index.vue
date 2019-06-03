<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>
<script>
import topBar from './topbar'
import searchBar from './searchBar'
export default {
    components: {
        topBar,
        searchBar
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss";
    body{
        padding:0;
        margin: 0;
    }
    ul,li,dl,dd,dt,ol{
        padding:0;
        margin: 0;
    }
</style>
