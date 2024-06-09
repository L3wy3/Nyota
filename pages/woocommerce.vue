<script setup>
// const url = "http://80.229.31.61/wordpress/wp-json/wc/v3/products"

const url = "http://nyota-woo.co.uk/wordpress/wp-json/"
// const oauth = OAuth({
//       consumer: {
//           key: '',
//           secret: ''
//       },
//       signature_method: 'HMAC-SHA1'
//   });


// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

// const WooCommerce = new WooCommerceRestApi({
//   url: 'http://80.229.31.61/wordpress/wp-json/wc/v3/products', // Your store URL
//   consumerKey: 'ck_3d18a89e470755860a070ddf2713861fe546a984', // Your consumer key
//   consumerSecret: 'cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef', // Your consumer secret
//   version: 'wc/v3' // WooCommerce WP REST API version
// });

const { data, pending, error, refresh} = await useFetch(url)
// http://80.229.31.61/wordpress/wp-json/wp/v2/pages
</script>

<template>
    <div>
      <h1 class="bg-red-500">E-commerce data</h1>
      {{  data }}
    </div>
</template>