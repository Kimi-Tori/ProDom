<template>
    <div class="network-info ml-md-3">
        <h1 class="Roboto-28-700-no-adaptive">Инженерные сети (электричество, вода, отопление)</h1>
        <p class="Roboto-16-400 font-italic mt-3">
            <img src="@/assets/network/network-img.jpg" align="right" vspace="5" hspace="5" class="network-info__img ml-sm-5">
            В каждом доме при его строительстве есть потребность в энергоресурсах и системах обеспечения дома энергоносителями, чтобы жизнь была комфортной, – все это носит название «инженерные сети дома». Наша команда «ПроДом» готова осуществить проектирование и подключение всех инженерных сетей в ваш дом. Давайте разберемся в подробностях данного этапа строительства.<br /><br />Для комфортной жизни в доме в нем необходимо оборудовать качественные инженерные сети, в состав которых входит:
        </p>
        <p class="Roboto-16-400 font-italic mt-3">
            <img src="@/assets/network/network-img-2.jpg" align="right" vspace="5" hspace="5" class="network-info__img ml-sm-5">
            <ul class="mt-3">
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Электрификация</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Водоснабжение</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Канализация</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Газификация</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Отопление</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Вентиляция</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Кондиционирование</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Видеонаблюдение</li>
                <li class="Roboto-16-400 font-italic ml-5 mt-1">Системы «умный дом»</li>
            </ul>
        </p>
        <p class="Roboto-16-400 font-italic mt-3">
            <img src="@/assets/network/network-img-3.jpg" align="left" vspace="5" hspace="5" class="network-info__img mr-sm-5">
            Для каждого из направлений мы выполняем профессиональное проектирование, согласовываем проект с соответствующей структурой, получаем разрешительные документы, осуществляет монтажные и пуско-наладочные работы. После чего сетями могут пользоваться наши клиенты. Данные виды услуг и работ возможны как на территории Крыма, так и в городе Севастополе.
        </p>
        <p class="Roboto-16-400 font-italic mt-3">Отдельное внимание мы уделяем не только основному дому, но и всей прилегающей территории: установка бассейна, организация прудов и речек на территории участка, установка фонтанов, поливные системы, наружное освещение – все это сделает жизнь в вашем доме максимально комфортной.</p>
        <p class="Roboto-16-400 font-italic mt-3">
            <img src="@/assets/network/network-img-4.jpg" align="right" vspace="5" hspace="5" class="network-info__img ml-sm-5">
            Кроме того, наша команда «<b>ПроДом</b>» готова установить надежные системы видеонаблюдения для обеспечения безопасности вашего дома и личной безопасности проживающих.<br /><br />И, идя в ногу со временем, мы готовы оборудовать ваш дом «умными технологиями» для обеспечения безопасной и технологически совершенной жизни – доступ в дом, зональное освещение, безопасность – за всем эти вы сможете наблюдать прямо с мобильных устройств.<br /><br />Закажите оборудование инженерных сетей вашего дома нашей команды «<b>ПроДом</b>» - и пусть ваша жизнь станет комфортной и безопасной!
        </p>
        <button-phone>Позвонить:</button-phone>
    </div>
</template>

<script>
import ButtonPhone from '@/components/elements/button-phone.vue'

export default {
    name: 'network-info',
    components: {
        ButtonPhone
    }
}
</script>

<style lang="scss">
.network-info {
    &__img {
        width: 100%;

        @include up($sm) {
            max-width: 300px;
        }
    }
}
</style>