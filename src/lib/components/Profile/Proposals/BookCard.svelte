<script lang="ts">
    let { Book } =  $props();
</script>


<div class="border p-4 w-full  bg-walnut-dark flex flex-row gap-2 mb-2 last:border-none rounded-sm"> 
    <span class="font-semibold text-walnut-accent text-base">{Book.author}</span>
    <span class="ml-1 text-gray-300 text-base">{Book.title}</span> 
    <span class="text-walnut-accent text-base">{Book.data}</span> 
</div>