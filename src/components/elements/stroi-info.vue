<template>
    <div v-if="info && info.length">
        <div v-for="item in info" :key="item" class="stroi-info d-md-flex mt-5 pt-5">
            <div v-if="item.src && item.src.length" class="stroi-info__container d-flex align-center justify-center pa-2">
                <img :src="item.src" class="stroi-info__container-img" />
            </div>
            <div class="ml-md-5">
                <h2 v-if="item.title && item.title.length" class="Roboto-28-700-no-adaptive">{{ item.title }}</h2>
                <p v-if="item.subtitle && item.subtitle.length" class="Roboto-16-400 font-italic mt-3">{{ item.subtitle }}</p>
            </div>
        </div>
    </div>
    
    <div >
        
    </div>
</template>

<script>
export default {
    name: 'stroi-info',
    props: {
        info: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.stroi-info {
    border-top: 2px solid $grey;

    &:first-child {
        margin-top: 0 !important;
        padding-top: 0 !important;
        border: none;
    }

    &__container {
        width: 100%;
        background-color: $green-main;
        height: 100%;

        @include up($sm) {
            min-width: 300px;
            max-width: calc(300px - 16px);
        }

        @include up($md) {
            width: 300px;
        }

        &-img {
            width: 100%;
            height: fit-content;
        }
    }
}
</style>