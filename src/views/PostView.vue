<script setup lang="ts">
import { usePostStore } from '@/stores/post';


const store = usePostStore()
store.setPosts()
</script>

<template>
    <div>
        <h1>Posts View</h1>
        <div v-for="(post) in store.posts" >
          <span>{{ post }}</span>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>