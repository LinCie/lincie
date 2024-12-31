<script lang="ts">
    import { cn } from '@/lib/utils'

    const { className, children, ...props } = $props()
</script>

<p class={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
    {#if children}
        {@render children()}
    {:else}
        fallback content
    {/if}
</p>
