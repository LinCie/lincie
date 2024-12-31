<script lang="ts">
    import { cn } from '@/lib/utils'

    let currentPath: string = $state('')

    $effect(() => {
        currentPath = window.location.pathname
    })

    interface INavigation {
        id: string
        text: string
        href: string
    }
    const navigations: INavigation[] = [
        {
            id: 'about-button',
            text: 'About',
            href: '/about',
        },
        {
            id: 'portfolio-button',
            text: 'Portfolio',
            href: '/portfolio',
        },
        {
            id: 'blog-button',
            text: 'Blog',
            href: '/blog',
        },
        {
            id: 'fun-button',
            text: 'Fun',
            href: '/fun',
        },
    ]
</script>

<header class="sticky inset-x-0 top-0 z-50 bg-polar-0">
    <div class="mx-auto flex max-w-screen-lg px-6 py-6 md:px-9 lg:px-12">
        <a href="/">
            <div class="text-3xl font-bold">LinCie</div>
        </a>
        <nav class="hidden flex-1 place-content-center md:block">
            <ul class="my-auto flex items-center justify-end gap-8">
                {#each navigations as navigation (navigation.text + '-header')}
                    <li id={navigation.id}>
                        <a
                            href={navigation.href}
                            class={cn(
                                'underline-offset-[6px] hover:underline',
                                currentPath === navigation.href && 'underline'
                            )}
                        >
                            {navigation.text}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</header>
