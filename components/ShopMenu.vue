<script setup>
const { links } = defineProps(['links'])
</script>

<template>
<nav>
  <NuxtLink to="/woocommerce">Barry's Bikes</NuxtLink>
  <div class="burger-menu">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div>
    <div v-for="link in links">
      <div v-if="link.parent == 0 && link.name != 'Uncategorised'">
        <NuxtLink :to="`/categories/${link.id}`">{{ link.name }}</NuxtLink>
        <div v-for="sublink in links">
          {{ sublink.parent }}
          <div style="margin-left: 20px;" v-if="sublink.parent == link.id">
            <NuxtLink :to="`/categories/${sublink.id}`">{{ sublink.name }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>










<!-- <nav class="bg-white border-gray-200 dark:bg-blue-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li><NuxtLink to="/woocommerce" style="color:#FFF;">Barry's Bikes</NuxtLink></li>
          <li>Basket(0)</li>
      </ul>
    </div>
  </div>
</nav> -->

</template>

<style>
@property --a{
  syntax: '<angle>';
  inherits: false;
  initial-value: 90deg;
}
@property --l{
  syntax: '<percentage>';
  inherits: false;
  initial-value: 10%;
}
@property --c{
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}

.burger-menu {
  position: relative;
  height: 28px;
  width: 25px;
  float: right;
  margin: 40px;
  transition: all 1s;
  transition-delay: 1s;
}
.burger-menu:hover {
  cursor: pointer;
}
.burger-menu span {
  display: block;
  height: 4px;
  width: 24px;
  background-color: #000;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  transition: all 1s;
  transition-delay: 1s;
}
.burger-menu span:first-of-type {
  top: 25%;
}
.burger-menu span:last-of-type {
  top: 75%;
}
.burger-menu.open span:nth-of-type(1) {
  top: 50%;
  rotate: 90deg;
}
.burger-menu.open span:nth-of-type(3) {
  top: 50%;

  rotate: -180deg;
}
.burger-menu.open {
  transform: rotate(45deg);
}
@media screen and (min-width: 740px) {
  .burger-menu {
    display: none;
  }
}
</style>