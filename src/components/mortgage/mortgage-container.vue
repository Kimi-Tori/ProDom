<template>
    <v-container class="mortgage-container d-md-flex flex-md-row-reverse">
        <mortgage-info />
        <left-menu />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import MortgageInfo from '@/components/mortgage/mortgage-info.vue'

export default {
    name: 'mortgage-container',
    components: {
        LeftMenu,
        MortgageInfo
    }
}
</script>

