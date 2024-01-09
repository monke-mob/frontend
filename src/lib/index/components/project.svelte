<script lang="ts">
    export let format: "left" | "right" = "left";
    export let name: string;
    export let description: string;
    export let image: string;
    export let buttons: { text: string; link: string; image: string; style: string }[];
</script>

<div class="h-screen w-screen flex justify-center items-center gap-10 lg:gap-16 p-8 px-6 md:px-20 lg:px-32 {format === 'right' ? 'flex-row-reverse' : 'flex-col-reverse lg:flex-row'}">
    <div class="h-fit text-center lg:text-left lg:h-full w-full lg:w-[50%] py-2 flex justify-center items-center flex-col lg:items-start {format === "right" ? "" : ""}">
        <p class="text-3xl mb-2 font-bold">{name}</p>
        <p class="text-xl">{description}</p>

        <div class="flex gap-2 mt-8">
            {#each buttons as button}
                <a class={button.style} href={button.link}>{button.text}</a>
            {/each}
        </div>
    </div>

    <div class="h-fit lg:h-full flex justify-center items-center w-full lg:w-[50%]">
        <img class="w-full" src={image} alt={name} />
    </div>
</div>
