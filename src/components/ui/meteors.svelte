<script lang="ts">
    import { cn } from '@/lib/utils'

    const { number = 10 }: { number: number } = $props()

    let meteorStyles: {
        top: string
        left: string
        animationDelay: string
        animationDuration: string
    }[] = $state([])

    $effect(() => {
        const generateStyles = () => {
            return Array.from({ length: number }, () => ({
                top: '-5px',
                left: `${Math.floor(Math.random() * window.innerWidth)}px`,
                animationDelay: `${Math.random() * 1 + 0.2}s`,
                animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
            }))
        }

        meteorStyles = generateStyles()

        return () => {
            meteorStyles = []
        }
    })
</script>

{#each meteorStyles as style, idx ('meteor-' + idx)}
    <span
        aria-live="polite"
        aria-hidden="true"
        class={cn(
            'pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]'
        )}
        style="top: {style.top}; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration}"
    >
        <div
            class={cn(
                'pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent'
            )}
        ></div>
    </span>
{/each}
