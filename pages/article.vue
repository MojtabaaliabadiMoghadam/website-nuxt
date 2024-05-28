<template>
  <div class="">
    <div class="mx-auto md:max-w-7xl">
      <div class="flex w-full">
        <div  class="hidden md:block w-1/3 border-e-2">
          <div class="flex flex-col gap-20 mt-20 mx-10">
            <div dir="rtl" class="flex gap-2">
              <input class="bg-[#f8f8f8] border border-[#ebebeb] text-black font-medium" placeholder="عبارت مورد نظر..." type="text">
              <button class="border border-[#ebebeb] bg-[#f8f8f8] p-3"> جستجو</button>
            </div>
            <div class="flex flex-col gap-7">
              <div class="text-end bg-[#cccccc] rounded-xl p-3">
                <span class="text-[#a50933] font-medium text-[20px]">
                  ارتباط با کارت سبز
                </span>
              </div>
              <div v-for="data in data_in_side_bar" dir="rtl">
                <div class="flex flex-col gap-2 text-[16px]">
                  <span class="font-medium">{{data.question}}</span>
                  <span>{{data.answer}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-3/4 ms-10 flex flex-col items-center md:items-end">
          <div class="flex flex-col text-end items-end my-6 gap-2">
            <span class="font-bold text-[20px]">
              مجله مهاجرتی کارت سبز
            </span>
            <span class="text-[16px] font-light">
              معرفی انواع ویزا، معرفی ایالت ها و مطالب خواندنی مهاجرتی در کارت سبز
            </span>
          </div>
          <div class="flex flex-col md:flex-row md:flex-wrap md:w-[816px] justify-center gap-10 md:gap-20">
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
const data_in_side_bar = [
  {question:'تلفن ثابت:',answer:'021-49374'},
  {question:'تلگرام و واتس اپ:',answer:'021-49374'},
  {question:'ایمیل:',answer:'info@cartesabz.net'},
  {question:'آدرس ایران:',answer:'تهران، اتوبان همت غرب، شهرک گلستان، بلوار کوهک (علیمرادی)، مجتمع تجاری اداری طوبی چیتگر، برج A شمالی، طبقه 11، واحد 1'},
  {question:'ساعت کاری:',answer:'همه روزه از 9 صبح الی 17 (پنجشنبه ها تا 13، بجز تعطیلات رسمی)'},
]
</script>