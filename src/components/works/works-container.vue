<template>
    <v-container class="works-container d-md-flex flex-md-row-reverse">
        <works-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import WorksInfo from '@/components/works/works-info.vue'

export default {
    name: 'works-container',
    components: {
        LeftMenu,
        WorksInfo
    }
}
</script>

<style lang="scss">
.works-container {
}
</style>