<template>
    <div>
        <h1>Movies</h1>
        <movie-row :movies="movies"/>
    </div>
</template>

<script>
import MovieRow from '../components/MovieRow'
import { movies } from '../services/Movies'

export default {
    components: {
        MovieRow
    },
    data() {
        return {
            movies: []
        }
    },

    beforeRouteEnter (to, from, next) {
        movies.getAll()
            .then((response) => {
                next((vm) => {
                    vm.movies = response.data
                })
            })
    },
}
</script>

