console.log('ciao mondo')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'API',
      emails: [],
      nEmails: 100
    }
  },
  mounted() {
    console.log('prima di generare', this.emails)
    this.getRandomEmails(this.nEmails)
    console.log('Dopo il ciclo', this.emails)
  },
  methods: {
    getRandomEmails(n) {
      for (let i = 0; i < n; i++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            console.log(res.data.response)
            this.emails.push(res.data.response)
          })
      }
    }
  }
}).mount('#app')