<script lang="ts">
    export let format: "left" | "right" = "left";
    export let name: string;
    export let description: string;
    export let icon: string;
    export let image: string;
    export let buttons: { text: string; link: string; image: string; style: string }[];
</script>

<div class="h-fit w-screen flex justify-center items-center gap-10 lg:gap-16 p-8 px-6 md:px-20 lg:px-32 py-[12vh] lg:py-[20vh] {format === 'right' ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'}">
    <div class="h-fit text-center lg:text-left lg:h-full w-full lg:w-[50%] py-2 flex justify-center items-center flex-col lg:items-start {format === "right" ? "" : ""}">
        <p class="text-3xl mb-2 font-bold">{name}</p>
        <p class="text-lg sm:text-xl">{description}</p>

        <div class="flex gap-2 mt-8 flex-wrap justify-center lg:justify-start">
            {#each buttons as button}
                <a class={button.style} href={button.link}>{button.text}</a>
            {/each}
        </div>
    </div>

    <div class="h-fit lg:h-full flex justify-center items-center w-full lg:w-[50%] relative [&>*]:rounded-2xl [&>*]:border [&>*]:border-backgroundSecondary [&>*]:bg-background">
        <img class="w-full blur-md md:blur-none" src={image} alt={name} />
        <img class="h-30 md:h-40 inline-block aspect-square left-1/2 top-1/2 md:top-auto -translate-x-1/2 -translate-y-1/2  md:bottom-5 {format === "right" ? "md:left-5" : "md:right-5 md:left-auto"} md:translate-x-0 md:translate-y-0 absolute shadow-2xl" src={icon} alt={`${name} icon`} />
    </div>
</div>
