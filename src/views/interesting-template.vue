<template>
    <section class="interesting">
        <interesting-container />
    </section>
</template>

<script>
import InterestingContainer from '@/components/interesting/interesting-container.vue'

export default {
    name: 'interesting-template',
    components: {
        InterestingContainer
    }
}
</script>

<style lang="scss">
.interesting {
}
</style>