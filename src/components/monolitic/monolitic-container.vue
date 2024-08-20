<template>
    <v-container class="monolitic-container d-md-flex flex-md-row-reverse">
        <monolitic-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import MonoliticInfo from '@/components/monolitic/monolitic-info.vue'

export default {
    name: 'monolitic-container',
    components: {
        LeftMenu,
        MonoliticInfo
    }
}
</script>

<style lang="scss">
.monolitic-container {
}
</style>