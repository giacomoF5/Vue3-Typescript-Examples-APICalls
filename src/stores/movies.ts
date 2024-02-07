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


    return { movies, get }
})