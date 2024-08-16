<template>
    <div class="ready-made-info ml-md-3">
        <h1 class="Roboto-28-700-no-adaptive">Готовые решения</h1>
        <p class="Roboto-16-400 font-italic mt-3">Время – самый драгоценный ресурс современности. Именно поэтому, заботясь о наших клиентах, мы заранее разработали готовые решения удобных, функциональных и качественных домов.<br /><br />Наш более чем 15-летний опыт в проектировании и строительстве позволяет нам разработать оптимальную планировку для повышения функциональности ваших помещений.<br /><br />Мы уже позаботились о вас:</p>
        <ul class="mt-3">
            <li class="Roboto-16-400 font-italic ml-5">каждый квадратный метр становится полезным для дома</li>
            <li class="Roboto-16-400 font-italic ml-5">есть все необходимые жилые и вспомогательные помещения</li>
            <li class="Roboto-16-400 font-italic ml-5">нам известны десятки архитектурных стилей – ваш дом обязательно будт вам нравится и снаружи, и внутри</li>
            <li class="Roboto-16-400 font-italic ml-5">мы используем различные типы строительных технологий (монолит, деревянный каркас, ЛСТК, комбинированное строительство)</li>
            <li class="Roboto-16-400 font-italic ml-5">двор и прилегающая территория – это зона отдыха, поэтому у нас и здесь есть готовые решения.</li>
        </ul>
        <p class="Roboto-16-400 font-italic mt-3">Наши клиенты доверяют нашему профессионализму и все чаще готовы строить частный дом по готовому проекту с фиксированной ценой в рамках договора с гарантией.<br /><br />Представляем готовые проектные решения от нашей команды #ПроДом. В этом разделе мы разместили новинки проектирования 2021 года и приглашаем построить ваш дом по нашему готовому проекту.<br /><br />Выгоды от такого сотрудничества очевидны: вы не тратите время на проектирование, не ждете, пока будет готова смета. Стоимость дома является фиксированной, и вы уже прямо сейчас можете увидеть, каким будет ваш дом мечты! Но если есть желание внести корректировки и свое видение – пожалуйста! Мы готовы взять любой проект за основу и доработать его для вас!<br /><br />Приглашаем вас стать нашими клиентами! Это – достаточно просто сделать: заполняйте форму заказа – и наш менеджер перезвонит вам для назначения встречи!  <br /><br />Пусть мечта о новом доме начнет становиться реальностью прямо сейчас!</p>
        <div class="d-flex justify-center mt-3">
            <v-btn @click="dialog = true" class="ready-made-info__btn">
                <span class="color-white">Заказать</span>
            </v-btn>

            <v-dialog v-model="dialog" width="auto">
                <v-card max-width="500">
                    <template v-slot:actions>
                        <form-template v-model:dialog="dialog" />
                    </template>
                </v-card>
            </v-dialog>
        </div>
        <h2 class="Roboto-28-700-no-adaptive mt-5">Готовые проекты</h2>
        <gallery-template :images="images" />
        <p class="Roboto-16-400 font-italic mt-3">Все цены актуальны на дату публикации на сайте. За действующей ценой на день просмотра просим обращаться к нашим специалистам по номеру <a href="tel:+7 978 207 09 39" class="color-green">+7 978 207 09 39</a></p>
        <div class="d-flex justify-center mt-3">
            <v-btn @click="dialog = true" class="ready-made-info__btn">
                <span class="color-white">Заказать</span>
            </v-btn>

            <v-dialog v-model="dialog" width="auto">
                <v-card max-width="500">
                    <template v-slot:actions>
                        <form-template v-model:dialog="dialog" />
                    </template>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import FormTemplate from '@/components/elements/form-template.vue'
import GalleryTemplate from '@/components/elements/gallery-template.vue'

export default {
    name: 'ready-made-info',
    components: {
        FormTemplate,
        GalleryTemplate
    },
    data() {
        return {
            images: [
                { 
                    src: require('@/assets/ready-made/ready-made-img.jpg'),
                    name: 'Осло',
                    style: 'Современный',
                    dimensions: '10х10',
                    floors: '1',
                    square: '91',
                    bedrooms: '2',
                    kitchen: 'Кухня-гостиная 31,7',
                    porch: 'Крыльцо',
                    terrace: '8,9',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '3 000 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-2.jpg'),
                    name: 'Копенгаген',
                    style: 'Современный',
                    dimensions: '8,5х12',
                    floors: '2 (1+М)',
                    square: '135',
                    bedrooms: '5',
                    kitchen: 'Кухня 13,8',
                    porch: 'Крыльцо',
                    terrace: '8,2',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '6 120 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-3.jpg'),
                    name: 'Аскона',
                    style: 'Барнхаус',
                    dimensions: '4,3*9.0',
                    floors: '1',
                    square: '31,1',
                    bedrooms: '1',
                    kitchen: 'Кухня-гостинная 12,1',
                    porch: 'нет',
                    terrace: 'нет',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '935 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-4.jpg'),
                    name: 'Стокгольм',
                    style: 'Современный',
                    dimensions: '10,7х10,7',
                    floors: '2 (1+М)',
                    square: '133',
                    bedrooms: '3',
                    kitchen: 'Кухня 10,4',
                    porch: 'Крыльцо',
                    terrace: '-',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '6 870 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-5.jpg'),
                    name: 'Берген',
                    style: 'Современный',
                    dimensions: '6,3х7,0',
                    floors: '2',
                    square: '50',
                    bedrooms: '1',
                    kitchen: 'Кухня 5,0',
                    porch: 'нет',
                    terrace: '-',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '1 985 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-6.jpg'),
                    name: 'Ольборг',
                    style: 'Скандинавский',
                    dimensions: '6,0х9,5',
                    floors: '2 (1 +М)',
                    square: '61',
                    bedrooms: '2',
                    kitchen: 'Кухня-гостинная 20,9',
                    porch: 'Крыльцо',
                    terrace: '-',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '3 420 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-7.jpg'),
                    name: 'Хельсинки',
                    style: 'Современный',
                    dimensions: '12,8х12,8',
                    floors: '1',
                    square: '112,4',
                    bedrooms: '3',
                    kitchen: 'Кухня-гостинная 42,0',
                    porch: 'Крыльцо',
                    terrace: '26',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '4 920 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-8.jpg'),
                    name: 'Кампала',
                    style: 'Современный',
                    dimensions: '9,1х10,4',
                    floors: '2',
                    square: '139,5',
                    bedrooms: '4',
                    kitchen: 'Кухня 13,0',
                    porch: 'нет',
                    terrace: '17,4',
                    garage: 'Гараж на 2 авто (8*8,3, 58 кв.м)',
                    advantages: '-',
                    price: '7 420 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-9.jpg'),
                    name: 'Ханой',
                    style: 'Современный',
                    dimensions: '10,4х10,8',
                    floors: '2 (1+М)',
                    square: '136,4',
                    bedrooms: '4',
                    kitchen: 'Кухня 12,9',
                    porch: 'нет',
                    terrace: '13,1',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '6 750 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-10.jpg'),
                    name: 'Афины',
                    style: 'Современный',
                    dimensions: '10,2х13',
                    floors: '1',
                    square: '102,7',
                    bedrooms: '2',
                    kitchen: 'Кухня 11,5',
                    porch: 'нет',
                    terrace: '12,4',
                    garage: '-',
                    advantages: '-',
                    price: '4 000 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-11.jpg'),
                    name: 'Кито',
                    style: 'Классический',
                    dimensions: '13,3х22',
                    floors: '2',
                    square: '586,5',
                    bedrooms: '4',
                    kitchen: 'Кухня-гостинная 47,4',
                    porch: 'нет',
                    terrace: '62,32',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '17 560 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-12.jpg'),
                    name: 'Берн',
                    style: 'Классический',
                    dimensions: '17,0х9,0',
                    floors: '1',
                    square: '133,6',
                    bedrooms: '3',
                    kitchen: 'Кухня 16,2',
                    porch: 'нет',
                    terrace: 'нет',
                    garage: 'Отдельно',
                    advantages: 'Бассейн',
                    price: '4 590 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-13.jpg'),
                    name: 'Бухарест',
                    style: 'Современный',
                    dimensions: '11,8х7,13',
                    floors: '2',
                    square: '122,6',
                    bedrooms: '4',
                    kitchen: 'Кухня 12,6',
                    porch: 'нет',
                    terrace: '15,5',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: '5 050 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-14.jpg'),
                    name: 'Мюнхен',
                    style: 'Авторский немецко-швейцарский',
                    dimensions: '6,5*9,3',
                    floors: '1 или 2 (1+М)',
                    square: '62 (124)',
                    bedrooms: '2(4)',
                    kitchen: 'Кухня-гостиная 20 м2',
                    porch: '-',
                    terrace: '-',
                    garage: 'Может быть устроен в цоколе',
                    advantages: '-',
                    price: '2400000 руб.',
                    dop__price: '3400000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-15.jpg'),
                    name: 'Прага',
                    style: 'Современный',
                    dimensions: '8,9*9,7',
                    floors: '1',
                    square: '57,1',
                    bedrooms: '2',
                    kitchen: '19,3 м2',
                    porch: '9,4 м2',
                    terrace: '-',
                    garage: '-',
                    advantages: '-',
                    price: '2 998 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-16.jpg'),
                    name: 'Будапешт',
                    style: 'Современный',
                    dimensions: '8,4*11,6',
                    floors: '2',
                    square: '184',
                    bedrooms: '4',
                    kitchen: '12,7',
                    porch: '-',
                    terrace: '74 м2 2 этажа',
                    garage: '-  ',
                    advantages: '-',
                    price: '6 821 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-17.jpg'),
                    name: 'Варшава',
                    style: 'Классический',
                    dimensions: '13,9 *11,4',
                    floors: '2',
                    square: '201',
                    bedrooms: '4',
                    kitchen: 'Кухня-Столовая 16.1',
                    porch: '-',
                    terrace: '27,4',
                    garage: '27,4',
                    advantages: '-',
                    price: '9 781 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-18.jpg'),
                    name: 'кофейня Париж',
                    style: 'Современный',
                    dimensions: '8 * 8',
                    floors: '1',
                    square: '40,8',
                    bedrooms: '-',
                    kitchen: '-',
                    porch: '-',
                    terrace: '-',
                    garage: '-',
                    advantages: '-',
                    price: '2 520 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-19.jpg'),
                    name: 'Берлин',
                    style: 'Классический',
                    dimensions: '9,5*9,3',
                    floors: '2',
                    square: '132',
                    bedrooms: '5',
                    kitchen: 'Кухня гостиная 28,1 м2',
                    porch: '11 м2',
                    terrace: '-',
                    garage: '-',
                    advantages: '-',
                    price: '6 185 000 руб.'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-20.jpg'),
                    name: 'Мехико',
                    style: 'Современный',
                    dimensions: '7,5*20',
                    floors: '2',
                    square: '186',
                    bedrooms: '3',
                    kitchen: 'Кухня гостиная 27,9 м2',
                    porch: '-',
                    terrace: '35 м2',
                    garage: '56,25 м2',
                    advantages: '-',
                    price: 'по запросу'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-21.jpg'),
                    name: 'Сантьяго',
                    style: 'Современный',
                    dimensions: '23,2*6,7',
                    floors: '1',
                    square: '107,4',
                    bedrooms: '3',
                    kitchen: '1',
                    porch: '-',
                    terrace: '8,7 м2',
                    garage: '-',
                    advantages: '-',
                    price: 'по запросу'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-22.jpg'),
                    name: 'Кейптаун',
                    style: 'Современный',
                    dimensions: '19,45*14,15',
                    floors: '1',
                    square: '113,7',
                    bedrooms: '-',
                    kitchen: '-',
                    porch: '-',
                    terrace: '-',
                    garage: '51,9 м2',
                    advantages: 'Набор различных помещений',
                    price: 'по запросу'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-23.jpg'),
                    name: 'Триполи',
                    style: 'Современный',
                    dimensions: '19,4*8,5',
                    floors: '2',
                    square: '209',
                    bedrooms: '7',
                    kitchen: '-',
                    porch: '-',
                    terrace: '7,9 м2',
                    garage: '-',
                    advantages: '-',
                    price: 'по запросу'
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-24.jpg'),
                    name: 'Монпелье',
                    style: 'Европейский',
                    dimensions: '8,3*12,5',
                    floors: '2',
                    square: '122 м2',
                    bedrooms: '2 шт 26,3м',
                    kitchen: '14м',
                    porch: '4,5 м2',
                    terrace: '15м2',
                    garage: '22,4 м2',
                    benefit: 'уютный и доступный в реализации',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-25.jpg'),
                    name: 'Грац',
                    style: 'Европейский',
                    dimensions: '16,5 на 10,6',
                    floors: '1',
                    square: '193 м2',
                    bedrooms: '2 шт 37 м2',
                    kitchen: '44,2 м2',
                    porch: '2 м2',
                    terrace: '19,8м2',
                    garage: 'цокольный гараж 70 м2',
                    benefit: 'стильный, удобный и лаконичный',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-26.jpg'),
                    name: 'Измир',
                    style: 'Минимализм',
                    dimensions: '15 на 7',
                    floors: '1',
                    square: '176 м2',
                    bedrooms: '3 спальни 36 м2',
                    kitchen: '20,1 м2',
                    porch: '4,4 м2',
                    terrace: '40 м2',
                    garage: 'цокольный гараж с мастерскими и сауной',
                    benefit: 'просто, комфортно и выгодно',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-27.jpg'),
                    name: 'Калгари',
                    style: 'Европейский',
                    dimensions: '13,8 на 14,4',
                    floors: '1',
                    square: '144,1 м2',
                    bedrooms: '3 шт 52,9 м2',
                    kitchen: '10,9 м2',
                    porch: '6 м2',
                    terrace: '18,5 м2',
                    garage: 'нет',
                    benefit: 'оптимальные планировка, площадь и бюджет',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-28.jpg'),
                    name: 'Неаполь',
                    style: 'Черноморский (Средиземноморский)',
                    dimensions: '9,5 на 7,8',
                    floors: '2',
                    square: '106,1 м2',
                    bedrooms: '4 шт 36 м2',
                    kitchen: '20 м2',
                    porch: '3м2',
                    terrace: 'нет',
                    garage: 'нет',
                    benefit: 'много спален за небольшой бюджет',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-29.jpg'),
                    name: 'Делемон',
                    style: 'Фахферк',
                    dimensions: '15 на 11',
                    floors: '2',
                    square: '285м2',
                    bedrooms: '4 спальни 78 м2',
                    kitchen: '42 м2',
                    porch: 'нет',
                    terrace: '18 м2',
                    garage: 'подземный на 2авто',
                    benefit: 'идеальная планировка, стильное решение для семейной жизни',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-30.jpg'),
                    name: 'Бремен',
                    style: 'Современный',
                    dimensions: '7,4 на 8,9м',
                    floors: '2',
                    square: '106 м2',
                    bedrooms: '2шт 28 м2',
                    kitchen: '33 м2',
                    porch: 'нет',
                    terrace: '17,2 м2',
                    canopy: 'на 1 машину',
                    benefit: 'стильный дом, в котором уютно и одному, и с семьей',
                },
                { 
                    src: require('@/assets/ready-made/ready-made-img-31.jpg'),
                    name: 'Лахти',
                    style: 'Городской',
                    dimensions: '7,2 на 8,8',
                    floors: '2',
                    square: 'до 97 м2',
                    bedrooms: '3шт 45 м2',
                    kitchen: '14 м2',
                    porch: '3 м2',
                    terrace: 'нет',
                    garage: 'нет',
                    benefit: 'недорогой дом большой площади на маленьком участке',
                }
            ],
            dialog: false,
        };
    },
}
</script>

<style lang="scss">
.ready-made-info {
    &__btn {
        background-color: $green-main;
    }
}
</style>