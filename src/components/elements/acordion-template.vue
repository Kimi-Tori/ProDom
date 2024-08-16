<template>
    <div class="acordion-template">
        <v-expansion-panels v-if="accordion && accordion.length">
            <v-expansion-panel v-for="(item, index) in accordion" :key="index" class="mt-3">
                <v-expansion-panel-title class="Roboto-16-700">{{ item.title }}</v-expansion-panel-title>
                <v-expansion-panel-text v-for="(contentItem, idx) in item.content" :key="idx">
                <h2 v-if="contentItem.title && contentItem.title.length" class="Roboto-24-700 mt-3">{{ contentItem.title }}</h2>
                <p v-if="contentItem.text && contentItem.text.length" class="Roboto-16-400 mt-3">{{ contentItem.text }}</p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: 'acordion-template',
    props: {
        accordion: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.acordion-template {
}
</style>