<script lang="ts">
    export let format: "left" | "right" = "left";
    export let name: string;
    export let description: string;
    export let image: string;
</script>

<div class="w-screen flex justify-center items-center gap-16 p-8 px-32 {format === "right" ? "flex-row-reverse" : ""} bg-backgroundSecondary">
    <div class="h-full text-left w-[50%] py-2">
        <p class="text-3xl mb-2 font-bold">{name}</p>
        <p class="text-xl">{description}</p>
    </div>

    <div class="flex justify-center items-center w-[50%]">
        <img class="w-full" src={image} alt={name}>
    </div>
</div>