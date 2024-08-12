<template>
    <v-container class="footing-container d-md-flex flex-md-row-reverse">
        <footing-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import FootingInfo from '@/components/footing/footing-info.vue'

export default {
    name: 'footing-container',
    components: {
        LeftMenu,
        FootingInfo
    }
}
</script>

<style lang="scss">
.footing-container {
}
</style>