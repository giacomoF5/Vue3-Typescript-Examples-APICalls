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

}