<script lang=ts>
	import PropsalCard from "$components/Profile/Exchanges/ProposalCard.svelte";
  let { Proposals, type = '...', ButtonText } =  $props();
</script>


<!-- <div class="border p-4 w-full bg-walnut-dark "> 
  <h2 class="text-walnut-accent text-3xl font-bold tracking-tighter sm:text-3xl border-b-3">{type}</h2>
  <div>
    {#each Proposals as offer}
        <PropsalCard Offer = {offer} />
    {/each}
  </div>
</div> -->


<div class="p-2 w-full"> 
  {#if type != '...'}
    <h2 class="text-walnut-dark text-3xl font-bold tracking-tighter sm:text-3xl">{type}</h2>
  {/if}
  <div class="m-2">
    {#each Proposals as offer}
        <PropsalCard Offer = {offer} ButtonText = {ButtonText} />
    {/each}
  </div>
</div>