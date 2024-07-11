<template>
    <NuxtLink :to="`/products/${product.id}`">
        <div class="product-images" :style="{'background-image': `url(${product.images[0].src})`}"></div>
        <h3>{{product.name}}</h3>
        <p>{{ tagScrape(product.short_description) }}</p>
        <p v-if="!product.sale_price">{{ product.regular_price }}</p>
        <p v-if="product.sale_price" class="sale-token">Sale</p>
        <p v-if="product.sale_price">{{ product.sale_price }} was <span>{{ product.regular_price }}</span></p>
    </NuxtLink>
</template>
<script setup>
    const { product } = defineProps(['product'])

    function tagScrape(text) {
      let regex = /(<([^>]+)>)/ig;
      return text.replace(regex, "");
    }
    
</script>