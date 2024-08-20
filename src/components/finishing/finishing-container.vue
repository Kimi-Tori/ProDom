<template>
    <v-container class="finishing-container d-md-flex flex-md-row-reverse">
        <finishing-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import FinishingInfo from '@/components/finishing/finishing-info.vue'

export default {
    name: 'finishing-container',
    components: {
        LeftMenu,
        FinishingInfo
    }
}
</script>

<style lang="scss">
.finishing-container {
}
</style>