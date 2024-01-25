import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {


    const menuList = ref([

        {
            id:1,
            text:'Home',
        },

        {
            id:2,
            text:'About',
        },

        {
            id:3,
            text:'Gallery',
        },

        {
            id:4,
            text:'Shop',
        },

    ])


    return { menuList }
})
