<script lang="ts">
    import { onMount } from "svelte";
    let subText: HTMLParagraphElement;
    let showLogo = false; // Flag to control logo display
    const isAnnouncement: boolean = true;
    const announcementFor: string = "monke activities";
    const announcementLogo: string = "/images/monke-activities/logoText.svg";
    const announcementText: string = `
      <p class="flex flex-col gap-2 text-2xl sm:text-3xl font-extrabold brandGradient" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        <span class="font-ZCOOLKuaiLe">closed alpha release</span>
        <span class="font-ZCOOLKuaiLe">coming soon</span>
      </p>
    `;
  
    onMount(() => {
      showLogo = true; // Force display when the component mounts
      if (isAnnouncement) {
        subText.innerHTML = announcementText;
      }
    });
  
    function getRandomRotation() {
      return Math.random() * (Math.random() < 0.5 ? -50 : 50);
    }
  
    function getRandomDelay() {
      return Math.random() * 3;
    }
  
    function getRandomSize() {
      return Math.random() * 20 + 30; // Random size between 30px and 50px
    }
  
    function getRandomTop() {
      return Math.random() * 100;
    }
  
    function getRandomLeft() {
      return Math.random() * 100;
    }
  </script>
  
  <svelte:head>
    <!-- Preload critical images for faster LCP -->
    <link rel="preload" href="/images/monke-activities/logoText.svg" as="image">
    <link rel="preload" href="/images/monke-mob/logoText.svg" as="image">
    <link rel="preload" href="/images/monke-mob/banner/400x400.webp" as="image">
  </svelte:head>
  
  <div class="w-screen h-screen flex flex-col gap-4 justify-center items-center relative">
    <div class="z-[5] absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-20 xl:left-40 w-screen flex flex-col justify-center items-center sm:block sm:w-fit">
      {#if showLogo}
        {#if isAnnouncement}
          <img class="h-36 px-6 sm:px-0" src={announcementLogo} alt={announcementFor} loading="eager" />
        {:else}
          <img class="h-36 px-6 sm:px-0" src="/images/monke-mob/logoText.svg" alt="monke mob" loading="eager" />
        {/if}
      {/if}
      <p class="text-2xl text-light mt-2" bind:this={subText}>going bananas 🍌</p>
      <div class="flex mt-12 justify-center items-center text-xl">
        {#if isAnnouncement}
          <a class="button" href="/">Learn more</a>
        {:else}
          <a class="button" href="/">Announcements</a>
        {/if}
      </div>
    </div>
    
    <div class="w-screen h-screen lg:w-[45vw] lg:h-[75vh] absolute right-0 top-1/2 -translate-y-1/2 blur-sm brightness-75 lg:blur-none lg:brightness-100">
      {#each Array(4) as _, quadrant}
        <div class="absolute w-[calc(50%-8%)] h-[calc(50%-8%)]" style="top: calc({25 * (quadrant == 0 || quadrant == 1 ? 0 : 2)}% + {8 * (quadrant == 0 || quadrant == 1 ? -1 : 1)}%); left: calc({25 * (quadrant == 0 || quadrant == 2 ? 0 : 2)}% + {8 * (quadrant == 0 || quadrant == 2 ? -1 : 1)}%);">
          {#each Array(4) as _}
            <svg
              class="banana aspect-square absolute fill"
              style="transform: rotate({getRandomRotation()}deg); animation-delay: {getRandomDelay()}s; width: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%;"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 128 128"
              xml:space="preserve"
            >
              <defs>
                <linearGradient id="0" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stop-color="#ffd160" />
                  <stop offset="33.33%" stop-color="#ffc549" />
                  <stop offset="100%" stop-color="#ffad00" />
                </linearGradient>
              </defs>
              <path
                fill="url(#0)"
                d="M115.7,103.1c3.9,4.6,2,10.6,0.3,13.4c-0.1,0.2-0.3,0.4-0.5,0.6c-7.4,7.1-18.9,10.9-32.2,10.9
                c-1.8,0-3.6-0.1-5.4-0.2c-20.9-1.6-40.3-12-53.2-28.5c-1.4-1.8-5.7-7.2-9.2-14.9c-4.5-9.7-6.2-19.4-5.2-29
                c0.5-5.2,2.6-18.6,11.6-29.2c2.4-2.8,4.5-4.6,6.6-6.4c2.6-2.2,5.3-4.5,8.8-9c2-2.5,3.7-5.2,5.5-8.3c0.9-1.6,2.6-2.6,4.4-2.6
                s3.5,1.1,4.3,2.8c1.2,2.5,2.5,4.9,3.8,7.4c0,0,0,0,0,0.1c0.7,1.3,0.8,2.8,0.3,4.2c-0.5,1.4-1.5,2.5-2.7,3.1
                c-1.5,0.7-3.7,1.9-5.6,4.1c0,0-2.6,3-3.8,7.7c-2,7.8-2.7,25.1,7.9,39.9c7.7,10.8,18,15.1,23.4,16.7c3.9,1.1,7.3,2.1,10.4,3
                C104.4,94.4,109.6,95.8,115.7,103.1L115.7,103.1z"
              />
            </svg>
          {/each}
        </div>
      {/each}
      <div class="w-[25vw] aspect-square absolute lg:right-20 xl:right-40 top-1/2 -translate-y-1/2 z-[2] hidden lg:block">
        <img
          class="w-full h-full"
          alt="monke mob banner"
          src="/images/monke-mob/banner/400x400.webp"
          srcset="/images/monke-mob/banner/400x400.webp 320w,
                  /images/monke-mob/banner/600x600.webp 640w,
                  /images/monke-mob/banner/900x900.webp 960w"
          sizes="(max-width: 320px) 280px,
                 (max-width: 640px) 640px,
                 960px"
        />
      </div>
    </div>
  </div>
  
  <style lang="postcss">
    .banana {
      animation: hover infinite 6s ease-in-out var(--delay);
      transform: translateY(0px) rotate(var(--rotation));
    }
  
    @keyframes hover {
      0% {
        transform: translateY(0px) rotate(var(--rotation));
      }
      50% {
        transform: translateY(-5px) rotate(var(--rotation));
      }
      100% {
        transform: translateY(0px) rotate(var(--rotation));
      }
    }
  </style>  