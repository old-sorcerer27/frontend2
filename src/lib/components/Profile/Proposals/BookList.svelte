<script lang=ts>
	import BookCard from "$components/Profile/Proposals/BookCard.svelte";
    let { Books } =  $props();
</script>


<div class="border bg-walnut-accent rounded-md p-2 w-full"> 
        <div class="m-2">
        {#each Books as book}
            <BookCard Book = {book} />
        {/each}
    </div>
</div>