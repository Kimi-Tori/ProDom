<template>
    <footer class="the-footer">
        <v-container>
            <div class="d-flex flex-column flex-md-row">
                <div class="the-footer__container d-flex flex-column">
                    <p class="the-footer__container-title Roboto-16-700 text-uppercase pb-3">Контакты</p>
                    <div class="d-flex mt-3">
                        <a href="tel:+79782070939" class="the-footer__container-text Roboto-16-700 color-black">+7 (978) 207-09-39</a>
                    </div>
                    <div class="d-flex mt-3">
                        <a href="mailto:pro-dom82@mail.ru" class="the-footer__container-text Roboto-16-400 color-black">pro-dom82@mail.ru</a>
                    </div>
                    <div class="d-flex mt-3">
                        <p class="Roboto-16-400 color-black">Шалфейная ул. 1, Симферополь, Крым</p>
                    </div>
                    <!-- <div class="d-flex">
                        <modal-window />
                    </div> -->
                </div>
            </div>
        </v-container>
    </footer>
</template>

<script>
// import ModalWindow from '@/components/elements/modal-window.vue'

export default {
    name: "the-footer",
    components: {
        // ModalWindow
    }
};
</script>

<style lang="scss">
.the-footer {
    background-color: $blue-light;

    &__container {
        max-width: 320px;

        &-title {
            border-bottom: 1px solid $light-grey-alpha-12;
        }

        &-text {
            &:hover {
                color: $green-main;
            }
        }
    }
}
</style>