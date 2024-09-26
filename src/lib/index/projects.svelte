<script lang="ts">
    import Project from "./components/project.svelte";
</script>

<span id="projects" class="relative"></span>

<div class="w-screen h-fit py-[15vh]" id="#projects">
    <p class="brandTitle">our<br>projects</p>

    <Project
        name="Fluid: The new TweenService"
        description="Introducing Fluid – your exciting alternative to Roblox's TweenService! This dynamic service goes beyond the traditional, allowing you to effortlessly tween not only standard instances but also Models and Dictionaries. But that's not all! What sets Fluid apart is its incredible level of customizability. With Fluid, you have the freedom to fine-tune your tweens on various instances to your heart's content. Say goodbye to limitations and embrace the endless possibilities that Fluid brings to your tweening experience!"
        image="/images/fluidBanner.webp"
        buttons={[
            { text: "GitHub", link: "/", image: "", style: "button" },
            { text: "Demo", link: "/", image: "", style: "button" },
            { text: "Documentation", link: "/", image: "", style: "button" },
        ]}
    />

    <Project
        name="monke activities"
        description="Play unique minigames, do quests in the lobby, unlock skins, hang out, and meet with friends in monke activities!"
        icon = "https://tr.rbxcdn.com/c6bff967421f3e729d0e986a2b68df0d/150/150/Image/Webp"
        image="https://tr.rbxcdn.com/77305cbdc984ad45f5a94632f1992d18/768/432/Image/Webp"
        format="right"
        buttons={[
            { text: "Play on Roblox", link: "https://www.roblox.com/games/13714167735/monke-activities", image: "", style: "button" },
            { text: "Join the Discord", link: "https://discord.gg/rP9z8HRnSV", image: "", style: "button" },
        ]}
    />
</div>
