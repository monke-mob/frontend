<script lang="ts">
    import Header from "$lib/core/components/header.svelte";
    import CorrectHeight from "$lib/core/correctHeight.svelte";
    import "$lib/core/tailwind.css";
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>monke mob</title>
</svelte:head>

<CorrectHeight></CorrectHeight>

<main class="safe-area w-screen h-screen overflow-y-auto overflow-x-hidden" style="height: calc(100vh - var(--safe-area-inset-top) - var(--safe-area-inset-bottom));">
    <Header />
    <slot />
</main>

<style lang="postcss">
    :global(body) {
        @apply w-screen h-screen overflow-hidden text-center bg-no-repeat bg-gradient-to-b from-backgroundSecondary to-background;
    }
</style>