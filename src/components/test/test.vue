<template>
  <div class="hello">
    <input type="text" v-model="question" />

    <h1>{{ question }}</h1>
    <h1>{{ answer }}</h1>
    <img v-if="image" :src="image" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      image: ''
    }
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion) {
      this.getAnswer()
    }
  },

  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        this.image = ''
        return
      }
      this.answer = 'Thinking...'

       // GET /someUrl
      this.$http.get('https://yesno.wtf/api').then(response => {
      // success callback
        var answer = response.body.answer
        var image = response.body.image
        this.answer = answer
        this.image = image
      }, response => {
      // error callback
      })
    }

  },

  created: function () {
    // `this` points to the vm instance
    this.question = this.$route.query.question
  }
}

</script>

