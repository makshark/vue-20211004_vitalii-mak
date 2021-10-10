import { createApp } from './vendor/vue.esm-browser.js';

const vueApp = createApp({
  data() {
    return {
      value1: 0,
      value2: 0,
      //possible values [sum, subtract, multiply, divide]
      operator_btn: 'sum',
    }
  },
  computed: {
    calculate() {
      if (this.value2 === 0 && this.operator_btn === 'divide') {
        return 'zero division is not allowed'
      }
      switch(this.operator_btn) {
        case "sum":
          return this.value1 + this.value2
        case "subtract":
          return this.value1 - this.value2
        case "multiply":
          return this.value1 * this.value2
        case "divide":
          return this.value1 / this.value2
        default:
          return 'something went wrong'
      }
    }
  }
})

vueApp.mount('#app')
