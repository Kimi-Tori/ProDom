<template>
    <section class="mortgage-template">
        <mortgage-container />
    </section>
</template>

<script>
import MortgageContainer from '@/components/mortgage/mortgage-container.vue'
export default {
    name: 'mortgage-template',
    components: {
        MortgageContainer
    }
}
</script>

<style lang="scss">
.mortgage-template {
}
</style>