document.addEventListener("DOMContentLoaded", function () {
    const slideButton = document.querySelector(".slide-submit button");

    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    slideButton.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        slideButton.style.transition = "none"; // Disable animation during drag
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const parentWidth = slideButton.parentElement.offsetWidth;
        currentX = e.clientX - startX;

        // Restrict movement within the parent
        if (currentX < 0) currentX = 0;
        if (currentX > parentWidth - slideButton.offsetWidth) {
            currentX = parentWidth - slideButton.offsetWidth;
        }

        slideButton.style.transform = `translateX(${currentX}px)`;
    });

    document.addEventListener("mouseup", () => {
        if (!isDragging) return;

        isDragging = false;
        const parentWidth = slideButton.parentElement.offsetWidth;

        // Check if the button has crossed halfway
        if (currentX > parentWidth / 2) {
            // Redirect to WhatsApp
            window.location.href = "https://wa.me/+918624916245?text=I’m+interested+in+Lodha+Wakad+project.+Please+send+brochure+and+price+details.";

            // Reset position after triggering
            slideButton.style.transform = "translateX(0)";
            slideButton.style.transition = "transform 0.3s ease"; // Smooth reset animation
        } else {
            // Reset position if not dragged far enough
            slideButton.style.transform = "translateX(0)";
            slideButton.style.transition = "transform 0.3s ease"; // Smooth reset animation
        }
    });

    // Handle touch events for mobile devices
    slideButton.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        slideButton.style.transition = "none";
    });

    slideButton.addEventListener("touchmove", (e) => {
        if (!isDragging) return;

        const parentWidth = slideButton.parentElement.offsetWidth;
        currentX = e.touches[0].clientX - startX;

        // Restrict movement within the parent
        if (currentX < 0) currentX = 0;
        if (currentX > parentWidth - slideButton.offsetWidth) {
            currentX = parentWidth - slideButton.offsetWidth;
        }

        slideButton.style.transform = `translateX(${currentX}px)`;
    });

    slideButton.addEventListener("touchend", () => {
        if (!isDragging) return;

        isDragging = false;
        const parentWidth = slideButton.parentElement.offsetWidth;

        // Check if the button has crossed halfway
        if (currentX > parentWidth / 2) {
            // Redirect to WhatsApp
            window.location.href = "https://wa.me/+918624916245?text=I’m+interested+in+Lodha+Wakad+project.+Please+send+brochure+and+price+details.";

            // Reset position after triggering
            slideButton.style.transform = "translateX(0)";
            slideButton.style.transition = "transform 0.3s ease";
        } else {
            // Reset position if not dragged far enough
            slideButton.style.transform = "translateX(0)";
            slideButton.style.transition = "transform 0.3s ease";
        }
    });
});
