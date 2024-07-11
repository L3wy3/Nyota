
<template>

  <ShopMenu />
    <div :style="{'width': '100%','height': '400px','background-image': `url(${product.images[0].src})`}"></div>
    <h1>{{  product.name }}</h1>
    <p>{{  product.description }}</p>
    {{ product }}
</template>

<script setup>
const { id } = useRoute().params
const url = 'https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products/'+ id +'?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef'

const { data: product} = await useFetch(url)

// definePageMeta({
//     layout: 'products'
// })
</script>

<style>
h1 {
    position: absolute;
    top: 200px;
    left: 200px;
    color: #FFF;
    font-size: 40px;
}
</style>