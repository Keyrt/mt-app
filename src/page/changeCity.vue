<template>
    <div class="page-changeCity">
        <el-row><Province /></el-row>
        <el-row>
            <hot title="热门城市：" :list="hotList"></hot>
        </el-row>
        <el-row>
            <hot title="最近访问：" :list="rencentList"></hot>
        </el-row>
        <el-row>
            <Category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import hot from "@/components/changeCity/hot.vue"
import Category from "@/components/changeCity/category.vue"
import api from '@/api/index.js'
export default {
    data() {
        return {
            hotList: [],
            rencentList: []
        }
    },
    created() {
        api.getHotCity().then(res => {
            console.log(res);
            this.hotList = res.data.data.map((item) => item.name);

        });
        api.getRecentCity().then(res => {
            console.log(res);
            this.rencentList = res.data.data.map((item) => item.name)
        })
    },
    components: {
        Province,
        hot,
        Category
    }
};
</script>

