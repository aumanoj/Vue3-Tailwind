
import { defineStore } from 'pinia';

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [], // Array to store user messages
  }),
  getters:{

  },
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
  },
});