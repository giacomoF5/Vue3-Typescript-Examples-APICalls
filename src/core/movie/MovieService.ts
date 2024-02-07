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

    async post(newMovie: IMovie): Promise<void> {

        try {
            const response = await axios.post(this.uri, newMovie)
            const status = response.status
            console.log(status);            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async delete(id: string): Promise<void> {

        const uri = `${this.uri}/${id}`
        
        try {
            const response = await axios.delete(uri)
            const status = response.status
            console.log(status);
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async put(movie: IMovie): Promise<void> {

        const uri = `${this.uri}/${movie.id}`

        try {
            const response = await axios.put(uri, movie)
            const status = response.status
            console.log(status);
            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }

    }

}