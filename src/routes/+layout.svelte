<script lang="ts">
	import Header from '$lib/core/header.svelte';
	import '$lib/core/tailwind.css';
</script>

<svelte:head>
	<title>monke mob</title>
</svelte:head>

<Header></Header>

<slot />

<style lang="postcss">
	:global(body) {
		@apply w-full h-screen text-center;
	}
</style>
