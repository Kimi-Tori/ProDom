<template>
    <v-container class="contacts-container d-md-flex flex-md-row-reverse">
        <contacts-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import ContactsInfo from '@/components/contacts/contacts-info.vue'

export default {
    name: 'contacts-container',
    components: {
        LeftMenu,
        ContactsInfo
    }
}
</script>

<style lang="scss">
.contacts-container {
}
</style>