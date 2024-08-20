<template>
    <div class="scandinavia-info ml-md-3">
        <h1 class="Roboto-28-700-no-adaptive">Коттеджный поселок «Скандинавия»: жизнь здесь радует!</h1>
        <p class="Roboto-16-400 font-italic mt-3">Республика Крым, Симферопольский район, с. Краснолесье<br /><br />В экологически чистом районе крымского предогорья, у подножья Большой Крымской гряды гор, между Мраморной и Красными пещерами, на территории умиротворения и единения с природой расположен элитный коттеджный поселок «Скандинавия».<br /><br />Горный воздух с пряным вкусом крымского разнотравья, шикарная панорама крымских гор для каждого дома, а также уникальная инфраструктура и яркие дома в скандинавском стиле будут радовать вас и ваших близких долгие годы.<br /><br />Наша компания является отвественным проектировщиком и генеральным подрядчиком строительства коттеджного поселка «Скандинавия». Наш 15-летний опыт в проектировании, строительстве и дизайне частных домов позволил разработать 9 уникальных типовых проектов частных домов и построить идеальные дома для вашей достойной загородной жизни в Крыму. Качество наших домов, проверенное временем, и наша репутация отвественного застройщика позволили воплотить лучшие идеи загородного строительства в жизнь!<br /><br />Представляем нашу карту коттеджного поселка  – выбирайте дом и звоните в наш отдел продаж.</p>
        <button-phone>Отдел продаж:</button-phone>
        <img src="@/assets/scandinavia/scandinavia-img.jpg" class="w-100 mt-3">
        <p class="Roboto-16-400 font-italic mt-3">Почему нами выбран именно скандинавский стиль для строительства коттеджного поселка «Скандинавия»?!<br /><br />Этот стиль — очень популярен и дает множество преимуществ:</p>
        <ul class="mt-3">
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Практичныый</li>
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Яркий</li>
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Функциональный</li>
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Лаконичный</li>
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Уютный</li>
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Натуральный</li>
            <li class="Roboto-16-400 font-italic mt-1 ml-5">Экологичный</li>
        </ul>
        <p class="Roboto-16-400 font-italic mt-3">Кроме того, нам захотелось связать крымскую природу предгорья с функциональностью дома — именно поэтому был выбран скандинавский стиль.<br />Все наши дома имеют не более 2 этажей, что позволяет сохранить панорамность видов природы и функциональность самого дома, в расчет на маленькую или большую семью.<br />Наши планировки — это лучшее решение по максимизации полезности каждого квадратного метра для вас.<br /><br />Мы готовы вас приятного удивить: 9 типов домов на любой вкус и кошелек в ярком скандинавском эко-стиле (дома светлые, уютные, много света и стекла, что позволяет ощутить единение с природой), автономная система водоснабжения, газоснабжения, развитая инфраструктура (дороги, озеленение, детская площадка, магазины), общественный транспорт – все в шаговой доступности.<br /><br />Любите мягкий уют и семейные традиции – тогда наши дома построены именно для вас! Успейте купить дом вашей мечты – первые дома уже готовы (с ноября 2020 года) и ждут счастливые семьи хозяев.<br /><br />В нашем отделе продаж уже готовы договора предварительной продажи – ждем вашего звонка<br /><br />А вот и еще один приятный сюрприз для вас: представляете, от вашего дома до Черного моря можно доехать всего за 20-25 минут, а до столицы Крыма – города Симферополь – за 15-20 минут! Всего 20 - 25 минут – и вам доступны как деловая жизнь и разнообразный шоппинг, так и отдых в любое время года. Присоединяйтесь к нашим счастливым жителям поселка «Скандинавия»!<br /><br />Выбирая между жизнью в городе и загородной жизнью, дайте себе возможсноть жить тихо и комфортно, в релаксе и наслаждении, быть здоровым физически и психически – ведь отсутствие городского шума и суеты, прекрасный пейзаж, радующий глаз, решенные вопросы инфраструктуры это дорогого строит! <br /><br />Уверяем вас — вам понравится жить у нас! Позвольте себе роскошь – жить с удовольствием!<br /><br />Коттеджный поселок «Скандинавия» в северном стиле станет вам родным и теплым на южной территории!</p>
        <h2 class="Roboto-28-700-no-adaptive mt-3">Процесс строительства</h2>
        <slider-template :slide="slide" />
        <h2 class="Roboto-28-700-no-adaptive mt-3">Типы домов</h2>
        <gallery-template :images="images" />
        <button-phone>Отдел продаж:</button-phone>
    </div>
</template>

<script>
import ButtonPhone from '@/components/elements/button-phone.vue'
import SliderTemplate from '@/components/elements/slider-template.vue'
import GalleryTemplate from '@/components/elements/gallery-template.vue'

export default {
    name: 'scandinavia-info',
    components: {
        ButtonPhone,
        SliderTemplate,
        GalleryTemplate
    },
    data() {
        return {
            slide: [
                { src: require('@/assets/scandinavia/scandinavia-img-2.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-3.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-4.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-5.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-6.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-7.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-8.jpg') },
                { src: require('@/assets/scandinavia/scandinavia-img-9.jpg') }
            ],
            images: [
                {
                    src: require('@/assets/scandinavia/scandinavia-img-10.jpg'),
                    type: 'Тип 1',
                    subtitle: 'Одноэтажный жилой дом с навесом для автомобиля'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-11.jpg'),
                    type: 'Тип 2',
                    subtitle: 'Одноэтажный жилой дом с террасой'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-12.jpg'),
                    type: 'Тип 3',
                    subtitle: 'Одноэтажный жилой дом с террасой и гаражом в цоколе'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-13.jpg'),
                    type: 'Тип 4',
                    subtitle: 'Одноэтажный жилой дом с гаражом в цоколе'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-14.jpg'),
                    type: 'Тип 5',
                    subtitle: 'Двухэтажный жилой дом с террасами и гаражом в цоколе'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-15.jpg'),
                    type: 'Тип 6',
                    subtitle: 'Двухэтажный жилой дом с террасами и гаражом'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-16.jpg'),
                    type: 'Тип 7',
                    subtitle: 'Одноэтажный жилой дом'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-17.jpg'),
                    type: 'Тип 8',
                    subtitle: 'Двухэтажный жилой дом с террасой и балконом'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-18.jpg'),
                    type: 'Тип 9 - взо',
                    subtitle: 'Двухэтажный жилой дом с террасой и балконом'
                },
                {
                    src: require('@/assets/scandinavia/scandinavia-img-19.jpg'),
                    type: 'Тип 10 - взо',
                    subtitle: 'Двухэтажный жилой дом с гаражом'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.scandinavia-info {
    @include up($sm) {
        max-width: calc(100% - 300px);
    }
}
</style>