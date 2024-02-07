<script setup lang="ts">
import { useMovieStore } from '@/stores/movies';

const store = useMovieStore()
store.get()

</script>

<template>
    <div>
        <h1>Movies View</h1>

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
