<template>
    <div class="button-phone">
        <a href="tel:+79782070939" class="button-phone__btn Roboto-24-700 color-white w-100 text-center d-flex flex-column flex-md-row justify-center align-center pa-2 mt-5"><slot></slot><img src="@/assets/info-block/phone.png" class="mx-2" />  <div class="button-phone__btn-tel">+7 978 207-09-39</div></a>
    </div>
</template>

<script>
export default {
    name: 'button-phone'
}
</script>

<style lang="scss">
.button-phone {
    &__btn {
        background-color: $green-main;
        min-height: 60px;

        &:hover {
            color: $yellow;
        }

        &-tel {
            white-space: nowrap;
        }
    }
}
</style>