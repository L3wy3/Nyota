<script setup>
const config = useRuntimeConfig();
const count = ref(8);
const page = ref(1);

const { cats } = useRoute().params
const { data, pending } = await useAsyncData(
  'test',
  () =>
    $fetch(`https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products?category=`+cats+`&consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef`, {
      params: {
        per_page: count.value,
        page: page.value,
      },
    }),
  {
    watch: [count, page],
  }
);


const subcats = `https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products/categories?parent=`+cats+`&consumer_key=ck_3d18a89e470755860a070ddf2713861fe546a984&consumer_secret=cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef`;
import { useWindowScroll } from '@vueuse/core'
const { x, y } = useWindowScroll()
console.log(x.value) // read current x scroll value
y.value = 100 // scroll y to 100

const { data: woof } = await useAsyncData(
  'test1',
  () =>
    $fetch(subcats)
);
// const { data, pending, error, refresh } = useFetch(`https://reqres.in/api/users?delay=1`, query: {param1: `page=${counter}`)

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
const { category } = defineProps(['category'])
</script>
<style>
#products-container {
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
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

.category-outer {
  background-color: red;
}
.category-outer img {
  height: 130px;
}
</style>
<template>
 <div class="categories-container">
      <div class="category-outer" v-for="quack in woof">
        <CategoryCard :category="quack"/>
      </div>
    </div>
    <div id="products-container">
      <p>Search->{{ category }}</p>
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
          <ProductCard :product="moo"/>
        </div>
      </div>
      <!-- {{ error  }} -->
      <!-- {{  pending }} -->
    </div>
</template>