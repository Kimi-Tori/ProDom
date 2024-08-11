<template>
    <div class="intro-template">
        <v-container>
            <h1 class="Roboto-28-700 color-white text-center py-12 text-lg-left">ПРОФЕССИОНАЛЬНЫЕ<br>РЕШЕНИЯ ДЛЯ<br>СТРОИТЕЛЬСТВА</h1>
            <div class="d-flex justify-center mt-md-16">
                <div class="intro-template__icon d-flex flex-column align-center mx-2 mx-md-6">
                    <img class="intro-template__icon-img" src="@/assets/home/home-icon-1.png" />
                    <p class="Roboto-14-700 text-center text-uppercase color-white mt-3">Качественно</p>
                </div>
                <div class="intro-template__icon d-flex flex-column align-center mx-2 mx-md-6">
                    <img class="intro-template__icon-img" src="@/assets/home/home-icon-2.png" />
                    <p class="Roboto-14-700 text-center text-uppercase color-white mt-3">Выгодно</p>
                </div>
                <div class="intro-template__icon d-flex flex-column align-center mx-2 mx-md-6">
                    <img class="intro-template__icon-img" src="@/assets/home/home-icon-3.png" />
                    <p class="Roboto-14-700 text-center text-uppercase color-white mt-3">В срок</p>
                </div>
            </div>
            <div class="d-flex justify-center mt-16">
                <icon-template name="arrow" class="intro-template__arrow" @click="scrollToNextSection" />
            </div>
        </v-container>
    </div>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'

export default {
    name: 'intro-template',
    components: {
        IconTemplate
    },
    methods: {
        scrollToNextSection() {
            // Находим следующий блок, к которому нужно прокрутить
            const nextSection = document.getElementById('next-section'); // Убедитесь, что элемент с этим ID существует на странице
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка к следующему блоку
            }
        }
    }
}
</script>

<style scoped lang="scss">
.intro-template {
    background-image: url(@/assets/home/intro-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    &__icon {

        &-img {
            width: 100%;
            max-width: 60px;

            @include up($md) {
                max-width: max-content;
            }
        }
    }

    &__arrow {
        max-width: 50px;
        max-height: 50px;
        cursor: pointer;
        fill: $white;

        &:hover {
            fill: $green-main !important;
        }
    }
}
</style>