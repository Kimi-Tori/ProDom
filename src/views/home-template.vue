<template>
    <section class="home__template">
        <intro-template />
    </section>
</template>

<script>
import IntroTemplate from '@/components/home/intro-template.vue'
export default {
    name: 'home-template',
    components: {
        IntroTemplate
    }
}
</script>

<style lang="scss">
.home__template {
}
</style>