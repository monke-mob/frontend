<script lang="ts">
    import { onMount } from "svelte";

    let main: HTMLDivElement;
    let ticking: boolean = false;
    let showMenu: boolean = false;
    $: scrolling = false;

    function scroll() {
        const scrollPosition: number = main.scrollTop;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                scrolling = scrollPosition >= 50;
                ticking = false;
            });

            ticking = true;
        }
    }

    onMount(() => {
        main = document.querySelector("main")! as HTMLDivElement;
        scroll();
        main.addEventListener("scroll", scroll);

        return () => {
            main.removeEventListener("scroll", scroll);
        };
    });
</script>

<header class="w-screen absolute top-0 left-0 z-10 text-lg text-primary transition-all duration-300 {scrolling || showMenu ? 'backdrop-blur-md backdrop-brightness-[0.15] py-4' : 'py-6'}">
    <div class="flex justify-center items-center relative">
        <button
            class="absolute top-1/2 -translate-y-1/2 left-8 h-6 aspect-square md:hidden z-20"
            on:click={() => {
                showMenu = !showMenu;
            }}
        >
            <svg class="w-full h-full fill-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" xml:space="preserve">
                <path
                    d="M119.1,72.8H8.9c-4.9,0-8.9-4-8.9-8.9v0c0-4.9,4-8.9,8.9-8.9h110.3c4.9,0,8.9,4,8.9,8.9v0
		C128,68.8,124,72.8,119.1,72.8z"
                />
                <path
                    d="M119.1,17.7H8.9C4,17.7,0,13.8,0,8.9v0C0,4,4,0,8.9,0l110.3,0c4.9,0,8.9,4,8.9,8.9v0
		C128,13.8,124,17.7,119.1,17.7z"
                />
                <path
                    d="M119.1,128H8.9C4,128,0,124,0,119.1v0c0-4.9,4-8.9,8.9-8.9h110.3c4.9,0,8.9,4,8.9,8.9v0
		C128,124,124,128,119.1,128z"
                />
            </svg>
        </button>

        <div class="justify-end items-center gap-8 basis-full hidden md:flex">
            <a class="text-primary font-ZCOOLKuaiLe" href="/#aboutus">about us</a>
            <a class="text-primary font-ZCOOLKuaiLe" href="/#projects">projects</a>
        </div>

        <img class="h-12 mx-12" src="/images/monke-mob/logo.svg" alt="monke mob logo" />

        <div class="justify-start items-center gap-8 basis-full hidden md:flex">
            <a class="text-primary font-ZCOOLKuaiLe" href="/news">news</a>
            <a class="text-primary font-ZCOOLKuaiLe" href="/#contact">contact</a>
        </div>
    </div>

    {#if showMenu}
        <div class="flex flex-col gap-3 justify-center items-start py-4 px-8 md:hidden">
            <a class="text-primary font-ZCOOLKuaiLe" href="/#aboutus">about us</a>
            <a class="text-primary font-ZCOOLKuaiLe" href="/#projects">projects</a>
            <a class="text-primary font-ZCOOLKuaiLe" href="/news">news</a>
            <a class="text-primary font-ZCOOLKuaiLe" href="/#contact">contact</a>
        </div>
    {/if}
</header>
