<template>
    <v-container class="ready-made-container d-md-flex flex-md-row-reverse">
        <ready-made-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import ReadyMadeInfo from '@/components/ready-made/ready-made-info.vue'

export default {
    name: 'ready-made-container',
    components: {
        LeftMenu,
        ReadyMadeInfo
    }
}
</script>

<style lang="scss">
.ready-made-container {
}
</style>