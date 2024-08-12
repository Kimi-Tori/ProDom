<template>
    <v-container class="about-us-container d-md-flex flex-md-row-reverse">
        <about-us-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import AboutUsInfo from '@/components/about-us/about-us-info.vue'

export default {
    name: 'home-container',
    components: {
        LeftMenu,
        AboutUsInfo
    }
}
</script>

<style lang="scss">
.about-us-container {
}
</style>