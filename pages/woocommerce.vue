<script setup>
// const url = "http://80.229.31.61/wordpress/wp-json/wc/v3/products"

const config = useRuntimeConfig();
// const url = "https://nyota-woo.co.uk/wordpress/wp-json/"
// const oauth = OAuth({
//       consumer: {
//           key: '${config.wooKey}',
//           secret: '${config.wooVal}'
//       },
//       signature_method: 'HMAC-SHA1'
//   });

const url5 = 'https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products';
const {data, error, pending} = await useFetch(url5, {
        method: 'GET',
        // headers: {
        //     "Authorization": "Basic" "Y2tfM2QxOGE4OWU0NzA3NTU4NjBhMDcwZGRmMjcxMzg2MWZlNTQ2YTk4NDpjc18wZDhjMGVkNjhhNzQ3NTZmNjYzOTcxNjg2ZDNmZDRjMGYzZTNkZWVmIg=="
        // }
        credentials: true,
          auth: {
          username: 'ck_3d18a89e470755860a070ddf2713861fe546a984',
          password: 'cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef'
        }
      });

//   const url5 = 'https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products';
// const {data, error, pending} = await useFetch(url5, {
//         method: 'GET',
//         consumer: {
//           public: ((config.wooKey)),
//           secret: ((config.wooVal))
//         },
//   signature_method: 'HMAC-SHA1'
//         // headers: {
//         //     "Authorization": 
//         //        oauth_consumer_key=((config.wooKey)),
//         //        oauth_token=((config.wooVal)),
//         //        oauth_signature_method="HMAC-SHA1"
//         // }
//       });

// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
// const url5 = 'https://nyota-woo.co.uk/wordpress/wp-json/wc/v3/products';
// const {data} = await useFetch(url5, {
// method: 'GET',
// headers: {
//     "Authorization": 'Bearer ' + ${config.wooKey}:${config.wooVal}
//   }
//   }
// );
// const WooCommerce = new WooCommerceRestApi({
//   url: 'http://80.229.31.61/wordpress/wp-json/wc/v3/products', // Your store URL
//   consumerKey: 'ck_3d18a89e470755860a070ddf2713861fe546a984', // Your consumer key
//   consumerSecret: 'cs_0d8c0ed68a74756f663971686d3fd4c0f3e3deef', // Your consumer secret
//   version: 'wc/v3' // WooCommerce WP REST API version
// });

// const { data, pending, error, refresh} = await useFetch(url)
// http://80.229.31.61/wordpress/wp-json/wp/v2/pages
</script>

<template>
    <div>
      <h1 class="bg-red-500">E-commerce data</h1>
      data?
      {{  data }}
      {{ error  }}
      {{  pending }}
      data?
    </div>
</template>