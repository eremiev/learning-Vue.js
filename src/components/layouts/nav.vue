<template>
  <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="../" class="navbar-brand">Learn Vue</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
          <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="themes">
                <li><a href="/default/">Default</a></li>
                <li class="divider"></li>
                <li><a href="/test1/">Test1</a></li>
                <li><a href="/test2/">Test2</a></li>
              </ul>
            </li>
            <li>
                <router-link to="/test">Test</router-link>
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
