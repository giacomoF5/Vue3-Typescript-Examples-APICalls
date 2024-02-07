<script setup lang="ts">
import type { IMovie } from "@/core/movie/IMovie";
import { useMovieStore } from '@/stores/movies';

const store = useMovieStore()
const newMovie: IMovie = {
    id: "6",
    title: "New title",
    description: "New text",
    img: "https://pics.filmaffinity.com/bastarden-795442169-mmed.jpg"
}

store.get()

</script>

<template>
    <div>
        <h1>Movies View</h1>

        <button class="btn btn-primary m-3" @click="store.post()">+</button>
        <button class="btn btn-danger" @click="store.destroy('6')">-</button>
        <button class="btn btn-secondary mx-3" @click="store.put(newMovie)">Update</button>

        <div class="card mb-3" style="max-width: 540px;" v-for="(movie) in store.movies">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="movie.img" class="img-fluid rounded-start" :alt="movie.title">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <p class="card-text">{{ movie.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
img {
    width: 100%;
}
</style>
