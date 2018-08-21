<template>
    <div>
        <ul class="list-group list-group-flush" v-for="(movie, key) in movies" :key="key">
            <li class="list-group-item"><b>Title: {{ movie.title }}</b></li>
            <li class="list-group-item">Director: {{ movie.director }}</li>
            <li class="list-group-item">Release date:{{ movie.releaseDate }}</li>
            <li class="list-group-item">Genre: {{ movie.genre }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['movies']
}
</script>

