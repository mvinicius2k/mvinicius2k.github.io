let resizeTimeout;

function setRealViewportHeight() {
    console.log("Registrando eventos")
    const updateVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();

    const onResize = () => {
        console.log("Resize chamado")
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateVh, 100); // Debounce: 100ms
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });
}