<template>
    <v-container class="designed-container d-md-flex flex-md-row-reverse">
        <designed-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import DesignedInfo from '@/components/designed/designed-info.vue'

export default {
    name: 'designed-container',
    components: {
        LeftMenu,
        DesignedInfo
    }
}
</script>

<style lang="scss">
.designed-container {
}
</style>