<template>
    <v-container class="interesting-container d-md-flex flex-md-row-reverse">
        <interesting-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import InterestingInfo from '@/components/interesting/interesting-info.vue'

export default {
    name: 'interesting-container',
    components: {
        LeftMenu,
        InterestingInfo
    }
}
</script>

<style lang="scss">
.interesting-container {
}
</style>