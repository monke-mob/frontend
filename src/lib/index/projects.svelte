<script lang="ts">
    import Project from "./components/project.svelte";
</script>

<div class="w-screen h-fit" id="#projects">
    <p class="text-5xl font-ZCOOLKuaiLe font-extrabold">our<br>projects</p>

    <Project
        name="Fluid: The new TweenService"
        description="Introducing Fluid – your exciting alternative to Roblox's TweenService! This dynamic service goes beyond the traditional, allowing you to effortlessly tween not only standard instances but also Models and Dictionaries. But that's not all! What sets Fluid apart is its incredible level of customizability. With Fluid, you have the freedom to fine-tune your tweens on various instances to your heart's content. Say goodbye to limitations and embrace the endless possibilities that Fluid brings to your tweening experience!"
        image="/images/fluidBanner.png"
        buttons={[
            { text: "GitHub", link: "/", image: "", style: "button" },
            { text: "Demo", link: "/", image: "", style: "button" },
            { text: "Documentation", link: "/", image: "", style: "button" },
        ]}
    />

    <Project
        name="monke activities"
        description="Play unique minigames, do quests in the lobby, unlock skins, hang out, and meet with friends in monke activities!"
        image="/images/fluidBanner.png"
        format="right"
        buttons={[
            { text: "Play on Roblox", link: "https://www.roblox.com/home", image: "", style: "button" },
            { text: "Join the Discord", link: "https://discord.com/invite/8CXNpsk3RP", image: "", style: "button" },
        ]}
    />
</div>
