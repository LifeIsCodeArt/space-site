<script setup>

    import ListItem from '../Footer/FooterListItem.vue'
    import {useFooterStore} from '@/stores/FooterStore.js'
    import {computed} from "vue";


    const footerList = computed(()=> useFooterStore().socialList)

</script>


<template>
    <div class="bg-black w-[1440px] my-0 mx-auto pt-[83px]">

        <div class="flex flex-col justify-center items-center">

            <img src="@/assets/icons/spaceX-logo.svg" alt="" class="h-[17px] w-[138px]">

            <ul class="flex items-center mt-[43px] mb-[28px]">

                <ListItem v-for="item in footerList" :item="item" :key="item.id"
                          class="text-white font-roboto text-[12px] font-normal mx-[20px]
                                    hover:text-green-200 hover:duration-1000"
                />

            </ul>

            <p class="text-[18px] text-[#808080] font-normal font-roboto leading-normal">

                For additional questions, contact rideshare@spacex.com

            </p>


            <button class="text-[18px] text-[#FFF] font-normal font-roboto leading-normal py-[20px] px-[87px] mt-[30px] mb-[30px] border">

                Contact us

            </button>

        </div>

    </div>
</template>

<style scoped>

</style>