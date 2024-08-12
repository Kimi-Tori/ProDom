<template>
    <section class="about-us">
        <about-us-container />
    </section>
</template>

<script>
import AboutUsContainer from '@/components/about-us/about-us-container.vue'

export default {
    name: 'about-us',
    components: {
        AboutUsContainer
    }
}
</script>

<style lang="scss">
.about-us {}
</style>