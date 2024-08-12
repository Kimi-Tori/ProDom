<template>
    <v-container class="home-container d-md-flex flex-md-row-reverse" id="next-section">
        <info-block />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import InfoBlock from '@/components/home/info-block.vue'

export default {
    name: 'home-container',
    components: {
        LeftMenu,
        InfoBlock
    }
}
</script>

<style lang="scss">
.home-container {
}
</style>