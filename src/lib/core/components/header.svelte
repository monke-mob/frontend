<script lang="ts">
    import { onMount } from "svelte";

    let main: HTMLDivElement
    let ticking: boolean = false;
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
        main.addEventListener("scroll", scroll);

        return () => {
            main.removeEventListener("scroll", scroll);
        };
    });
</script>

<header class="w-screen flex justify-center items-center absolute top-0 left-0 z-10 text-lg text-primary transition-all duration-300 {scrolling ? 'backdrop-blur-md backdrop-brightness-[0.15] py-4' : 'py-6'}">
    <div class="justify-end items-center gap-8 basis-full hidden lg:flex">
        <a class="text-primary font-ZCOOLKuaiLe" href="/">about us</a>
        <a class="text-primary font-ZCOOLKuaiLe" href="/">projects</a>
    </div>

    <img class="h-12 mx-12" src="/images/logo.svg" alt="monke mob logo" />

    <div class="justify-start items-center gap-8 basis-full hidden lg:flex">
        <a class="text-primary font-ZCOOLKuaiLe" href="/">team</a>
        <a class="text-primary font-ZCOOLKuaiLe" href="/">contact</a>
    </div>
</header>
