import type { IMovie } from "@/core/movie/IMovie";
import MovieService from "@/core/movie/MovieService";
import { defineStore } from "pinia";
import { reactive, ref, type Ref } from "vue";

export const useMovieStore = defineStore('movies', () => {

    const movies: IMovie[] = reactive([])
    const isLoading: Ref<boolean> = ref(false)
    const service: MovieService = new MovieService()

    const get = async (): Promise<void> => {
        isLoading.value = true
        const data = await service.get()
        Object.assign(movies,data)
        isLoading.value = false
    }

    const post = async (): Promise<void> => {
        const newMovie: IMovie = {
            id: "6",
            title: "Bastarden",
            description: "In the mid-1700s, Danish King Frederik V declared that the wild heath of Jutland should be tamed, cultivated, and colonized so that civilization could spread and new taxes be generated for the royal house.",
            img: "https://pics.filmaffinity.com/bastarden-795442169-mmed.jpg"
        }

        await service.post(newMovie)
        await get()
    }

    const destroy = async (id: string): Promise<void> => {
        await service.delete(id)
        await get()
    }

    const put = async (data: IMovie): Promise<void> => {
        await service.put(data)
        await get()
    }


    return { movies, get, post, destroy, put }
})