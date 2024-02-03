import { ref, computed, reactive, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IAuthUser } from '@/core/auth/IAuthUser'


export const useAuthStore = defineStore('auth', () => {

    const user: IAuthUser = reactive({
        username: '',
        isAuthenticated: false
    })
    
    return { user }
})
