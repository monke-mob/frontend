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

<main class="w-screen h-screen overflow-y-auto overflow-x-hidden">
    <Header />
    <slot />
</main>

<style lang="postcss">
    :global(body) {
        @apply w-screen h-screen overflow-hidden text-center bg-no-repeat bg-gradient-to-b from-backgroundSecondary to-background;
    }
</style>