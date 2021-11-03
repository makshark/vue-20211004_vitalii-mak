import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupAgendaItem from '../05-MeetupAgenda/MeetupAgendaItem.js';
import MeetupView from "../06-MeetupView/MeetupView.js";
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',
  props:{
    meetupId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      meetup: null,
      errorDuringRequest: null
    }
  },
  mounted() {
    this.handleRequest(this.meetupId)
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupView,
  },
  watch: {
    meetupId(newValue, oldValue) {
      this.errorDuringRequest = null
      this.meetup = null;
      this.handleRequest(newValue)
    }
  },
  methods: {
    async handleRequest(id) {
      try {
        this.meetup = await fetchMeetupById(id);
      } catch (error) {
        this.errorDuringRequest = error.message
      }
    }
  },


  template: `
    <div class="page-meetup">
      <meetup-view v-if="meetup" :meetup="meetup" ></meetup-view>

      <ui-container v-else-if="!meetup">
        <ui-alert v-if="errorDuringRequest">{{ errorDuringRequest }}</ui-alert>
        <ui-alert v-else>Загрузка...</ui-alert>
      </ui-container>
    </div>`,
});
