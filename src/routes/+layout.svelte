<script lang="ts">
    import Header from "$lib/core/components/header.svelte";
    import "$lib/core/tailwind.css";
    import { onMount } from "svelte";
    import { pushState, replaceState } from '$app/navigation'; // Import SvelteKit navigation methods
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover" />
    <title>monke mob</title>
    <link rel="preload" href="/images/monke-activities/logoText.svg" as="image">
    <link rel="preload" href="/images/monke-mob/banner/400x400.webp" as="image">
    <link rel="preload" href="/images/monke-mob/banner/600x600.webp" as="image">
    <link rel="preload" href="/images/monke-mob/banner/900x900.webp" as="image">
</svelte:head>

<body>
    <div style="display: contents">
        <main class="w-screen h-screen overflow-y-auto overflow-x-hidden">
            <Header />
            <slot />
        </main>
    </div>
</body>

<style lang="postcss">
    :global(body) {
        @apply w-screen h-screen overflow-hidden text-center bg-no-repeat bg-gradient-to-b from-backgroundSecondary to-background;
        padding-top: 0;
        padding-bottom: 0;
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
    }

    main {
        padding-top: 0;
        padding-bottom: 0;
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
    }
</style>
