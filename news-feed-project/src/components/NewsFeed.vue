<!-- componests 폴더의 각 vue 파일이 각각의 페이지라고 생각하면 됨 -->

<template>
    <div id="container">
        <h1>Breaking News</h1>
        <div id="content">
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
        
        <!-- 페이지 버튼 -->
        <div id="pagination">
            <button v-for="i in totalPage" :key="i" @click="changePage(i)">
                {{i}}
            </button>
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
            totalPage: 1,
            page : 1,
            pageSize : 20
        }
    },

    computed: {

    },

    watch: {
        selectedOption() {
            this.page = 1;
            this.fetchNews();
        }
    },

    methods: {
        fetchNews() {
            let params = {
                endpoint : 'https://newsapi.org/v2/top-headlines?',
                category : this.selectedOption,
                country : 'us',
                page : this.page,
                apiKey : this.newsApiKey
            };

            this.getNewsList(params);
        },

        async getNewsList(params) {
            const url = params.endpoint + 'country=' + params.country + '&category=' + params.category + '&page=' + params.page + '&apiKey=' + params.apiKey;

            try {
                const res = await axios.get(url, {});
                console.log("get response 성공");
                this.totalPage = Math.ceil(res.data.totalResults/this.pageSize);
                this.newsList = res.data.articles.map(news => {
                    news.title = news.title.split('-')[0].trim();
                    return news;
                });
            } catch (error) {
                console.error(error);
            }

        },

        changePage(i) {
            this.page = i;
            this.fetchNews();
        }
        
    },

    created() {
        this.fetchNews();
    }

};
</script>
<style scoped>
#container {
    width: 900px;
    margin: 0 auto;
}

#pagination {
    margin-bottom: 40px;
    margin-top: 30px;
}

li {
    margin-bottom: 15px;
    text-align: left;
}
</style>