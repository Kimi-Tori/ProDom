<template>
    <v-container class="mini-houses-container d-md-flex flex-md-row-reverse">
        <mini-houses-info />
        <left-menu />
    </v-container>
</template>

<script>
import MiniHousesInfo from '@/components/mini-houses/mini-houses-info.vue'
import LeftMenu from '@/components/home/left-menu.vue'

export default {
    name: 'mini-houses-container',
    components: {
        MiniHousesInfo,
        LeftMenu
    }
}
</script>