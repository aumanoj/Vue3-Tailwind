<template>
  <div class="">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img
          class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="image"
        />
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
        >
          John Doe
        </h2>
      </div>
      <button @click="showMsgBox =!showMsgBox "
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          height="16"
          viewBox="0 -960 960 960"
          width="16"
        >
          <path
            d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
          />
        </svg>
        Message
      </button>
    </div>
    <form @submit.prevent="addNewMessage" v-if="showMsgBox">
      <div class="border-t border-slate-400 pt-4 mt-4">
        <div class="mt-2">
          <textarea
            rows="3"
            v-model="newMessage"
            name="first-name"
            placeholder="Enter message here..."
            id="message"
            class="block outline-0 w-full rounded-md py-1.5 px-3 text-gray-900  placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm sm:leading-6 border border-slate-300  hover:border-indigo-600"
          ></textarea>
        </div>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 mt-3 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMessagesStore } from '../stores/messages.js'

export default {
  setup() {
    const newMessage = ref('')
    const errorMessage = ref('')
    const showMsgBox = ref(false)
    const messagesStore = useMessagesStore()

    const addNewMessage = async () => {
      if (newMessage.value.trim() === '') {
        errorMessage.value = 'Message cannot be empty'
        return
      }

      // Call your mock API to add the new message
      const message = { id: Date.now(), text: newMessage.value }
      messagesStore.addMessage(message)

      newMessage.value = '' // Clear input
      errorMessage.value = '' // Clear error
    }

    return { newMessage, errorMessage, addNewMessage,showMsgBox }
  }
}
</script>

<style></style>
