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
    <RouterLink to="/">{{item.text}}</RouterLink>
    </li>
</template>

<style scoped>

</style>