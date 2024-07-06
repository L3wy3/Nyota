<script setup>
const config = useRuntimeConfig();
const counter = 1;
const url5 = `https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef&per_page=${counter}`;
const {data, error, pending, refresh} = await useFetch(url5, {
        method: 'GET',
          auth: {
          username: 'ck_3d18a89e470755860a070ddf2713861fe546a984',
          password: 'cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef'
        }
      });

function tagScrape(text) {
      let regex = /(<([^>]+)>)/ig;
      return text.replace(regex, "");
}

function ScoreIncre() {
  counter = ref(6);
  refresh()
  refreshNuxtData()
}
</script>
<style>
#products-container {
  max-width: 1600px;
  padding: 20px;
}
.product-container {
  background-color: #dbe2ff;
  width: 100%;
  max-width: 300px;
  position: relative;
  border: 5px solid rgb(75 97 126);
  border-radius: 11px;
  margin: 5px;
  padding: 10px;
}
.product-container h3 {
  text-align: center;
  font-weight: 600;
  color: #180d64;
}
.product-container p span {
  text-decoration: line-through;
}
.product-images {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
.sale-token {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(234, 255, 0);
  position: absolute;
  top: -30px;
  right: -30px;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50%;
}
</style>
<template>
    <div id="products-container">
      <h1 class="bg-red-500">E-commerce data</h1>
      <div style="    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;">
    <button v-on:click="ScoreIncre()">Increase my Score</button>
        <div class="product-container" v-for="moo in data">
          <div class="product-images" :style="{'background-image': `url(${moo.images[0].src})`}"></div>
          <h3>{{moo.name}}</h3>
          <p>{{ tagScrape(moo.short_description) }}</p>
          <p v-if="!moo.sale_price">{{ moo.regular_price }}</p>
          <p v-if="moo.sale_price" class="sale-token">Sale</p>
          <p v-if="moo.sale_price">{{ moo.sale_price }} was <span>{{ moo.regular_price }}</span></p>
        </div>
      </div>
      <!-- {{ data }} -->
      <!-- {{ error  }} -->
      <!-- {{  pending }} -->
    </div>
</template>