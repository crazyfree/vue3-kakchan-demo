import { defineStore } from 'pinia'
import axios from 'axios'

export interface User {
  id: number
  name: string
  email: string
  address: { city: string }
  company: { name: string }
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as Array<User>,
    filteredUsers: [] as Array<User>,
    selectedUser: null as User | null
  }),
  getters: {
    // ... Add getters as needed
  },
  actions: {
    async fetchUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.users = response.data
      this.filteredUsers = this.users
    },
    filterUsers(searchTerm: string) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    },
    setSelectedUser(userId: number) {
      this.selectedUser = this.users.find((user) => user.id === userId) as User
    },
    async fetchPosts(userId: number): Promise<Post[]> {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )

      return response.data
    }
  }
})
