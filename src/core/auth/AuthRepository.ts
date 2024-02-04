import axios, { type AxiosResponse } from "axios"
import type { IAuthUser } from "./IAuthUser"
import type { ILoggedInUser } from "./ILoggedInUser"

export default class AuthRepository {

    uri: string = import.meta.env.VITE_APP_API_SPRING

    async authenticateAxios(data: IAuthUser): Promise<ILoggedInUser> {
        try {
            const config = {
                auth: {
                    username: data.username,
                    password: data.password
                },
                withCredentials: true
            }
            const response = await axios.get(this.uri + '/login', config)
            return response.data
        } catch (error) {
            throw new Error('API does not respond: ' + error)
        }
    }

    async authenticateFetch(data: IAuthUser): Promise<ILoggedInUser> {
        try {
            const myHeaders = new Headers()
            myHeaders.append('Authorization', 'Basic ' + btoa(data.username + ':' + data.password))
            
            const options: RequestInit = {
                method: 'GET',
                headers: myHeaders,
                credentials: 'include',
            }
            const request = new Request(this.uri+'/login',options)
            
            const response = await fetch(request)
            const json = await response.json()
            return json

        } catch (error) {
            throw new Error('API does not respond: ' + error)
        }
    }



}