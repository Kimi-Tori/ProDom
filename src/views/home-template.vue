<template>
    <section class="home__template">
        <intro-template />
        <flex-container />
    </section>
</template>

<script>
import IntroTemplate from '@/components/home/intro-template.vue'
import FlexContainer from '@/components/home/flex-container.vue'

export default {
    name: 'home-template',
    components: {
        IntroTemplate,
        FlexContainer
    }
}
</script>

<style lang="scss">
.home__template {
}
</style>