import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem
  },
  props: {
    agenda: {
      type: Array,
      required: true
    }
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <p>Info about meetup</p>
        <!-- meetup agenda item -->
          <div v-for="item in agenda" >
            <meetup-agenda-item :agendaItem="item"></meetup-agenda-item>
          </div>
      </li>
    </ul>`,
});
