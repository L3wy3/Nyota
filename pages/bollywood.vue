<script setup lang="ts">

const config = useRuntimeConfig();
const list = [35742, 37233, 35780, 78749, 6217];
const picked = (list[(Math.floor(Math.random() * list.length))]);
// import type {APIResponse} from "~~/types/APIResponse";

// const searchTerm = ref('');
// const actorId = "35742";
const url4 =  'https://api.themoviedb.org/3/person/'+picked+'/movie_credits'
    // return "https://api.themoviedb.org/3/person/"+picked+"/movie_credits"
    // return `https://api.themoviedb.org/3/discover/movie?with_people=35742%7C37233`
    // return `api/movies/search?query=${searchTerm.value}`

// const url3 =  'https://api.themoviedb.org/3/person/'+picked+'?language=en-US'
    // return "https://api.themoviedb.org/3/person/"+picked+"/movie_credits"
    // return `https://api.themoviedb.org/3/discover/movie?with_people=35742%7C37233`
    // return `api/movies/search?query=${searchTerm.value}`

// const data = await useFetch<APIResponse>(url);



// const url4 = 'https://api.themoviedb.org/3/person/'+picked+'/movie_credits';
const url5 = 'https://api.themoviedb.org/3/discover/movie?with_people='+picked;
const {data} = await useFetch(url5, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${config.apiKey}`
        }});

const url3 = 'https://api.themoviedb.org/3/person/'+picked+'?language=en-US';
const data2 = await useFetch(url3, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${config.apiKey}`
        }});
const moo = data2.data

</script>

<template>
    <div>
      <div>
            <!-- {{ data2.data }}
         {{ data2(name) }} -->
            <!-- {{  moo.name  }} --> 
            <img :src="config.public.imgBaseUrl+'/'+moo?.profile_path" style="max-width: 300px;"></img>
            <!-- {{ data }} -->
            <div v-for="moo in data2.data">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-x-10 gap-y-10 mb-10">
            <!-- <div v-for="actor in moo"> -->
                <!-- <ActorCard :actor="actor"></ActorCard> -->
            <!-- </div> -->
           
        </div>
    </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-x-10 gap-y-10 mb-10">
            <div v-for="movie in data?.results">
                <MovieCard :movie="movie"></MovieCard>
            </div>
           
        </div>
    </div>
</template>