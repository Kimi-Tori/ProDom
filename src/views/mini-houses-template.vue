<template>
    <section class="mini-houses-template">
        <mini-houses-container />
    </section>
</template>

<script>
import MiniHousesContainer from '@/components/mini-houses/mini-houses-container.vue'

export default {
    name: 'mini-houses-template',
    components: {
        MiniHousesContainer
    }
}
</script>

<style lang="scss">
.mini-houses-template {
}
</style>