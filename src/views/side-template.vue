<template>
    <section class="side-template">
        <first-component class="side-template__first-component font-light colo-white" />
    </section>
</template>

<script>
import FirstComponent from '@/components/first-component.vue'
export default {
    name: 'side-template',

    components: {
        FirstComponent
    }
}
</script>

<style lang="scss">
.side-template {
    &__first-component {}
}
</style>