import { ref, computed, reactive, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/core/user/IUser'

export const useUserStore = defineStore('user', () => {

    let users: IUser[] = reactive([])
    let isLoading: Ref<boolean> = ref(false)

    const setUsers = async (): Promise<void> => {
        const uri = import.meta.env.VITE_APP_API_ENDPOINT

        isLoading.value = true
        const response = await fetch(uri)
        const data: IUser[] = await response.json()

        data.forEach( (user: IUser) => {
            let template = { id: user.id, name: user.name }
            users.push(template)
        });

        isLoading.value = false

    }

    return { users, isLoading, setUsers }
})
