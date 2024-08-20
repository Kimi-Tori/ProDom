<template>
    <div class="person-template d-flex flex-wrap justify-center flex-md-nowrap" v-if="person && person.length">
        <div v-for="item in person" :key="item" class="person-template__container my-3">
            <img :src="item.src" class="person-template__container-img">
            <h3 class="mt-5 py-1 px-5">{{ item.name }}</h3>
            <p class="mt-3 py-1 px-5">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'person-template',
    props: {
        person: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.person-template {

    &__container {
        border: 1px solid $grey;
        max-width: 320px;
        width: 100%;

        &:nth-child(2) {
            margin-left: 12px;
            margin-right: 12px;
        }

        &-img {
            max-width: 320px;
            width: 100%;
        }
    }
    

    
}
</style>