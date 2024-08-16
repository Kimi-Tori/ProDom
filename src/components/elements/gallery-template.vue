<template>
    <div class="gallery-template mt-5" >
        <div v-if='images && images.length' class="d-flex flex-column align-center d-md-block">
            <div v-for="item in images" :key="item" class="d-md-flex mt-10">
                <div class="gallery-template__container pa-2 d-flex">
                    <img v-if="item.src && item.src.length" :src="item.src" class="gallery-template__container-img w-100">
                </div>
                <div class="gallery-template__info ml-3 w-md-100">
                    <div v-if="item.name && item.name.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Название</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.name }}</p>
                    </div>
                    <div v-if="item.style && item.style.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Стиль</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.style }}</p>
                    </div>
                    <div v-if="item.dimensions && item.dimensions.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Габариты</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.dimensions }}</p>
                    </div>
                    <div v-if="item.floors && item.floors.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Этажность</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.floors }}</p>
                    </div>
                    <div v-if="item.square && item.square.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Общая площадь</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.square }}</p>
                    </div>
                    <div v-if="item.bedrooms && item.bedrooms.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Спальни</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.bedrooms }}</p>
                    </div>
                    <div v-if="item.kitchen && item.kitchen.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Тип кухня</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.kitchen }}</p>
                    </div>
                    <div v-if="item.porch && item.porch.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Крыльцо</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.porch }}</p>
                    </div>
                    <div v-if="item.terrace && item.terrace.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Терраса</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.terrace }}</p>
                    </div>
                    <div v-if="item.garage && item.garage.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Гараж/ навес</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.garage }}</p>
                    </div>
                    <div v-if="item.canopy && item.canopy.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Навес</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.canopy }}</p>
                    </div>
                    <div v-if="item.advantages && item.advantages.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Преимущества</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.advantages }}</p>
                    </div>
                    <div v-if="item.price && item.price.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Цена</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.price }}</p>
                    </div>
                    <div v-if="item.dop__price && item.dop__price.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Цена с мансардой</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.dop__price }}</p>
                    </div>
                    <div v-if="item.benefit && item.benefit.length" class="gallery-template__info-container d-flex justify-space-between py-1">
                        <p class="gallery-template__info-container__title Roboto-14-400">Ваша выгода</p>
                        <p class="text-right ml-3 Roboto-14-700-no-adaptive">{{ item.benefit }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'gallery-template',
    components: {
    },
    props: {
        images: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.gallery-template {
    &__container {
        background-color: $green-main;
        width: fit-content;
        height: fit-content;

        &-img {
            max-width: 500px;
            width: 100%;
        }
    }

    &__info {
        @include up($md) {
            max-width: 350px;
        }

        &-container {
            border-bottom: 1px solid $grey;

            &__title {
                white-space: nowrap;
            }
        }
    }
}
</style>