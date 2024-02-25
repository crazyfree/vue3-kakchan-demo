<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Post, User } from '../stores/user'
import { useUsersStore } from '../stores/user'

const props = defineProps<{
  selectedUser: User
}>();

const usersStore = useUsersStore();
const posts = ref<Post[]>([]);

// have to fetch posts here since first load
// the watch function does not get fired
(async () => {
  posts.value = await usersStore.fetchPosts(props.selectedUser.id)
})()

watch(
  () => props.selectedUser,
  async (newValue) => {
    if (newValue) {
      posts.value = await usersStore.fetchPosts(newValue.id)
    }
  }
)
</script>

<template>
  <h2>{{ selectedUser.name }}'s Posts</h2>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </tbody>
  </table>
</template>
