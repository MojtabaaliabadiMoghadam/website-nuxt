<template>
  <div dir="rtl" class="flex gap-4 flex-col items-center cursor-pointer">
    <div class="h-[205px] w-[205px]">
      <img class="rounded-xl" :src="computed_show_image">
    </div>
    <div class="font-bold text-red-500 w-[200px]">
      <span class="text-wrap">
        {{props.title}}
      </span>
    </div>
    <div class="font-light flex justify-start w-full">
      {{props.date_added}}
    </div>
  </div>
</template>
<script setup lang="ts">
import image_1 from '@/assets/images/image-1.jpg'
import image_2 from '@/assets/images/image-2.jpg'
import image_3 from '@/assets/images/image-3.jpg'
import image_4 from '@/assets/images/image-4.jpg'
import image_5 from '@/assets/images/image-5.jpg'
import image_6 from '@/assets/images/image-6.webp'
interface IPropsData {
  title:string
  image_name:string
  date_added:string
}
const computed_show_image = computed(()=>{
  switch (props.image_name){
    case 'image_1':
      return image_1
    break;
    case 'image_2':
      return image_2
      break;
    case 'image_3':
      return image_3
      break;
    case 'image_4':
      return image_4
      break;
    case 'image_5':
      return image_5
      break;
    case 'image_6':
      return image_6
      break;
  }
})
const props = defineProps<IPropsData>()
</script>