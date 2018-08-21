<template>
    <form>
        <label for="search">Search</label>
        <input id="search" name="search" type="text" v-model="searchTerm">
        <button @click.prevent="searchTermUpdated">Search</button>
    </form>
</template>

<script>
// import { movies } from '../services/Movies'

export default {
    // props: ['movies']
    data() {
        return {
            searchTerm: ''
        }
    },

    methods: {
        searchTermUpdated() {
            this.$emit('searchTermUpdated', this.searchTerm)
        }
    }
}
</script>

