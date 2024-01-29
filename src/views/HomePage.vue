<script setup>

    import ListItem from '../components/Header/HeaderListItem.vue'
    import shipDetails from '../components/HomePage/shipDetails.vue'

    import {useHomeStore} from '@/stores/HomePageStore.js'
    import {computed, ref} from "vue";

    const headerList = computed(()=> useHomeStore().shipsList)
    const shipDetailsList = computed(()=> useHomeStore().shipDetailsList)

    const activeShip = ref(1)

</script>


<template>

    <div class="w-[1440px] h-auto my-0 mx-auto bg-black pt-[50px]">



        <div class="flex flex-col items-center">

            <h1 class="font-normal font-roboto text-[64px] leading-normal text-white">

                Falcon Heavy

            </h1>

            <div class="w-[270px] font-thin font-roboto text-[16px] leading-[22.4px] lowercase text-white text-center my-[52px]">The most powerful operational rocket in the world by a factor of two</div>

            <ul class="w-[300px] flex justify-between">

                <ListItem v-for="item in headerList" :item="item" :key="item.id"
                          class="text-white font-roboto text-[12px] font-normal"
                          :class="item.id === activeShip ? 'border-b border-green-200 text-green-200' : 'border-none'"
                          @click="activeShip = item.id"
                />

            </ul>

        </div>
        
        <div class="bg-mainImage h-[1006px]"/>

        <div class="flex bg-black items-center pl-[150px] pr-[105px]">

            <shipDetails  v-for="item in shipDetailsList" :key="item.id" :item="item" :class="item.id === activeShip ? 'block' : 'hidden'"/>

        </div>

    </div>

</template>

<style scoped>

</style>