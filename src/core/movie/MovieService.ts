import axios from "axios";
import type { IMovie } from "./IMovie";

export default class MovieService {

    private uri = import.meta.env.VITE_APP_API_MOVIES

    async get(): Promise<IMovie[]> {
        try {
            const response = await axios.get(this.uri)
            const data: IMovie[] = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

}