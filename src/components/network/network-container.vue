<template>
    <v-container class="network-container d-md-flex flex-md-row-reverse">
        <network-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import NetworkInfo from '@/components/network/network-info.vue'

export default {
    name: 'network-container',
    components: {
        LeftMenu,
        NetworkInfo
    }
}
</script>

<style lang="scss">
.network-container {
}
</style>