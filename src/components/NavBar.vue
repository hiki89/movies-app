<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="/movies">Movies App</router-link>
            <movie-search @searchTermUpdated="onSearchTermUpdated"/>
        </nav>
    </div>
</template>

<script>
import MovieSearch from '../components/MovieSearch'
import { movies } from '../services/Movies'

export default {
    components: {
        MovieSearch
    },

    data() {
        return {
            movies: [],
            title: ''
        }
    },

    methods: {
        onSearchTermUpdated(title) {
            this.$emit('searchTermUpdated', title)
        }
    }
}
</script>

