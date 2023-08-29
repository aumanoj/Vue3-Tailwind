<template>
  <div>
    <div class="table w-full mt-10">
      <div class="table-header-group bg-slate-100 ">
        <div class="table-row">
          <div class="table-cell text-left px-3 py-3 w-1/4">ID</div>
          <div class="table-cell text-left px-3 py-3 w-3/4">Message</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="message in messages" :key="message.id">
          <div class="table-cell px-3 py-3 w-1/4 border-t border-slate-200">{{ message.id }}</div>
          <div class="table-cell px-3 py-3 w-3/4 border-t border-slate-200">{{ message.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMessagesStore } from '../stores/messages.js'

export default {
  setup() {
    const messagesStore = useMessagesStore()

    const messages = computed(() => messagesStore.messages)

    return { messages }
  }
}
</script>

<style>
</style>
