<template>
    <section class="ready-made-template">
        <ready-made-container />
    </section>
</template>

<script>
import ReadyMadeContainer from '@/components/ready-made/ready-made-container.vue'

export default {
    name: 'ready-made-template',
    components: {
        ReadyMadeContainer
    }
}
</script>

<style lang="scss">
.ready-made-template {
}
</style>