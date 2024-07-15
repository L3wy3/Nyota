<script setup>

const cats = `https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products/categories/?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef`;
import { useWindowScroll } from '@vueuse/core'
const { x, y } = useWindowScroll()
console.log(x.value) // read current x scroll value
y.value = 100 // scroll y to 100

const { data: woof } = await useAsyncData(
  'test1',
  () =>
    $fetch(cats)
);

console.log(woof);
// woof.sort((a, b) => b.menu_order - a.menu_order);
</script>
<style>
body {
  font-size: 16px;
}
@media only screen and (min-width: 720px) {
  body {
    font-size: 18px;
  }
}
@media only screen and (min-width: 1200px) {
  body {
    font-size: 24px;
  }
}
.categories-container {
  display: inline-flex;
    flex-wrap: wrap;
    max-width: 1600px;
    padding: 40px;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    grid-gap: 12px;
}
.category-mid {
  background-color: red;
  min-width: 300px;
  width: 50%;
  max-width: 550px;
}
.category-outer:empty {
  display: none;
}
.category-inner img {
  width: 100%;
  height: 230px;
  background-size: cover;
}
.category-inner h3 {
  text-align: center;
    font-size: 1.5em;
    color: #FFF;
}
</style>
<template>
   <div class="parralax">
      <div style="background-color: blue; width:100%; height: 50px; position: fixed" :style="{'top': x.value }"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  <div :style="{'top': x.value }">

{{ x }}|{{ y }}
</div>
    <div>
      <h1 style="text-align: center; font-size: 30px;">Barry's bikes</h1>
      <p style="text-align: center; font-size:12px;">This is a headless wordpress/woo-commerce app, all the CMS is dealt with externally and the data is pulled through here to be displayed without having to use wordpress on the client side</p>
    </div>
    <div class="categories-container">
      <div class="category-outer" v-for="quack in woof">
        <div class="category-mid"v-if="quack.parent == 0 && quack.name != 'Uncategorised'">
        <CategoryCard :category="quack"/>
        </div>
      </div>
    </div>
</template>