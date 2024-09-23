function applySafeAreaInsets() {
    const mainElement = document.querySelector("main");
    const headerElement = document.querySelector("header");

    function updateInsets() {
        const safeAreaTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top")) || 0;
        const safeAreaBottom = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom")) || 0;

        if (mainElement && headerElement) {
            mainElement.style.paddingTop = `${safeAreaTop}px`;
            mainElement.style.paddingBottom = `${safeAreaBottom}px`;
            mainElement.style.height = `calc(100vh - ${safeAreaTop}px - ${safeAreaBottom}px)`;

            headerElement.style.top = `${safeAreaTop}px`;
        }
    }

    updateInsets();

    window.addEventListener("resize", updateInsets);
    window.addEventListener("orientationchange", updateInsets);

    return () => {
        window.removeEventListener("resize", updateInsets);
        window.removeEventListener("orientationchange", updateInsets);
    };
}

export default applySafeAreaInsets;
