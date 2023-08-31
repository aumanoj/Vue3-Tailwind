<template>
  <div>
    <div class="table w-full mt-10 " v-if="messages.length>0">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left bg-slate-100 px-3 py-3 w-1/4 font-semibold text-base">ID</div>
          <div class="table-cell text-left bg-slate-100 px-3 py-3 w-3/4 font-semibold text-base">Message</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="message in messages" :key="message.id">
          <div class="table-cell px-3 py-3 w-1/4 border-b border-slate-200 border-l">{{ message.id }}</div>
          <div class="table-cell px-3 py-3 w-3/4 border-b border-slate-200 border-l border-r">{{ message.text }}</div>
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
