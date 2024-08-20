<template>
    <section class="works-template">
        <works-container />
    </section>
</template>

<script>
import WorksContainer from '@/components/works/works-container.vue'

export default {
    name: 'works-template',
    components: {
        WorksContainer
    }
}
</script>

<style lang="scss">
.works-template {
}
</style>