<template>
  <div class="bg-white pb-20">
    <div class="mx-auto md:max-w-5xl">
    <div class="flex flex-col items-center">
      <span class="text-black text-[34px] py-10 font-medium">
        هزینه ثبت نام لاتاری
      </span>
      <div class="flex gap-6 flex-col md:flex-row">
        <BoxRegisterCost :data_card="data_card_1"/>
        <BoxRegisterCost :data_card="data_card_2"/>
      </div>
      <BoxNotification/>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BoxRegisterCost from "~/components/RegisterCost/BoxRegisterCost.vue";
import BoxNotification from "~/components/RegisterCost/BoxNotification.vue";

const data_card_1 = {
  title:'پذیرش حضوری',
  icon:'mdi-login-variant',
  title_button_1:'بزرگسال هر نفر: 380 هزار تومان + عکاسی',
  title_button_2:'فرزند زیرمجموعه هر نفر: 240 هزار تومان + عکاسی'
}
const data_card_2 = {
  title:'پذیرش غیرحضوری',
  icon:' mdi-account-check',
  title_button_1:'بزرگسال هر نفر: 250 هزار تومان',
  title_button_2:'فرزند زیرمجموعه هر نفر: 90 هزار تومان'
}
</script>