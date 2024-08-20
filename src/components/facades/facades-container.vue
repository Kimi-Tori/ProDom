<template>
    <v-container class="facades-container d-md-flex flex-md-row-reverse">
        <facades-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import FacadesInfo from '@/components/facades/facades-info.vue'

export default {
    name: 'facades-container',
    components: {
        LeftMenu,
        FacadesInfo
    }
}
</script>

<style lang="scss">
.facades-container {
}
</style>