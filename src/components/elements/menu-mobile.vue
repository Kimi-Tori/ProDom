<template>
    <div class="menu-modal">
        <v-menu
        transition="scale-transition"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            color="primary"
            v-bind="props"
            >
            Scale Transition
            </v-btn>
        </template>

        <v-list>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'menu-mobile',
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>

<style scoped lang="scss">

</style>