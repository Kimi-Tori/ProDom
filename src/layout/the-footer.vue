<template>
    <footer class="the-footer py-16">
        <v-container>
            <div class="d-flex flex-column flex-md-row pb-3 pb-md-6">
                <div class="the-footer__container d-flex flex-column mx-md-10">
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
                    <div class="d-flex">
                        <div class="the-footer__modal-window">
                            <v-btn @click="dialog = true" class="the-footer__modal-window__btn mt-3">
                                <span class="Roboto-16-400 color-black">Оставить заявку</span>
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
                    </div>
                </div>
                <div class="the-footer__container d-flex flex-column mt-5 mt-md-0 mx-md-4">
                    <p class="the-footer__container-title Roboto-16-700 text-uppercase pb-3">Навигация</p>
                    <div class="mt-3">
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black" :to="{ name: 'about-us' }">О нас</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'designed' }">Проектирование домов</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'works' }">Наши работы</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'interesting' }">Это интересно</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'contacts' }">Контакты</router-link>
                    </div>
                </div>
                <div class="the-footer__container d-flex flex-column mt-5 mt-md-0 mx-md-4">
                    <p class="the-footer__container-title Roboto-16-700 text-uppercase pb-3">Услуги</p>
                    <div class="mt-3">
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black" :to="{ name: 'turnkey' }">Строительство "под ключ"</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'monolitic' }">Бетонные работы</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'walls' }">Стены</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'roofing' }">Кровельные работы</router-link>
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black mt-3" :to="{ name: 'facades' }">Фасады</router-link>
                    </div>
                </div>
                <div class="the-footer__container d-flex flex-column mt-5 mt-md-0 mx-md-4">
                    <p class="the-footer__container-title Roboto-16-700 text-uppercase pb-3">Информация</p>
                    <div class="mt-3">
                        <router-link class="Roboto-16-400 the-footer__container-links d-block color-black" :to="{ name: 'home' }">Политика конфиденциальности</router-link>
                    </div>
                </div>
            </div>
            <div class="the-footer__copyrate-container d-flex flex-column flex-md-row justify-space-between pt-6 mx-md-4">
                <p class="Roboto-16-400">© 2024 Про Дом. Все права защищены.</p>
                <p class="Roboto-16-400 mt-3 mt-md-0"><router-link class="the-footer__copyrate-container__seo Roboto-16-400 color-black" :to="{ name: 'home' }">Продвижение сайта</router-link> в АРК</p>
            </div>
        </v-container>
    </footer>
</template>

<script>
import FormTemplate from '@/components/elements/form-template.vue'
// import ModalWindow from '@/components/elements/modal-window.vue'

export default {
    name: "the-footer",
    components: {
        FormTemplate
        // ModalWindow
    },
    data () {
      return {
        dialog: false,
      }
    },
};
</script>

<style lang="scss">
.the-footer {
    background-color: $blue-light;
    
    &__modal-window {
        width: 80%;

        &__btn {
            padding: 0 !important;
            box-shadow: none !important;
            height: auto !important;
            background-color: transparent !important;
            text-transform: none !important;

            &:hover > .v-btn__content > span {
                color: $green-main !important;
            }
        }
    }

    &__container {
        @include up($md) {
            width: calc(25% - 20px);
        }

        &-title {
            border-bottom: 1px solid $light-grey-alpha-12;
        }

        &-text {
            &:hover {
                color: $green-main;
            }
        }

        &-links {
            &:hover {
                color: $green-main;
            }
        }
    }

    &__copyrate-container {
        border-top: 1px solid $light-grey-alpha-12;

        &__seo {
            &:hover {
                color: $green-main;
            }
        }
    }
}
</style>