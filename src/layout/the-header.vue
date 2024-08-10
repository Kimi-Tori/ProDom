<template>
    <v-container>
        <header class="the-header d-flex flex-column align-center flex-md-row justify-md-center">
            <div class="d-flex flex-column align-center flex-lg-row">
                <img class="the-header__logo" src="@/assets/logo.png" alt="ПроДом" />
                <p class="color-black mt-2 mt-lg-0 ml-lg-10 Roboto-16-400 text-center text-md-left">Шалфейная ул. 1, Симферополь, Крым</p>
            </div>
            <a href="mailto:pro-dom82@mail.ru" target="_balnk" class="color-green mt-2 mt-md-0 ml-md-10 the-header__mail">pro-dom82@mail.ru</a>
            <div>
                <a href="tel:+7(978)207-09-39" target="_balnk" class="color-green mt-2 mt-md-0 ml-md-10 Roboto-24-700 the-header__tel">+7 (978) 207-09-39</a>
                <modal-window />
            </div>
            <!-- <menu-mobile /> -->
        </header>
    </v-container>
</template>
  
<script>
import ModalWindow from '@/components/elements/modal-window.vue';
// import MenuMobile from '@/components/elements/menu-mobile.vue'

export default {
    name: "the-header",
    components: {
        ModalWindow,
        // MenuMobile
    }
};
</script>
  
<style scoped lang="scss">
.the-header {
    &__logo {
        max-width: 130px;
    }

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