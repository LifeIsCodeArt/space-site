<script setup>
const props = defineProps({
    item:{
        type: Object,
        default: () => {}
    }
})
</script>

<template>

    <div class="flex w-full">

        <div class="flex flex-col pt-[400px]">

            <h2 class="font-roboto font-bold text-[24px] leading-[33.6px] uppercase text-white text-center mb-[50px]">{{item.label}}</h2>

            <ul class="flex flex-col gap-[11px] w-[500px]">
            
                    <li class="flex items-center justify-between">
                
                        <p class="mr-[110px] text-white">HEIGHT</p> <p class="font-roboto font-normal text-[18px] text-white leading-[32.34px]">{{item.heightM }} / <span class="font-roboto font-normal text-[18px] text-[#B2B0B2] leading-[32.34px]">{{ item.heightFT}}</span></p>
                
                    </li>
            
                    <li class="flex items-center justify-between">

                        <p class="mr-[110px] text-white">DIAMETER</p> <p class="font-roboto font-normal text-[18px] text-white leading-[32.34px]">{{item.diameterM }} / <span class="font-roboto font-normal text-[18px] text-[#B2B0B2] leading-[32.34px]">{{ item.diameterFT}}</span></p>
                
                    </li>
            
                    <li class="flex items-center justify-between">

                        <p class="mr-[110px] text-white">MASS</p> <p class="font-roboto font-normal text-[18px] text-white leading-[32.34px]">{{item.massKG }} / <span class="font-roboto font-normal text-[18px] text-[#B2B0B2] leading-[32.34px]">{{ item.massLB}}</span></p>

                    </li>
            
                    <li class="flex items-center justify-between">

                        <p class="mr-[110px] text-white">PAYLOAD TO LEO</p> <p class="font-roboto font-normal text-[18px] text-white leading-[32.34px]">{{item.PTLKG }} / <span class="font-roboto font-normal text-[18px] text-[#B2B0B2] leading-[32.34px] w-[100px]">{{ item.PTLLB}}</span></p>

                    </li>
            
                    <li class="flex items-center justify-between">

                        <p class="mr-[140px] text-white">PAYLOAD TO GTO</p> <p class="font-roboto font-normal text-[18px] text-white leading-[32.34px]">{{item.GTOKG }} / <span class="font-roboto font-normal text-[18px] text-[#B2B0B2] leading-[32.34px]">{{ item.GTOLB}}</span></p>
                
                    </li>

                    <li class="flex items-center justify-between">

                        <p class="mr-[140px] text-white">PAYLOAD TO MARS</p> <p class="font-roboto font-normal text-[18px] text-white leading-[32.34px]">{{item.PTMKG }} / <span class="font-roboto font-normal text-[18px] text-[#B2B0B2] leading-[32.34px]">{{ item.PTMLB}}</span></p>

                    </li>

            </ul>

        </div>

        <img :src="item.image" alt="" class="">

    </div>

</template>

<style scoped>

</style>