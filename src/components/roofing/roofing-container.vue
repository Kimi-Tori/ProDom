<template>
    <v-container class="roofing-container d-md-flex flex-md-row-reverse">
        <roofing-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import RoofingInfo from '@/components/roofing/roofing-info.vue'

export default {
    name: 'roofing-container',
    components: {
        LeftMenu,
        RoofingInfo
    }
}
</script>

<style lang="scss">
.roofing-container {
}
</style>