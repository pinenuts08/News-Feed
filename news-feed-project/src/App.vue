<!-- 최상위 컴포넌트 -->

<template>
  <div id="app">
    <img 
      alt="news logo" 
      id="newsLogo" 
      src="https://media.istockphoto.com/id/1268498566/vector/speech-bubble-with-breaking-news.jpg?s=612x612&w=0&k=20&c=-8F8ilSt2i-MqIBHhL4BlBEK7EDjn6fr5NBLlL3wB2Q="
    >
    
    <NewsFeed/>
  </div>
</template>

<script>
import NewsFeed from './components/NewsFeed.vue'

export default {
  name: 'App',
  components: {
    NewsFeed
  }
}
</script>

<style>
#newsLogo {
  width: 130px;
  padding-right: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
