<template>
  <div class="">
    <div class="mx-auto md:max-w-7xl">
      <div class="flex w-full">
        <div  class="hidden md:block w-1/3 border-e-2">
          <div class="flex flex-col gap-20 mt-20 mx-10">
            <div dir="rtl" class="flex gap-2">
              <input class="rounded-xl bg-[#f8f8f8] border border-[#ebebeb] text-black font-medium" placeholder="عبارت مورد نظر..." type="text">
              <button class="rounded-xl hover:bg-gray-300 border border-[#ebebeb] bg-[#f8f8f8] p-3"> جستجو</button>
            </div>
            <div class="flex flex-col gap-7">
              <div class="text-end bg-[#cccccc] rounded-xl p-3">
                <span class="text-[#a50933] font-medium text-[20px]">
                  ارتباط با کارت سبز
                </span>
              </div>
              <div v-for="data in data_side_bar" dir="rtl">
                <div class="flex flex-col gap-2 text-[16px]">
                  <span class="font-medium">{{data.question}}</span>
                  <span>{{data.answer}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-3/4 ms-10 flex flex-col items-center md:items-end">
          <slot name="content"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface ISideBarData {
  question:string;
  answer:string
}
interface IPropsData {
  data_side_bar:ISideBarData
}
const props = defineProps<IPropsData>()
</script>