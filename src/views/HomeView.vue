<script setup lang="ts">
import { useUserStore } from '@/stores/user';


const store = useUserStore()
store.setUsers()

</script>

<template>
  <main>
    
    <div v-if="store.isLoading">Loading</div>

    <div v-for="(user) in store.users">
      <span>{{ user }}</span>
    </div>

  </main>
</template>
