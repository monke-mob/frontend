<script lang="ts">
    import Header from "$lib/core/components/header.svelte";
    import "$lib/core/tailwind.css";
</script>

<svelte:head>
    <title>monke mob</title>
</svelte:head>

<main class="w-screen h-screen overflow-y-auto overflow-x-hidden">
    <Header />

    <slot />
</main>

<style lang="postcss">
    :global(body) {
        @apply w-full text-center bg-no-repeat bg-gradient-to-b from-backgroundSecondary to-background;
    }
</style>
