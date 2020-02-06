<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainComponent msg="Waxxer2: Vue or Die"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainComponent from '@/components/MainComponent.vue'

export default {
  name: 'home',
  components: {
    MainComponent
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.home > img {
  width: 150px;
}
</style>