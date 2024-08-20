<template>
    <v-container class="scandinavia-container d-md-flex flex-md-row-reverse">
        <scandinavia-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import ScandinaviaInfo from '@/components/scandinavia/scandinavia-info.vue'

export default {
    name: 'scandinavia-container',
    components: {
        LeftMenu,
        ScandinaviaInfo
    }
}
</script>

<style lang="scss">
.scandinavia-container {
}
</style>