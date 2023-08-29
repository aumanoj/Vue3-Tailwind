
import { defineStore } from 'pinia';

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [], // Array to store user messages
  }),
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
  },
});