<template>
  <div class="">
    <div class="mx-auto md:max-w-7xl">
      <div class="flex w-full mt-16">
        <div class="w-1/4 border-e-2">
          this is aside bar
        </div>
        <div class="w-3/4 ms-10 flex flex-col items-end">
          <div class="flex flex-col items-end my-6 gap-2">
            <span class="font-bold text-[20px]">
              مجله مهاجرتی کارت سبز
            </span>
            <span class="text-[16px] font-light">
              معرفی انواع ویزا، معرفی ایالت ها و مطالب خواندنی مهاجرتی در کارت سبز
            </span>
          </div>
          <div class="flex flex-wrap w-[816px] justify-center gap-20">
            <template v-for="(data,key) in data_card_box" :key="key">
              <CardBoxArticle :image_name="data.image" :title="data.title" :date_added="data.date"/>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardBoxArticle from "~/components/Article/CardBoxArticle.vue";
const data_card_box = [
  {image:'image_1',title:'کشور عمان',date:'1403-03-03'},
  {image:'image_2',title:'وقت بیومتریک و انگشت نگاری ویزاهای کانادا',date:'1403-03-03'},
  {image:'image_3',title:'ویزای عمان',date:'1403-03-03'},
  {image:'image_4',title:'نحوه گرفتن گواهینامه رانندگی در امارات',date:'1403-03-03'},
  {image:'image_5',title:'تحصیل پزشکی در امریکا و کانادا',date:'1403-03-03'},
  {image:'image_6',title:'امور برندگان لاتاری تا دریافت ویزا',date:'1403-03-03'},
  {image:'image_3',title:'ویزای عمان',date:'1403-03-03'},
  {image:'image_4',title:'نحوه گرفتن گواهینامه رانندگی در امارات',date:'1403-03-03'},
  {image:'image_5',title:'تحصیل پزشکی در امریکا و کانادا',date:'1403-03-03'},
]
</script>