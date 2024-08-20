<template>
    <div class="button-email">
        <a href="mailto:+79782070939" class="button-email__btn Roboto-24-700 color-white w-100 text-center d-flex flex-column flex-md-row justify-center align-center pa-2 mt-5"><slot></slot><div class="button-email__btn-item ml-2">assistant-prodom@mail.ru</div></a>
    </div>
</template>

<script>
export default {
    name: 'button-email'
}
</script>

<style lang="scss">
.button-email {
    &__btn {
        background-color: $green-main;
        min-height: 60px;

        &:hover {
            color: $yellow;
        }

        &-item {
            white-space: nowrap;
        }
    }
}
</style>