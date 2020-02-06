<template>
  <div class="hello">
  <h1>{{ msg }}</h1>
   <main>
      <div>
        <p>trying to re-create waxxer's OG functionality with vue.js</p>
      </div>
      <form action="">
        <input type="text" placeholder="Zip code">
        <button class="btn btn-success">Go!</button>
      </form>
   </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
