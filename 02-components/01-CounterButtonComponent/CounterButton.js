import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: Number,
    default: 0
  },
  methods: {
    updateCounter: function () {
      this.$emit('update:count', this.count + 1)
    }

  },

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать

  template: `<button @click="updateCounter" type="button"> {{ count || 0 }}</button>`,
});
