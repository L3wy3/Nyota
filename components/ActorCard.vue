<template>
    <div>
        moo
        <!-- <img :src="imgUrl" style="height: 400px; width: 500px;"></img> -->
    </div>
    <div>
        {{ actor }}
        {{actor?.name}}
    </div>
    <div>
        {{actor?.overview}}
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { Actor } from '~~/types/Actor';

    const props = defineProps({
        actor: {
            type: Object as PropType<Actor>
        }
    })

    const config = useRuntimeConfig();
    // const imgUrl = computed(() => props.actor?.poster_path != null ? 
    // `${config.public.imgBaseUrl}/${props.actor.poster_path}` :
    // 'https://via.placeholder.com/300x500')
</script>