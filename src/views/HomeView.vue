<script setup>
import UserMessageTable from '../components/UserMessageTable.vue'
import UserMessageForm from '../components/UserMessageForm.vue'
</script>

<template>
  <div class="w-1/2 mx-auto mt-10 border border-slate-400 rounded-md px-3 py-3 bg-white">
      <UserMessageForm />
      <UserMessageTable />
    </div>
</template>
