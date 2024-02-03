import { ref, computed, reactive, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/core/user/IUser'
import UserService from '@/core/user/UserService'

export const useUserStore = defineStore('user', () => {

    let users: IUser[] = reactive([])
    let isLoading: Ref<boolean> = ref(false)
    const service: UserService = new UserService()

    const setUsers = async (): Promise<void> => {
        const uri = import.meta.env.VITE_APP_API_ENDPOINT

        isLoading.value = true
        const data: IUser[] = await service.get()
        Object.assign(users, data)
        if (users.length != 0) isLoading.value = false

    }

    return { users, isLoading, setUsers }
})
