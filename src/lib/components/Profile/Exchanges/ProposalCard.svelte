<script lang="ts">
    let { Offer, ButtonText } =  $props();
</script>

<div class="border p-4 w-full  bg-walnut-dark flex flex-row gap-2 mb-2 last:border-none rounded-sm"> 
    <span class="font-semibold text-walnut-accent text-base">Книга: {Offer.bookOffer.id}</span> 
    <span class="font-semibold text-walnut-accent text-base">{Offer.bookOffer.title}</span> 
    <span class="ml-1 text-walnut-accent text-base">{Offer.UserOffer.city}</span> 
    <span class="text-walnut-accent text-base">Рейтинг: {Offer.UserOffer.rating} ⭐️</span> 

    <!-- <span class="font-semibold text-walnut-dark">{Offer.UserRequest.username}</span> 
    <span class = "ml-12 text-walnut-dark">{Offer.UserRequest.city}</span> 
    <span class="text-sm text-walnut-dark ml-auto">Рейтинг: {Offer.UserRequest.rating} ⭐️</span>  -->

    <button class="ml-auto bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">
        {ButtonText}
    </button>
</div>


<!-- Каждая строка в вариантах для обмена состоит из надписи “Книга” и номер книги в БД,
наименования города владельца книги и указания рейтинга этого участника. Также в правой части
строки отображаются данные по книге пользователя, на которую предлагается совершить обмен:
ФИО автора книги и название. При выборе варианта для обмена пользователь может просмотреть
более подробную информацию по варианту (возможно на раскрывающейся панели) : характеристики
книги, предлагаемой другим участником для обмена. Там же на раскрывающейся панели
расположена кнопка «Меняюсь» (варианты названий «Подтвердить участие», «Согласен
обменяться»). -->
