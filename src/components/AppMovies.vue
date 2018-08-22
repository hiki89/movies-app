<template>
    <div>
        <NavBar @searchTermUpdated="setSearchTerm"/>
        <h1>Movies</h1>
        <movie-row  v-for="(movie, key) in filteredMovies" :key="key" :movie="movie"/>
        <div class="alert alert-warning" v-if="filteredMovies.length === 0">
            <p>{{ alert }}</p>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar'
import MovieRow from './MovieRow'
import { movies } from './../services/Movies'

export default {
    components: {
        MovieRow,
        NavBar
    },
    data() {
        return {
            movies: [],
            term: '',
            alert: 'No movies to show!'
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

    methods: {
        setSearchTerm(term) {
            this.term = term
        }
    },

    computed: {
        filteredMovies() {
            return this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.term.toLowerCase()) >= 0);
        }
    }
}
</script>

