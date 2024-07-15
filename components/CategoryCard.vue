<template>
    <div className="category-inner" v-if="category.image">
        <NuxtLink  :to="`/categories/${category.id}`">
            <img :style="{'background-image': `url(${category.image.src})`}"/>
            <h3>{{ category.name }}</h3>
            <!-- <p>{{ category.id }}</p>
            <p>{{ category.parent }}</p>
            <p>{{ category.menu_order }}</p> -->
        </NuxtLink>
    </div>
</template>
<script setup>
    const { category } = defineProps(['category'])

    function tagScrape(text) {
      let regex = /(<([^>]+)>)/ig;
      return text.replace(regex, "");
    }
    
</script>