<script setup>
const config = useRuntimeConfig();
const count = ref(9);
const page = ref(1);
// let perPage = ref(count);
// const url5 = `https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef&per_page=3&page=${count}`;

const cats = `https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products/categories/?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef`;
// const {data2} = await useAsyncData(
//   'test',
//   () =>
//     $fetch(cats, {})
// );


const { data, pending } = await useAsyncData(
  'test',
  () =>
    $fetch(`https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef`, {
      params: {
        per_page: count.value,
        page: page.value,
      },
    }),
  {
    watch: [count, page],
  }
);
// const { data, pending, error, refresh } = useFetch(`https://reqres.in/api/users?delay=1`, query: {param1: `page=${counter}`)

function tagScrape(text) {
      let regex = /(<([^>]+)>)/ig;
      return text.replace(regex, "");
}

const loadPost = (int) => {
  count.value = int;
  // console.log("refreshing "+count)
  console.log(count)
}

const changePage = (dir) => {
  page.value += dir;
  // console.log("refreshing "+count)
  console.log(count)
}


// const { data3 } = await useFetch('https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products/categories/?consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef');

const { data3 } = await useAsyncData('item', () => $fetch(cats))
// setInterval(refreshing, 1000);
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

@keyframes rotate {
  0%   {background-image: linear-gradient(0deg, black, #0900ff);}
  50% {background-image: linear-gradient(180deg,  #0900ff, black);}
  100%   {background-image: linear-gradient(360deg, black, #0900ff);}
}
.sale-token {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 0 12px 0 200%;
  z-index: 2;
  padding: 9px;
  /* background-image: linear-gradient(292deg, black, #0900ff); */
  color: white;
  font-weight: 900;
  animation: rotate 5s infinite;
}
button {
  display: block;
  margin: 20px;
  padding: 10px 20px;
  text-align: center;
  border: 2px solid black;
  text-transform: capitalize;
  border-radius: 20px;
}
.p-butt {
  float: left;
}
.n-butt {
  float: right;
}
</style>
<template>
    <div id="products-container">
      <h1 style="text-align: center; font-size: 30px;">Barry's bikes</h1>
      <p style="text-align: center; font-size:12px;">This is a headless wordpress/woo-commerce app, all the CMS is dealt with externally and the data is pulled through here to be displayed without having to use wordpress on the client side</p>
      <div style="    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;">
        <div style="width: 100%">
          <!-- <button @click.prevent="loadPost(5)">5</button>
          <button @click.prevent="loadPost(10)">10</button>
          <button @click.prevent="loadPost(15)">15</button>
          <button @click.prevent="loadPost(20)">20</button> -->
          <button class="p-butt" v-if="page > 1" @click.prevent="changePage(-1)">prev page</button>
          <button class="n-butt"@click.prevent="changePage(1)">next page</button>
          <!-- {{ data.length }} -->
          <!-- <pre>pending: {{ pending }}</pre> -->
        </div>
        <div class="product-container" v-for="moo in data">
          <div class="product-images" :style="{'background-image': `url(${moo.images[0].src})`}"></div>
          <h3>{{moo.name}}</h3>
          <p>{{ tagScrape(moo.short_description) }}</p>
          <p v-if="!moo.sale_price">{{ moo.regular_price }}</p>
          <p v-if="moo.sale_price" class="sale-token">Sale</p>
          <p v-if="moo.sale_price">{{ moo.sale_price }} was <span>{{ moo.regular_price }}</span></p>
        </div>
      </div>
       {{ data3 }} 
      <!-- {{ error  }} -->
      <!-- {{  pending }} -->
    </div>
</template>