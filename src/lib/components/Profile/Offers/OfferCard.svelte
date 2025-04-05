<script lang="ts">
    let { ExchangeCard } = $props();
    
    let isConfirmed = $state(false);

    function Confirm() {
        isConfirmed = true;
    }

</script>


<div class="border border-gray-200 px-4 py-2 bg-gray-100 flex items-stretch justify-between max-w-lg mx-auto">
    <div class="flex-1 mr-2 bg-gray-500 rounded-md px-2 py-1">
        Мне
        <h1 class="font-medium transition-colors">{ExchangeCard.Genres}</h1>
        <h1 class="font-medium transition-colors">{ExchangeCard.Status2}</h1>
    </div>
    <div class="flex-1 ml-2 bg-gray-500 text-white rounded-md px-2 py-1">
        Я
        <h1 class="font-medium transition-colors">{ExchangeCard.Book.title}</h1>
        <h1 class="font-medium transition-colors">{ExchangeCard.Book.author}</h1>
        <h1 class="font-medium transition-colors">{ExchangeCard.Book.data}</h1>

        {#if isConfirmed == false}
            <button onclick={Confirm} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Подтвердить обмен</button>
        {:else}
            <h1 class="font-medium transition-colors">Обмен подтверждён</h1>
        {/if}
    </div>
</div>

