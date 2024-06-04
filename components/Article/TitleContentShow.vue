<template>
  <div class="my-10 flex flex-col gap-3">
          <span class="text-[24px] font-bold">
            {{props.data_content.title}}
          </span>
    <span class="text-[16px] font-light max-w-[850px] text-wrap">
            {{props.data_content.description}}
          </span>
  </div>
</template>
<script setup lang="ts">
interface IDataContent{
  title:string;
  description:string
}
interface IPropsData {
  data_content:IDataContent
}
const props =  defineProps<IPropsData>()
</script>