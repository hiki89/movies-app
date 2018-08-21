<template>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Title: {{ movie.title }}</b></li>
            <li class="list-group-item">Director: {{ movie.director }}</li>
            <li class="list-group-item">Release date:{{ movie.releaseDate }}</li>
            <li class="list-group-item">Genre: {{ movie.genre }}</li>
        </ul>
</template>

<script>
export default {
    props: ['movie']
}
</script>

