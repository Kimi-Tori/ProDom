<template>
    <v-container class="walls-container d-md-flex flex-md-row-reverse">
        <walls-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import WallsInfo from '@/components/walls/walls-info.vue'

export default {
    name: 'walls-container',
    components: {
        LeftMenu,
        WallsInfo
    }
}
</script>

<style lang="scss">
.walls-container {
}
</style>