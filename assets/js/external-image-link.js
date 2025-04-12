document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a.external-image-link').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});