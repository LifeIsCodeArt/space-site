import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homeStore', () => {


    const shipsList = ref([


        {
            id:1,
            text:'Falcon Heavy',
        },

        {
            id:2,
            text:'Falcon 9',
        },

        {
            id:3,
            text:'Dragon',
        },

    ])

    const shipDetailsList = ref([

        {
            id:1,
            label:'Falcon Heavy Overview',
            image:'../src/assets/images/homepage/carousel-image-1.png',
            heightM: '70 m',
            heightFT: '229.6 ft',
            diameterM: '12.2 m',
            diameterFT: '39.9 ft',
            massKG: '1,420,788 kg',
            massLB: '3,125,735 lb',
            PTLKG: '63,800 kg',
            PTLLB: '140,660 lb',
            GTOKG: '26,700 kg',
            GTOLB: '58,860 lb',
            PTMKG: '16,800 kg',
            PTMLB: '37,040 lb',
        },

        {
            id:2,
            label:'Falcon 9',
            image:'../src/assets/images/homepage/carousel-image-1.png',
            heightM: '232 m',
            heightFT: '229.6 ft',
            diameterM: '12.2 m',
            diameterFT: '39.9 ft',
            massKG: '1,420,788 kg',
            massLB: '3,125,735 lb',
            PTLKG: '63,800 kg',
            PTLLB: '140,660 lb',
            GTOKG: '26,700 kg',
            GTOLB: '58,860 lb',
            PTMKG: '16,800 kg',
            PTMLB: '37,040 lb'
        },

        {
            id:3,
            label:'Dragon',
            image:'../src/assets/images/homepage/carousel-image-1.png',
            heightM: '323 m',
            heightFT: '229.6 ft',
            diameterM: '12.2 m',
            diameterFT: '39.9 ft',
            massKG: '1,420,788 kg',
            massLB: '3,125,735 lb',
            PTLKG: '63,800 kg',
            PTLLB: '140,660 lb',
            GTOKG: '26,700 kg',
            GTOLB: '58,860 lb',
            PTMKG: '16,800 kg',
            PTMLB: '37,040 lb'
        }

    ])


    return { shipsList, shipDetailsList }
})
