<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
    
  </div>
</template>

<script>
export default {
  props: [''],
  name: 'test',
  data () {
    return {
      msg: 'Test page!'
    }
  }
}
</script>

