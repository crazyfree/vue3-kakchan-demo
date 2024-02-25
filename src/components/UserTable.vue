<script setup lang="ts">
import { computed } from 'vue'
import { useUsersStore } from '../stores/user'

const usersStore = useUsersStore()
const filteredUsers = computed(() => usersStore.filteredUsers)

const selectUser = (userId: number) => {
  usersStore.setSelectedUser(userId)
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="text-center">Name</th>
        <th class="text-center">Email</th>
        <th class="text-right">City</th>
        <th class="text-right">Company</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in filteredUsers" :key="user.id" @click="selectUser(user.id)">
        <td>{{ user.name }}</td>
        <td class="text-center">{{ user.email }}</td>
        <td class="text-right">{{ user.address.city }}</td>
        <td class="text-right">{{ user.company.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}
</style>
