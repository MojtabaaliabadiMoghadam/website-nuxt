<template>
  <div>
    <nav class="bg-[#003e25] text-white">
      <div
          class=" flex px-1 flex-wrap justify-between items-center mx-auto md:mx-[380PX] md:max-w-[1486px] ">
        <div class="flex gap-2 cursor-pointer hover:text-green-400">
          <span class="mdi mdi-login mdi-36px"></span>
          <span class="self-center text-[16px] font-semibold whitespace-nowrap dark:text-white">ورود</span>
        </div>
        <span @click="ChangeStatusShowMenu"
              :class="[!showMenu ? 'mdi-menu' : 'mdi-close']"
              class=" md:hidden mdi mdi-36px"></span>
<!--        <div class="md:hidden items-center justify-between w-full flex flex-col md:w-auto md:order-1"-->
<!--             dir="rtl">-->
<!--          <ul-->
<!--              :class="[showMenu ? 'right-0' : 'right-[-100%]']"-->
<!--              class="absolute bg-green-900 duration-200 ease-in w-full flex flex-col gap-3 md:gap-2 font-medium md:flex-row md:mt-0-->
<!--               md:space-x-6 rounded-b-2xl">-->
<!--            <li v-for="(header,index) in items_headers" :key="index">-->
<!--              <NuxtLink :to="header.path"-->
<!--                        @click="ChangeStatusShowMenu"-->
<!--                        :class="{'bg-gray-400' : route.path === header.path}"-->
<!--                        class="font-bold py-2 px-3 text-white flex justify-start items-center ps-5 my-1">-->
<!--                {{ header.title }}-->
<!--              </NuxtLink>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
        <div class="items-center justify-between w-full flex flex-col md:flex md:flex-row md:w-auto md:order-1"
             dir="rtl">
          <ul
              :class="[showMenu ? 'right-0' : 'right-[-100%]']"
              class="absolute md:static bg-green-900 md:bg-[#003e25] duration-200 ease-in w-full md:w-auto flex-col gap-3 flex md:gap-2 font-medium md:flex-row mt-0 space-x-6">
            <li v-for="(header,index) in items_headers" :key="index">
              <NuxtLink :to="header.path"
                        @click="ChangeStatusShowMenu"
                        :class="{'bg-gray-400' : route.path === header.path}"
                        class="font-bold py-2 px-3 text-white hover:bg-green-200 hover:text-green-800
                        border-0 md:p-0 md:h-[64px] min-w-[70px] flex justify-center items-center">
                {{ header.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const items_headers = reactive([
  {path:'/' , title: 'کارت سبز'},
  {path:'/articles' , title: 'مقالات'},
  {path:'' , title: 'نتایج لاتاری'},
  {path:'' , title: 'مشاوره برندگان'},
  {path:'' , title: 'مشاوره مهاجرت'},
  {path:'' , title: 'رضایت مشتری'},
  {path:'' , title: 'مجوزها'},
  {path:'' , title: 'درباره ما'},
  {path:'' , title: 'تماس با ما'},
])
const showMenu = ref<boolean>(false)
function ChangeStatusShowMenu(){
  showMenu.value = !showMenu.value
}
</script>
<style>
.toggle-enter-from,
.toggle-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
.toggle-enter-active {
  transition: all 1s ease;
}
.toggle-leave-active {
  transition: all 1s ease;
}
.transition-menu {
  //transform: translateY(-60px);
  //transition: all 1s ease;
  animation: show_menu 1s ease;
}
@keyframes show_menu {
  0% {transform: translateY(0px);}
  100% {transform: translateY(400px);}
}
</style>

