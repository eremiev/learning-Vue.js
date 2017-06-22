<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
  </div>
</template>

<script>
export default {
  props: ['childMessage'],
  name: 'test',
  data () {
    return {
      msg: 'test page'
    }
  }
}
</script>

