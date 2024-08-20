<template>
    <div class="contacts-info ml-md-3">
        <h1 class="Roboto-28-700-no-adaptive">Контакты</h1>
        <div class="Roboto-20-700 mt-3">Для наших клиентов<br /><br />Мы готовы дать ответ на любой ваш тематический вопрос – ждем вашего звонка с понедельника по пятницу с 8.00 до 20.00</div>
        <button-phone>Позвонить</button-phone>
        <div class="d-flex justify-center mt-3">
            <v-btn @click="dialog = true" class="contacts-info__btn pa-4">
                <span class="color-white Roboto-24-700">Отправить заявку</span>
            </v-btn>

            <v-dialog v-model="dialog" width="auto">
                <v-card max-width="500">
                    <template v-slot:actions>
                        <form-template v-model:dialog="dialog" />
                    </template>
                </v-card>
            </v-dialog>
        </div>
        <person-template :person="person" class="mt-5" />
        <h5 class="Roboto-16-700 mt-3">Для наших партнёров</h5>
        <h5 class="Roboto-16-700 mt-3">Телефон отдела закупок</h5>
        <button-phone>Позвонить</button-phone>
        <h5 class="Roboto-16-700 mt-3">Для коммерческих предложений</h5>
        <button-email>Почта:</button-email>
    </div>
</template>

<script>
import ButtonPhone from "@/components/elements/button-phone.vue"
import FormTemplate from '@/components/elements/form-template.vue'
import PersonTemplate from '@/components/elements/person-template.vue'
import ButtonEmail from '@/components/elements/button-email.vue'

export default {
    name: 'contacts-info',
    components: {
        ButtonPhone,
        FormTemplate,
        PersonTemplate,
        ButtonEmail
    },
    data() {
        return {
            person: [
                { 
                    src: require('@/assets/contacts/contact-img.jpg'),
                    name: 'Денис Щербаков',
                    text: 'вопросы организации и руководства строительством, строительная экспертиза и технический надзор. Профессиональный инженер-строитель с опытом более 19 лет, в профессиональном портфолио – более 400 реализованных домов различного типа. Является индивидуальным предпринимателем (ИНН 910200130600, ОГРНИП 314910227600335)'
                },
                { 
                    src: require('@/assets/contacts/contact-img-2.jpg'),
                    name: 'Светлана Солдатова',
                    text: 'документальное сопровождение строительства и операций с недвижимостью, разрешительная система, руководитель отдела продаж (работа с клиентами и сопровождение сделок). Дипломированный финансист и юрист, опыт в бизнес-консультировании – более 18 лет'
                },
                { 
                    src: require('@/assets/contacts/contact-img-3.jpg'),
                    name: 'Константин Шаповаленко',
                    text: 'руководитель проектной группы, менеджмент проектов в сфере проектирования и строительства. Опыт работы в сфере проектирования и строительства – более 12 лет'
                },
            ],
            dialog: false
        }
    }
}
</script>

<style lang="scss">
.contacts-info {
    &__btn {
        background-color: $green-main;
        border-radius: 0;
        width: 100%;
        height: auto !important;
    }
}
</style>