<script lang="ts">
    let {ExchangeCard} =  $props();


    console.log(ExchangeCard);

    let isConfirmed = $state(false);

function Confirm() {
    isConfirmed = true;
}
</script>

<div class="p-2 w-full bg-walnut-dark flex flex-row items-center justify-center rounded-md">
    <div class="flex flex-col items-center justify-center mr-4">
        <h1 class="text-walnut-accent">Отдаю</h1>
        <h1>{ExchangeCard.exchange.bookOffer.author}</h1>
        <h1>{ExchangeCard.exchange.bookOffer.title}</h1>
        <h1>{ExchangeCard.exchange.bookOffer.data}</h1> 
        <!-- Поменять на date -->
    </div>
    <div class="flex flex-col items-center justify-center">
        <div class="border-l-2 border-walnut-accent w-1 h-70 mb-5"></div>
        <!-- <button class="ml-auto bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">Обмен подтверждён</button> -->
        {#if isConfirmed == false}
            <button onclick={Confirm} class="ml-auto bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">Подтвердить обмен</button>
        {:else}
            <h1 class="font-medium transition-colors">{ExchangeCard.OfferStatus}</h1>
        {/if}
    </div>
    <div class="flex flex-col items-center justify-center ml-4">
        <!-- <h1 class="text-walnut-accent">Получаю</h1>
        <h1>{bookRequest.author}</h1>
        <h1>{bookRequest.title}</h1>
        <h1>{bookRequest.data}</h1>   -->
                <!-- Поменять на date -->
    </div>
</div>



