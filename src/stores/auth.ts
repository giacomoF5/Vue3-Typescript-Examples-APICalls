import { ref, computed, reactive, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IAuthUser } from '@/core/auth/IAuthUser'
import type { ILoggedInUser } from '@/core/auth/ILoggedInUser'


export const useAuthStore = defineStore('auth', () => {

    const user: ILoggedInUser= reactive({
        username: '',
        roles: '',
        isAuthenticated: false
    })
    
    return { user }
})
