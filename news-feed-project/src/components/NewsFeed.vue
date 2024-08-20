<!-- componests 폴더의 각 vue 파일이 각각의 페이지라고 생각하면 됨 -->

<template>
    <div id="container">
        <h1>Breaking News</h1>
        <div>
            <!-- 뉴스 카테고리 셀렉트 박스 -->
            <select id="categorySelectBox" v-model="selectedOption">
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="general">general</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
            </select>

            <!-- 데이터 조회 목록 -->
            <ul>
                <li v-for="(news, index) in newsList" :key="index">
                    {{news.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import config from "../../../apiKey.js";
import axios from "axios";

export default {
    name: 'NewsFeed',
    data() {
        return {
            selectedOption: 'business',
            newsList : [],
            newsApiKey : config.newsApiKey,
        }
    },

    computed: {

    },

    watch: {
        selectedOption() {
            this.fetchNews();
        }
    },

    methods: {
        fetchNews() {
            let params = {
                endpoint : 'https://newsapi.org/v2/top-headlines?',
                category : this.selectedOption,
                country : 'us',
                // page : '5',
                apiKey : this.newsApiKey
            };

            this.getNewsList(params);
        },

        async getNewsList(params) {
            const url = params.endpoint + 'country=' + params.country + '&category=' + params.category + '&apiKey=' + params.apiKey;
            axios
                .get(url,{})
                .then((res) => {
                    console.log("get response 성공");
                    this.newsList = res.data.articles.map(news => {
                        news.title = news.title.split('-')[0].trim();
                        return news;
                    });
                })
                .catch((res) => {
                    console.error(res);
                });
        },
        
    },

    created() {
        this.fetchNews();
    }

};
</script>
<style scoped>
#container {
    width: 900px;
    margin: 0 auto 100px auto;
}

li {
    margin-bottom: 15px;
    text-align: left;
}
</style>