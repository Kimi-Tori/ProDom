<template>
    <v-container class="villas-container d-md-flex flex-md-row-reverse">
        <villas-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import VillasInfo from '@/components/villas/villas-info.vue'

export default {
    name: 'villas-container',
    components: {
        LeftMenu,
        VillasInfo
    }
}
</script>

<style lang="scss">
.villas-container {
}
</style>