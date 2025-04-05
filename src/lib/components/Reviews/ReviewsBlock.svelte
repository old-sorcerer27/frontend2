<script lang=ts>
	import ReviewCard from "./ReviewCard.svelte";
    let { Reviews, Book } =  $props();
    
</script>


<div class="bg-walnut-dark flex flex-col items-center justify-start pt-10 pb-20 px-4 rounded-md">
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-walnut-accept font-bold tracking-tighter sm:text-4xl mb-3">{Book.title}</h1>
        <h1 class="text-walnut-accept font-bold tracking-tighter sm:text-2xl">{Book.author}</h1>
    </div>
    {#each Reviews as review}
        <ReviewCard review = {review} />
    {/each}    
</div>