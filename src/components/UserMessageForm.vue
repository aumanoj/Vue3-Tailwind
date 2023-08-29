<template>
    <div>
      <form @submit.prevent="addNewMessage">
          <div>
            <label for="message" class="block text-sm font-medium leading-6 text-gray-900">New Message:</label>
            <div class="mt-2">
              <input type="text" v-model="newMessage" name="first-name" id="message" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
            <button type="submit" class="rounded-md bg-indigo-600 mt-3 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
          </div>
      </form>
    </div>

  </template>
  
  <script>
  import { ref } from 'vue';
  import { useMessagesStore } from '../stores/messages.js';
  
  export default {
    setup() {
      const newMessage = ref('');
      const errorMessage = ref('');
  
      const messagesStore = useMessagesStore();
  
      const addNewMessage = async () => {
        if (newMessage.value.trim() === '') {
          errorMessage.value = 'Message cannot be empty';
          return;
        }
  
        // Call your mock API to add the new message
        const message = { id: Date.now(), text: newMessage.value };
        messagesStore.addMessage(message);
  
        newMessage.value = ''; // Clear input
        errorMessage.value = ''; // Clear error
  
      };
  
      return { newMessage, errorMessage, addNewMessage };
    },
  };
  </script>
  
  <style>
  </style>
  