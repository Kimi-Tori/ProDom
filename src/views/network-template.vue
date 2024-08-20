<template>
    <section class="network">
        <network-container />
    </section>
</template>

<script>
import NetworkContainer from '@/components/network/network-container.vue'

export default {
    name: 'network-template',
    components: {
        NetworkContainer
    }
}
</script>

<style lang="scss">
.network {
}
</style>