<script>
    
import {data} from '../data.ts'
 export const posts = data

</script>
<div class="flex flex-col sm:grid sm:grid-cols-4 gap-2">
{#each data as card}
<div key={card.id} class="p-2 bg-zinc-300 dark:bg-zinc-600 flex flex-col gap-2 rounded cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-500">
    <div>
        <h1 class="text-center">{card.title}</h1>
        <p class="text-center opacity-50">{card.content}</p>
    </div>
    <div class="flex items-center justify-center h-full"><img src={card.image} alt="" class="" loading="lazy" /></div>
</div>
{/each}
</div>