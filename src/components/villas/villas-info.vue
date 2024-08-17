<template>
    <div class="villas-info ml-md-3">
        <h1 class="Roboto-28-700-no-adaptive">Виллы и особняки</h1>
        <div class="mt-3">
            <v-btn @click="dialog = true" class="villas-info__btn">
                <span class="color-white">Ваш персональный менеджер</span>
            </v-btn>

            <v-dialog v-model="dialog" width="auto">
                <v-card max-width="500">
                    <template v-slot:actions>
                        <form-template v-model:dialog="dialog" />
                    </template>
                </v-card>
            </v-dialog>
        </div>
        <p class="Roboto-16-400 font-italic mt-3">В настоящее время к нам в компанию «ПроДом» все чаще обращаются клиенты, которые выбирают элитный частный дом класса «Люкс» и «Премиум».<br /><br />У вас большая семья или к вам приезжает много гостей? А, может, вы задумали построить гостевой дом? В любом случае данный вид строительства – для вас!<br /><br />Мы готовы запроектировать и построить уникальный жилой объект, в котором будут учтены все пожелания даже самых привередливых хозяев. Это может быть городской особняк, загородная вилла или даже целый личный жилой комплекс!<br /><br />Только представьте себе: вы – хозяин особняка, в котором есть большие и малые многофункциональные помещения (салоны, гостиные, спальни, ванные, кабинеты, детские, кухни, гардеробные), есть террасы и зоны отдыха, сауны и бассейны, гостевые дома и домики для технического персонала, возможно, есть даже собственный спортзал! Главное – это ваши желания, а пространство найдется, поскольку мы позаботимся об эргономичности и экологичности каждого уголка дома вашей мечты!<br /><br />Итак, что же такое дом класса «Премиум»? Это комфорт и гармония, личная свобода и новое качество жизни, престиж и настоящее наслаждение!</p>
        <button-phone>Заказать индивидуальную консультацию</button-phone>
        <p class="Roboto-16-400 font-italic mt-3">Ждем вашего звонка! И ваша мечта станет реальностью!<br /><br />Конечно, мы запроектируем и построим ваш индивидуальный дом, который полностью отвечает всем вашим запросам! Уникально, качественно и полностью «под ключ».<br /><br />Но позвольте сначала познакомить вас с нашими работами – это позволит вам увидеть наш профессионализм в работе, таланты и безупречный вкус сотрудников нашей команды «ПроДом»!</p>
        <h2 class="Roboto-28-700-no-adaptive mt-5">Объекты</h2>
        <gallery-template :images="images" />
        <p class="Roboto-16-400 font-italic mt-3">Все цены актуальны на дату публикации на сайте. За действующей ценой на день просмотра просим обращаться к нашим специалистам по номеру <a href="tel:+7 978 207 09 39" class="color-green">+7 978 207 09 39</a></p>
        <div class="d-flex justify-center mt-3">
            <v-btn @click="dialog = true" class="villas-info__btn">
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
import ButtonPhone from '@/components/elements/button-phone.vue'
import GalleryTemplate from '@/components/elements/gallery-template.vue'

export default {
    name: 'villas-info',
    components: {
        ButtonPhone,
        GalleryTemplate,
        FormTemplate
    },
    data() {
        return {
            images: [
                {
                    src: require('@/assets/villas/villas-img.jpg'),
                    name: 'Санта-Барбара',
                    style: 'Современный',
                    dimensions: '10х10',
                    floors: '2',
                    square: '200',
                    bedrooms: '4',
                    kitchen: 'Кухня-гостинная 44,1',
                    porch: '-',
                    terrace: '44',
                    garage: 'Отдельно',
                    advantages: 'Бассейн',
                    price: 'Расчет по запросу',
                    benefit: 'можно жить с шиком даже на небольшой площади – а бюджет лучше вложить в бассейн',
                },
                {
                    src: require('@/assets/villas/villas-img-2.jpg'),
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
                    price: 'Расчет по запросу',
                    benefit: 'идеальная планировка, стильное решение для семейной жизни',
                },
                {
                    src: require('@/assets/villas/villas-img-3.jpg'),
                    name: 'Амстердам',
                    style: 'Современный',
                    dimensions: '14,65х18,8',
                    floors: '3',
                    square: '743,2',
                    bedrooms: '12',
                    kitchen: 'Кухня-гостинная 23 на каждом этаже',
                    porch: 'Крыльцо',
                    terrace: '107,7',
                    garage: '-',
                    advantages: '-',
                    price: 'Расчет по запросу',
                    benefit: 'личный дворик на крыше с панорамным видом – подарок к комфортному жилью',
                },
                {
                    src: require('@/assets/villas/villas-img-4.jpg'),
                    name: 'Сонаре',
                    style: 'Средиземноморский',
                    dimensions: '18,6 на 12,6',
                    floors: '2',
                    square: '320 м2',
                    bedrooms: '4',
                    kitchen: '37 м2',
                    porch: '9,1 м2',
                    terrace: '31 м2',
                    garage: 'Бассейн, подземный гараж на две машины',
                    price: 'Расчет по запросу',
                    benefit: 'красиво жить можно и в Крыму! Невероятно стильная тосканская вилла, в которой есть ВСЕ',
                },
                {
                    src: require('@/assets/villas/villas-img-5.jpg'),
                    name: 'Лейпциг',
                    style: 'Классический',
                    dimensions: '13,5 на 11,9',
                    floors: '2 + мансарда',
                    square: '447,3 м2',
                    bedrooms: '3 шт 80 м2',
                    kitchen: '67 м2',
                    porch: '-',
                    terrace: '-',
                    garage: 'цокольный этаж',
                    price: 'Расчет по запросу',
                    benefit: 'в такой вилле живут долго и счастливо, на радость семье и на зависть соседям',
                },
                {
                    src: require('@/assets/villas/villas-img-6.jpg'),
                    name: 'Дели',
                    style: 'Современный',
                    dimensions: '15,4*17,3',
                    floors: '3',
                    square: '501,3',
                    bedrooms: '12',
                    kitchen: 'Кухня-гостинная 28,5 на каждом этаже',
                    porch: 'Крыльцо',
                    terrace: '31,2',
                    garage: 'Отдельно',
                    advantages: '-',
                    price: 'Расчет по запросу',
                    benefit: 'можно жить большой семьей или устроить гостевой дом',
                },
            ],
            dialog: false
        }
    }
}
</script>

<style lang="scss">
.villas-info {
    &__btn {
        background-color: $green-main;
    }
}
</style>