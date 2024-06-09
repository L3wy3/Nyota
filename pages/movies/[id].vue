<template>
    <div>
        <img :src="imgUrl"/>
        <div>
            {{ data.title }}
        </div>
        {{  data }}
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    // import type { Movie } from `~~/types/Movie`;

    const route = useRoute();
    const config = useRuntimeConfig();
    const movieId = computed(() => route.params.id);

    const {data} = await useFetch<Movie>(`/api/movies/${movieId.value}`);
    const imgUrl = computed(() => data.value?.poster_path ?
    `${config.public.imgBaseUrl}/${data.value.poster_path}` :
    `https://via.placeholder.com/300x500`);

</script>