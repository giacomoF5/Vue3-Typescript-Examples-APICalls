import type { IUser } from "./IUser"

export default class UserRepository {

    uri: string = import.meta.env.VITE_APP_API_ENDPOINT

    async getAll(): Promise<IUser[]> {

        try {
            const response = await fetch(this.uri)
            const data: IUser[] = await response.json()
            return data
        } catch (error) {
            throw new Error('Error calling API: ' + error)
        }

    }

}