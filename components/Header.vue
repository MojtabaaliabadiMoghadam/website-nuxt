<template>
  <div class="w-full h-[64px] text-white bg-[#003e25] flex justify-center items-center gap-8">
    <div v-for="(header,index) in items_headers" :key="index" class="flex h-full hover:bg-[#fff3ab] items-center justify-center w-[110px] mx-1">
      <span class="font-bold text-[16px] text-nowrap">{{header.title}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const items_headers = reactive([
  {title : 'کارت سبز'},
  {title : 'نتایج لاتاری'},
  {title : 'مشاوره برندگان'},
  {title : 'مشاوره مهاجرت'},
  {title : 'رضایت مشتری'},
  {title : 'مجوزها'},
  {title : 'مجله'},
  {title : 'درباره ما'},
  {title : 'تماس با ما'},
])
console.log(items_headers)
</script>