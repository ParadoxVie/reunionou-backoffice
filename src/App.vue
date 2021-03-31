<template>
  <div id="app">
    <div v-if="this.$store.state.token" id="nav">
      <router-link to="/Events">Liste des events</router-link> / 
      <router-link to="/Users">Liste des users</router-link>
      <br>
      <button @click="Deconnexion" class="button is-primarybutton is-primary">Deconnexion</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    Deconnexion(){
      this.$store.state.token = false
      this.$store.state.admin = false
      this.$router.push('/')

    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
