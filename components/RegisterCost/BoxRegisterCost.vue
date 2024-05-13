<template>
  <div class="flex gap-14 flex-col w-[360px] border border-green-400 rounded-2xl">
    <div class="bg-[#04644b] p-[20px] text-center rounded-t-xl py-8 relative">
      <span class="text-white font-bold text-[20px]">{{props.data_card.title}}</span>
      <span
          class="mdi mdi-triangle-down text-[#04644b] mdi-24px absolute top-[84px] right-[166px]"></span>
    </div>
    <div class="flex items-center justify-center">
      <div class="rounded-3xl bg-[#e6f4eb] border border-2 border-dashed border-green-700">
        <span
            :class="props.data_card.icon"
            class="mdi mdi-48px text-green-800 px-3"></span>
      </div>
    </div>
    <div class="flex flex-col gap-3 items-center justify-center mb-10">
      <span class="text-green-950 font-bold">{{props.data_card.title_button_1}}</span>
      <span class="text-green-950 font-bold">{{props.data_card.title_button_2}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IItemData {
  title:string;
  icon:string;
  title_button_1:string
  title_button_2:string
}
interface IPropsData {
  data_card:IItemData
}
const props = defineProps<IPropsData>()
</script>