<!-- componests 폴더의 각 vue 파일이 각각의 페이지라고 생각하면 됨 -->

<template>
    <div>
        <h1>Breaking News</h1>
        <div>
            <!-- 뉴스 카테고리 셀렉트 박스 -->
             <select id="categorySelectBox" v-model="selectedOption">

             </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsFeed',
        data() {
            return {
                selectedOption: 'all',
                
            }
        },

        computed: {

        },

        watch: {

        },

        methods: {
            
        },

        created() {

        },

        updated() {
            
        },
    
    };
</script>