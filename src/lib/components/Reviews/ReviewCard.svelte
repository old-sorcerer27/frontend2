<script lang="ts">
   import type {Review} from "$lib/server/types";
    let { review }: { review: Review } =  $props();
    
</script>

<div class="bg-walnut-accent  rounded-lg max-w-xl w-full">
    <div class="review-header flex justify-between mb-4">
        <span class="review-author text-lg font-bold text-gray-700">{review.user.username}</span>
        <span class="review-date text-base text-gray-500">{review.date.toLocaleString()}</span>
    </div>
    <span class="text-lg font-bold text-gray-700">{review.text}</span>
</div>

