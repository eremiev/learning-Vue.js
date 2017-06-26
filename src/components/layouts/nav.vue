<template>
  <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="../" class="navbar-brand">Learn Vue.js</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
                <router-link to="/ask">Ask me?</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
           <li><router-link to="/login">LogIn</router-link></li>
            <li><router-link to="/register">Register</router-link></li> 
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
