<script lang=ts>
	import OfferCard from "$components/Profile/Offers/OfferCard.svelte";
    let { Offers } =  $props();
</script>

<div>
    {#each Offers as offer}
        <OfferCard ExchangeCard = {offer} />
    {/each}
</div>