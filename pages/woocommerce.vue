<script setup>
const config = useRuntimeConfig();
const url5 = 'https://nyota-woo.co.uk/wordpress/wp-json/wc/v2/products?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef';
const {data, error, pending} = await useFetch(url5, {
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


</script>
<style>
#products-container {
  max-width: 1600px;
  padding: 20px;
}
.product-container {
  width: 100%;
  max-width: 300px;
  position: relative;
  border: 5px solid rgb(0, 110, 255);
  border-radius: 5px;
  margin: 5px;
  padding: 20px
}
.product-images {
  background-size: cover;
  width: 100%;
  height: 150px;
}
.sale-price {
  background-color: red;
  position: absolute;
  top: -15px;
  right: -15px;
  height: 30px;
  widows: 30px;
}
</style>
<template>
    <div id="products-container">
      <h1 class="bg-red-500">E-commerce data</h1>
      <div style="    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;">
        <div class="product-container" v-for="moo in data">
          <div class="product-images" :style="{'background-image': `url(${moo.images[0].src})`, 'width' : '150px', 'height' : '100px'}"></div>
          <p>{{moo.name}}</p>
          <p>{{ tagScrape(moo.description) }}</p>
          <p>{{ moo.regular_price }}</p>
          <p v-if="moo.sale_price" class="sale-price">{{ moo.sale_price }}</p>
        </div>
      </div>
      <!-- {{  data }} -->
      <!-- {{ error  }} -->
      <!-- {{  pending }} -->
    </div>
</template>