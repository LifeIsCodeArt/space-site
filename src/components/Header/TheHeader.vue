<script setup>
    import ListItem from '../Header/HeaderListItem.vue'
    import {useHeaderStore} from '@/stores/HeaderStore.js'
    import {computed} from "vue";


    const headerList = computed(()=> useHeaderStore().menuList)
</script>

<template>
    <div class="px-[104px] w-[1440px] h-auto mx-auto bg-black">

        <div class="py-[54px]">

             <div class="flex justify-between items-center">

                 <img src="../../assets/icons/spaceX-logo.svg" alt="" class="">


                 <ul class="flex w-[250px] justify-between items-center">

                     <ListItem v-for="item in headerList" :item="item" :key="item.id"
                              class="text-white font-roboto text-[12px] font-normal
                                    hover:text-green-200 hover:duration-1000 hover:border-b hover:border-green-200"
                     />

                 </ul>

             </div>

        </div>
    </div>
</template>

<style scoped>

</style>