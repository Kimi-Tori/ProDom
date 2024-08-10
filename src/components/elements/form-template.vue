<template>
    <form action="action.php" class="form-template">
        <v-text-field class="form-template__input" label="Имя" variant="outlined"></v-text-field>
        <v-text-field class="form-template__input" label="Телефон" variant="outlined"></v-text-field>
        <v-checkbox hide-details label="даю согласие на обработку персональных данных"></v-checkbox>
        <v-textarea class="mt-4" label="Сообщение" variant="outlined"></v-textarea>
        <v-btn
            type="submit"
            text="Отправить заявку"
            class="form-template__btn pa-5"
            @click="closeDialog"
          ></v-btn>
    </form>
</template>

<script>
export default {
    name: 'form-template',
    props: {
        dialog: {
            type: Boolean,
            required: true
        }
    },
    methods: {
    closeDialog() {
        this.$emit('update:dialog', false);
    }
  }
}
</script>

<style lang="scss">
.form-template {
    min-width: 100%;

    &__input {
        width: 100%;
    }

    &__btn {
        background-color: $green-main;
        width: 100%;
        text-align: center;
        color: $white;
        height: 100% !important;
    }
}
</style>