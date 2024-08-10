<template>
  <div class="modal-window text-center pa-4 pa-md-0 text-md-right mx-auto ml-md-auto mx-md-0">
    <v-btn @click="dialog = true" class="modal-window__btn">
      <span class="color-dark-green">Оставить заявку</span>
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="500"
      >
        <template v-slot:actions>
          <form-template v-model:dialog="dialog" />
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FormTemplate from '@/components/elements/form-template.vue'

  export default {
    name: 'modal-window',
    components: {
      FormTemplate
    },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped lang="scss">
.modal-window {
  width: 80%;

  &__btn {
    padding: 0;
    box-shadow: none;
    height: auto;
    &:hover {
      color: $green-main;
    }
  }
}
</style>