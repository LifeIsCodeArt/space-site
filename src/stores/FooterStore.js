import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('headerFooter', () => {


    const socialList = ref([

        {
            id:1,
            text:'Twitter',
        },

        {
            id:2,
            text:'Youtube',
        },

        {
            id:3,
            text:'Instagram',
        },

        {
            id:4,
            text:'Flickr',
        },

        {
            id:5,
            text:'LinkedIn',
        },

        {
            id:6,
            text:'Privacy',
        },

        {
            id:7,
            text:'Policy',
        },

    ])


    return { socialList }
})