import { ref, computed, reactive, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IPost } from '@/core/posts/IPost'
import PostRepository from '@/core/posts/PostRepository'
import PostService from '@/core/posts/PostService'


export const usePostStore = defineStore('post', () => {

    let posts: IPost[] = reactive([])
    let isLoading: Ref<boolean> = ref(false)
    const repository: PostRepository = new PostRepository()
    const service: PostService = new PostService(repository)

    const setPosts = async (): Promise<void> => {

        isLoading.value = true
        const data: IPost[] = await service.get()
        Object.assign(posts, data)
        if (posts.length != 0) isLoading.value = false

    }

    return { posts, isLoading, setPosts }
})
