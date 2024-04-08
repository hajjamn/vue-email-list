console.log('ciao mondo')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'API'
    }
  }
}).mount('#app')