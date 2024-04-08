console.log('ciao mondo')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Vue'
    }
  }
}).mount('#app')