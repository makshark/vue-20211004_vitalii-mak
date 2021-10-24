import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      required: true
    },
    place: {
      required: true
    },
    date: {
      required: true
    }
  },
  computed: {
    formatedDate: function () {
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      return this.simpleDate.toLocaleDateString(navigator.language, options)
    },
    simpleDate: function () {
      let res = new Date(this.date)
      return res
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time v-bind:datetime="simpleDate.toISOString().substr(0, 10)"> {{ formatedDate }} </time>
      </li>
    </ul>`,
});
