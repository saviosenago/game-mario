document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress-bar-inner");
    let progress = 0;

    function updateProgress() {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            requestAnimationFrame(updateProgress);
        }
    }

    updateProgress();
});