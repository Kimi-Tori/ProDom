<template>
    <div v-if='slide && slide.length' class="slider-template position-relative">
        <swiper :navigation="true" :pagination="{clickable: true}" :modules="modules" class="mySwiper">
            <swiper-slide v-for='item in slide' :key='item' class='pa-12'>
                <img :src="item.src" class="w-100" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
    name: 'slider-template',
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [ Navigation, Pagination, Autoplay ],
        };
    },
    props: {
        slide: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.slider-template {
}
.swiper-wrapper {
    align-items: center;
}
</style>