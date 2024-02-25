<script setup lang="ts">
import { computed } from 'vue'
import { useUsersStore } from '../stores/user'

import SearchInput from '../components/SearchInput.vue'
import UserTable from '../components/UserTable.vue'
import UserPosts from '../components/UserPosts.vue'

const usersStore = useUsersStore();
const selectedUser = computed(() => usersStore.selectedUser);

// load User list at first hit
// and keep it in storage
(async () => {
  await usersStore.fetchUsers()
})()

const handleSearch = (searchTerm: string) => {
  usersStore.filterUsers(searchTerm)
}
</script>

<template>
  <div>
    <h2>User Table</h2>
    <SearchInput @onSearch="handleSearch" />
    <UserTable />
  </div>
  <div v-if="selectedUser">
    <UserPosts :selectedUser="selectedUser" />
  </div>
</template>

<style scoped></style>
