<script setup>
const props = defineProps({
    item:{
        type: Object,
        default: () => {}
    }
})
</script>


<template>
    <li>
        <RouterLink :to='item.path'>{{item.text}}</RouterLink>
    </li>
</template>

<style scoped>

</style>