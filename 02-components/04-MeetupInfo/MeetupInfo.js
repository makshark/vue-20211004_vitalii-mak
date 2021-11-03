import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Number,
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
  methods: {
    formatDatetimeAttribute(simpleDate) {
      return simpleDate.toISOString().substr(0, 10)
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
        <time :datetime="formatDatetimeAttribute(simpleDate)"> {{ formatedDate }} </time>
      </li>
    </ul>`,
});
