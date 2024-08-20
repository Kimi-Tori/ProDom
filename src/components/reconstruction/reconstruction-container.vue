<template>
    <v-container class="reconstruction-container d-md-flex flex-md-row-reverse">\
        <reconstruction-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import ReconstructionInfo from '@/components/reconstruction/reconstruction-info.vue'

export default {
    name: 'reconstruction-container',
    components: {
        LeftMenu,
        ReconstructionInfo
    }
}
</script>

<style lang="scss">
.reconstruction-container {
}
</style>