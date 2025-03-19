<template>
  <div class="page-content">
    <div class="page-title">
      <div class="title-welcome">欢迎使用英雄联盟观战 UI</div>
      <div class="title-author">
        作者 <a class="title-author-link" href="https://github.com/LeopoldChou">@leopoldchou</a>
      </div>
    </div>
    <router-link class="link-button" to="/ob">点击前往观战 UI</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.page-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.page-title {
  padding: 2rem 2.5rem;
  border-radius: 2rem;
  background-color: #fffc;
  margin-bottom: 25vh;
  text-align: center;
}
.title-welcome {
  font-size: 2.5rem;
  font-weight: bold;
}
.title-author {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #666;
  text-align: center;
}
.title-author-link {
  color: #08f;
  text-decoration: underline;
}
.link-button {
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  background-color: #08fc;
  color: #fff;
}
</style>