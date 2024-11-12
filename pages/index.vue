<script setup>
</script>

<template>
    <div>
      <section class="hero"  style="background-color: black">
        <h1 class="parallax_1">Nyota</h1>
        <img class="parallax_4" style="width: 100vh" src="/img/parralax/0.webp" alt="">
        <img style="    width: 50%;
    object-fit: contain;
    right: -40vw;
    position: relative;" class="parallax_7" src="/img/parralax/1.webp" alt="">
        <!-- <img class="parallax_6" src="/home/lewy/Code/Nyota-project/public/img/parralax/2.webp" alt="">
        <img class="parallax_5" src="/home/lewy/Code/Nyota-project/public/img/parralax/3.webp" alt="">
        <img class="parallax_4" src="/home/lewy/Code/Nyota-project/public/img/parralax/4.webp" alt="">
        <img class="parallax_3" src="/home/lewy/Code/Nyota-project/public/img/parralax/5.webp" alt="">
        <img class="parallax_2" src="/home/lewy/Code/Nyota-project/public/img/parralax/6.webp" alt="">
        <img class="parallax_1" src="/home/lewy/Code/Nyota-project/public/img/parralax/7.webp" alt=""> -->
    </section>
    <section class="content">
        <h2>Previous projects</h2>
        <p>I've been developing websites for almost a decade at this point, here are just some examples</p><br>
        <h3>Coming soon</h3>
        <article class="gallery">
            <img src="https://assets.codepen.io/1506195/unsplash-music-0.avif" alt="guitar player at concert" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-1.avif" alt="duo singing" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-2.avif" alt="crowd cheering" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-3.avif" alt="singer performing" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-4.avif" alt="singer fistbumping crowd" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-5.avif" alt="man with a guitar singing" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-6.avif" alt="crowd looking at a lighted stage" />
            <img src="https://assets.codepen.io/1506195/unsplash-music-7.avif" alt="woman singing on stage" />
        </article>  
        <svg id="moo" width="281" height="268" viewBox="0 0 281 268" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="path('M149.096 6C165.945 16.1094 209.82 23.2663 236.639 26.8586C248.382 28.4315 256.597 39.5792 254.874 51.3014C250.932 78.1079 246.762 121.8 258.596 136C276.096 157 283 187 279 231C275 275 232 274 200.096 253C168.192 232 184.192 217 124.096 206C64 195 45.0958 240 19.192 231C-6.71179 222 5.90416 177 19.192 136C44.2882 94.9999 89.0958 90 85.0958 50C81.0958 9.99999 124.096 -9 149.096 6Z')" fill="#D9D9D9"/>
            <ellipse cx="135.5" cy="72" rx="19.5" ry="19" fill="white"/>
            <ellipse cx="194.5" cy="72.5" rx="17.5" ry="18.5" fill="white"/>
            <ellipse :cx="`${((textDefault.x/80)+120)}`" cy="79" rx="12" ry="12" fill="black"/>
            <ellipse :cx="`${((textDefault.x/80)+175)}`" cy="73.5" rx="8" ry="8.5" fill="black"/>
        </svg> 
    </section>
    <section style="height: 100vh; background-color: red;">
        

    </section>
    </div>
    <p>Basic Usage</p>
  <pre lang="yaml">{{ textDefault.x }}</pre>
  <p>Extractor Usage</p>
  <pre lang="yaml">{{ textWithExtractor }}</pre>
</template>
<script setup lang="ts">
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useMouse, useParentElement } from '@vueuse/core'
// import { stringify } from '@vueuse/docs-utils'
import { reactive } from 'vue'

const parentEl = useParentElement()

const mouseDefault = reactive(useMouse())
const textDefault = mouseDefault

const extractor: UseMouseEventExtractor = (event) => {
  if (typeof Touch !== 'undefined' && event instanceof Touch)
    return null
  else
    return [event.offsetX, event.offsetY]
}


const mouseWithExtractor = reactive(useMouse({ target: parentEl, type: extractor }))
const textWithExtractor = mouseWithExtractor
</script>
<style>
.content {
    position: relative;
}
#moo {
    position: absolute;
    right: 0;
    top: -200px;
    z-index: 1;
}

#moo path {
    fill: #03bd03;
    transition: all 1s;
}
#moo:hover path {
    fill: yellow;
}
    #moo path {
        animation: woof infinite alternate-reverse 2s;
    }
    @keyframes woof {
        from {d: path('M149.096 6C165.945 16.1094 209.82 23.2663 236.639 26.8586C248.382 28.4315 256.597 39.5792 254.874 51.3014C250.932 78.1079 246.762 121.8 258.596 136C276.096 157 283 187 279 231C275 275 232 274 200.096 253C168.192 232 184.192 217 124.096 206C64 195 45.0958 240 19.192 231C-6.71179 222 5.90416 177 19.192 136C44.2882 94.9999 89.0958 90 85.0958 50C81.0958 9.99999 124.096 -9 149.096 6Z');}
        to {d: path('M158.096 3.99999C167.989 9.93573 185.226 11.1737 202.447 10.5025C220.873 9.78419 235.427 32.7505 229.056 50.0545C224.332 62.8823 222.648 75.3781 229 83C246.5 104 271 151 267 195C263 239 246.904 279 215 258C183.096 237 191.096 230 131 219C70.9042 208 47.9038 204 22 195C-3.90379 186 -8.09619 134 17 93C42.0962 52 124 104 120 64C116 24 133.096 -11 158.096 3.99999Z');}
        /* 50% {d: path('M160 4.00002C175.109 13.0655 210.308 11.1732 235.794 8.25697C249.851 6.64854 262.138 19.112 259.929 33.0869C254.052 70.2809 246.606 131.612 258.596 146C276.096 167 283 197 279 241C275 285 207.904 291 176 270C144.096 249 236.096 218 176 207C115.904 196 45.0958 250 19.192 241C-6.71179 232 -5.90416 187 19.192 146C44.2882 105 59 106 55 66C51 26 135 -11 160 4.00002Z');}
        75% {d: path('M158.096 3.99999C167.989 9.93573 185.226 11.1737 202.447 10.5025C220.873 9.78419 235.427 32.7505 229.056 50.0545C224.332 62.8823 222.648 75.3781 229 83C246.5 104 271 151 267 195C263 239 246.904 279 215 258C183.096 237 191.096 230 131 219C70.9042 208 47.9038 204 22 195C-3.90379 186 -8.09619 134 17 93C42.0962 52 124 104 120 64C116 24 133.096 -11 158.096 3.99999Z');}
        100% {d: path('M149.096 6C165.945 16.1094 209.82 23.2663 236.639 26.8586C248.382 28.4315 256.597 39.5792 254.874 51.3014C250.932 78.1079 246.762 121.8 258.596 136C276.096 157 283 187 279 231C275 275 232 274 200.096 253C168.192 232 184.192 217 124.096 206C64 195 45.0958 240 19.192 231C-6.71179 222 5.90416 177 19.192 136C44.2882 94.9999 89.0958 90 85.0958 50C81.0958 9.99999 124.096 -9 149.096 6Z');} */
       
    }

    /* svg#moo  */
</style>