<script lang="ts">
    import { onMount } from "svelte";

    let heightScreenElements: HTMLElement[];
    const classRegex: RegExp = /(lg|sm|md)\:h\-/gm;
    const selectorRegex: RegExp = /(lg|sm|md)/gm;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    function checkIfSelectorMatch(element: HTMLElement): boolean {
        const classMatches = element.classList.toString().match(classRegex);
        if (classMatches === null) return false;

        let result = false;

        classMatches.forEach((string: string) => {
            const selectorMatches = string.match(selectorRegex);
            if (!selectorMatches) return;

            switch (selectorMatches[0]) {
                case "lg":
                    result = window.innerWidth > 1024;
                    break;
                case "md":
                    result = window.innerWidth > 768;
                    break;
                case "sm":
                    result = window.innerWidth > 640;
                    break;
            }
        });

        return result;
    }

    function updateHeightElements() {
        heightScreenElements = Array.from(document.querySelectorAll(".h-screen") as NodeListOf<HTMLElement>);

        heightScreenElements.forEach((element: HTMLElement) => {
            if (checkIfSelectorMatch(element)) {
                element.style.height = "";
            } else {
                element.style.height = `${window.innerHeight}px`;
            }
        });
    }

    // Debounce window resize events to improve performance
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateHeightElements();
        }, 100);
    }

    onMount(() => {
        updateHeightElements();

        // Throttle the resize event listener
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
</script>
