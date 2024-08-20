<template>
    <div class="left-menu pa-4 d-flex flex-column align-center">
        <div>
            <router-link v-for="item in items" :key="item.name" :to="{ name: item.name }" targer="_blank" class="left-menu__link Roboto-16-700 text-uppercase color-black d-block mt-3">{{ item.title }}</router-link>
        </div>
        <img src="@/assets/left-menu/banner-img.jpg" class="mt-8" />
    </div>
</template>

<script>
export default {
    name: 'left-menu',
    data() {
      return {
        items: [
          {name: 'works', title: 'Наши работы'},
          {name: 'turnkey', title: 'Строительство домов «под ключ»'},
          {name: 'monolitic', title: 'Бетонные (монолитные) работы'},
          {name: 'walls', title: 'Стены'},
          {name: 'roofing', title: 'Кровельные работы'},
          {name: 'facades', title: 'Фасады'},
          {name: 'network', title: 'Инженерные сети (электричество, вода, отопление)'},
          {name: 'finishing', title: 'Внутренняя отделка'},
          {name: 'reconstruction', title: 'Реконструкция домов'},
          {name: 'scandinavia', title: 'КП «Скандинавия»'},
          {name: 'interesting', title: 'Это интересно'},
        ],
        showMenu: false
      }
    },
}
</script>

<style lang="scss">
.left-menu {
    width: 100%;
    background-color: $grey;

    @include up($md) {
        max-width: 300px;
        min-width: 300px;
    }

    &__link {
        border-bottom: 2px solid $green-main;

        &:hover {
            color: $green-main;
        }
    }
}
</style>