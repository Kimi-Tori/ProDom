<template>
    <section class="contacts-template">
        <contacts-container />
    </section>
</template>

<script>
import ContactsContainer from '@/components/contacts/contacts-container.vue'

export default {
    name: 'contacts-template',
    components: {
        ContactsContainer
    }
}
</script>

<style lang="scss">
.contacts-template {
}
</style>