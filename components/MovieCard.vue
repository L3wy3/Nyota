<template>
    <NuxtLink :to="`/movies/${movie?.id}`">
        <div>
            <h3>
            {{movie?.title}}</h3>
            <img :src="imgUrl" style="height: 400px; width: 500px;"></img>
        </div>
        <div>
            {{movie}}
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { Movie } from '~~/types/Movie';

    const props = defineProps({
        movie: {
            type: Object as PropType<Movie>
        }
    })

    const config = useRuntimeConfig();
    const imgUrl = computed(() => props.movie?.poster_path != null ? 
    `${config.public.imgBaseUrl}/${props.movie.poster_path}` :
    'https://via.placeholder.com/300x500')
</script>