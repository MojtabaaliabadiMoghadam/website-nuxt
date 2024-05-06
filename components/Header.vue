<template>
  <nav class="bg-[#003e25] text-white">
    <div class="flex flex-wrap justify-between items-center mx-auto md:mx-[420PX] md:max-w-[1486px] ">
      <div class="flex gap-2 cursor-pointer hover:text-green-400">
        <span class="mdi mdi-login mdi-36px"></span>
        <span class="self-center text-[16px] font-semibold whitespace-nowrap dark:text-white">ورود</span>
      </div>
      <button data-collapse-toggle="mega-menu-full-image" type="button"
              class=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mega-menu-full-image" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
           dir="rtl">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-6">
          <li v-for="(header,index) in items_headers" :key="index">
            <a href="#"
               class="font-bold py-2 px-3 text-white hover:bg-green-200 hover:text-green-800 md:border-0 md:p-0 md:h-[64px] md:min-w-[70px] flex justify-center items-center">
              {{ header.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const items_headers = reactive([
  {title: 'کارت سبز'},
  {title: 'نتایج لاتاری'},
  {title: 'مشاوره برندگان'},
  {title: 'مشاوره مهاجرت'},
  {title: 'رضایت مشتری'},
  {title: 'مجوزها'},
  {title: 'مجله'},
  {title: 'درباره ما'},
  {title: 'تماس با ما'},
])

</script>
<style scoped>
</style>
