import { createApp } from './vendor/vue.esm-browser.js';

const vueApp = createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incButtonValue() {
      this.counter += 1;
    }
  }
})

vueApp.mount('#app')
