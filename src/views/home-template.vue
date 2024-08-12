<template>
    <section class="home__template">
        <intro-template />
        <home-container />
    </section>
</template>

<script>
import IntroTemplate from '@/components/home/intro-template.vue'
import HomeContainer from '@/components/home/home-container.vue'

export default {
    name: 'home-template',
    components: {
        IntroTemplate,
        HomeContainer
    }
}
</script>

<style lang="scss">
.home__template {
}
</style>