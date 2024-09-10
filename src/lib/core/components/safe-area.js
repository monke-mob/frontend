function applySafeAreaInsets() {
    const mainElement = document.querySelector('main');
    const headerElement = document.querySelector('header');
  
    if (mainElement && headerElement) {
      const safeAreaTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-top')) || 0;
      const safeAreaBottom = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-bottom')) || 0;
  
      mainElement.style.paddingTop = `${safeAreaTop}px`;
      mainElement.style.paddingBottom = `${safeAreaBottom}px`;
      mainElement.style.height = `calc(100vh - ${safeAreaTop}px - ${safeAreaBottom}px)`;
  
      headerElement.style.top = `${safeAreaTop}px`;
    }
  }
  
  export default applySafeAreaInsets;