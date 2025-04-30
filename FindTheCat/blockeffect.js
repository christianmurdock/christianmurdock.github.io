document.querySelectorAll('#bg').forEach(bg => {
    bg.addEventListener('mouseup', () => {
        bg.classList.add('active');
        setTimeout(() => {
            bg.classList.remove('active');
        }, 1000);
    });
});
