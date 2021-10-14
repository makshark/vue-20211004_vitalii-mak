import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const vueApp = createApp({
  data() {
    return {
      meetupId: null,
      title: null
    }
  },
  watch: {
    async meetupId(newValue, oldValue) {
      const data = await fetchMeetupById(newValue)
      this.title = data.title;
    }
  }
})
vueApp.mount('#app')
