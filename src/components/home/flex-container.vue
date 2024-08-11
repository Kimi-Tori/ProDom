<template>
    <v-container class="flex-container d-md-flex" id="next-section">
        <left-menu />
        <info-block />
    </v-container>
</template>

<script>
import LeftMenu from '@/components/home/left-menu.vue'
import InfoBlock from '@/components/home/info-block.vue'

export default {
    name: 'flex-container',
    components: {
        LeftMenu,
        InfoBlock
    }
}
</script>