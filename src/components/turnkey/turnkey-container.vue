<template>
    <v-container class="turnkey-container d-md-flex flex-md-row-reverse">
        <turnkey-info />
        <left-menu />
    </v-container>
</template>

<script>
import TurnkeyInfo from '@/components/turnkey/turnkey-info.vue'
import LeftMenu from '@/components/home/left-menu.vue'

export default {
    name: 'turnkey-container',
    components: {
        TurnkeyInfo,
        LeftMenu
    }
}
</script>

<style lang="scss">
.turnkey-container {
}
</style>