import type { IUser } from "./IUser";

export default class UserService {

    uri: string = import.meta.env.VITE_APP_API_ENDPOINT


    async get(): Promise<IUser[]> {
        const response = await fetch(this.uri)
        const data: IUser[] = await response.json()

        let list: IUser[] = []

        data.forEach((user: IUser) => {
            let template = { id: user.id, name: user.name }
            list.push(template)
        });

        return list
    }

}