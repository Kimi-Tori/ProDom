<template>
    <nav class="menu-mobile">
      <v-container class="d-flex flex-column align-end">
            <v-btn @click="toggleMenu" class="d-lg-none menu-mobile__btn">
              <icon-template name="burger" class="menu-mobile__btn-icon" />
            </v-btn>

            <div class="w-100">
              <ul v-if="items && items.length" :class="showMenu ? 'false' : 'd-none'" class="d-lg-flex flex-column flex-lg-row justify-lg-center w-100 mt-3 mt-md-0">
                <li v-for="item in items" :key="item.name" class="menu-mobile__links mx-2">
                  <router-link :to="{ name: item.name }" class="menu-mobile__links-link Roboto-16-700 text-uppercase color-white">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
      </v-container>
    </nav>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'

export default {
    name: 'menu-mobile',
    components: {
      IconTemplate
    },
    data() {
      return {
        items: [
          {name: 'about-us', title: 'О нас'},
          {name: 'designed', title: 'Проектирование'},
          {name: 'footing', title: 'Строительство'},
          {name: 'home', title: 'Готовые решения'},
          {name: 'home', title: 'Стройка в ипотеку'},
          {name: 'home', title: 'Виллы и особняки'},
          {name: 'home', title: 'Мини-дома'},
          {name: 'home', title: 'Контакты'}
        ],
        showMenu: false
      }
    },
    methods: {
        toggleMenu() {
          this.showMenu = !this.showMenu;
        }
    }
  }
</script>

<style scoped lang="scss">
.menu-mobile {
  background-color: $green-main;

  &__btn {
    background-color: transparent;
    box-shadow: none;

    &:hover {
      .menu-mobile__btn-icon {
        fill: $yellow !important; // Укажите нужный цвет, если используется fill
        // или
        stroke: $yellow !important; // Если используется stroke
      }
    }


    &-icon {
      width: 40px;
      height: 40px;
    }
  }

  &__links {
    list-style-type: none;
    
    &-link {
      white-space: nowrap;

      &:hover {
        color: $yellow;
      }
    }
  }
}
</style>