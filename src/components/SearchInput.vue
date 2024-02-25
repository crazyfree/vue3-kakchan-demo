<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

const searchTerm = ref('')
const emit = defineEmits(['onSearch'])

watch(searchTerm, (newValue) => {
  emit('onSearch', newValue)
})
</script>

<template>
  <input type="text" v-model="searchTerm" placeholder="Search by name" />
</template>
