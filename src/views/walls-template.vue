<template>
    <section class="walls">
        <walls-container />
    </section>
</template>

<script>
import WallsContainer from '@/components/walls/walls-container.vue'

export default {
    name: 'walls-template',
    components: {
        WallsContainer
    }
}
</script>

<style lang="scss">
.walls {
}
</style>