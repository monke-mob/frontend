<script lang="ts">
    import Header from "$lib/core/components/header.svelte";
    import "$lib/core/tailwind.css";
</script>

<svelte:head>
    <title>monke mob</title>
</svelte:head>

<div class="w-screen overflow-x-hidden">
    <Header></Header>

    <slot />
</div>

<style lang="postcss">
    :global(body) {
        @apply w-full h-screen text-center;
    }
</style>
