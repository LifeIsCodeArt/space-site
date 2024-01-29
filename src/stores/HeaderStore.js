import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {


    const menuList = ref([

        {
            id:1,
            path:'/',
            text:'Home',
        },

        {
            id:2,
            path:'/about',
            text:'About',
        },

        {
            id:3,
            path:'/',
            text:'Gallery',
        },

        {
            id:4,
            path:'/',
            text:'Shop',
        },

    ])


    return { menuList }
})
