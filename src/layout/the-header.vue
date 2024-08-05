<template>
    <v-container>
        <header class="the-header">
            <img src="@/assets/logo.png" alt="ПроДом">
            <p class="color-black mt-2 Roboto-16-400">Шалфейная ул. 1, Симферополь, Крым</p>
            <a href="mailto:pro-dom82@mail.ru" target="_balnk" class="color-green mt-2 the-header__mail">pro-dom82@mail.ru</a>
            <a href="tel:+7(978)207-09-39" target="_balnk" class="color-green mt-2 Roboto-24-700 the-header__tel">+7 (978) 207-09-39</a>
            <modal-window />
        </header>
    </v-container>
</template>
  
<script>
import ModalWindow from '@/components/elements/modal-window.vue';

export default {
    data () {
      return {
        dialog: false,
      }
    },
    name: "the-header",
    components: {
        ModalWindow
    }
};
</script>
  
<style scoped lang="scss">
.the-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__mail {
        &:hover {
            color: $green-dark;
        }
    }

    &__tel {
        &:hover {
            color: $green-dark;
        }
    }
}
</style>