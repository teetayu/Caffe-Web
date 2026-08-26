document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const navLinks = document.querySelectorAll(".slider-nav a");
    const slides = document.querySelectorAll(".slider img");
    
    if (!slider || navLinks.length === 0 || slides.length === 0) return;

    let currentIndex = 0;
    const slideInterval = 3000; // 3 seconds

    // Function to add active class to dots
    const updateActiveNav = (index) => {
        navLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    // Function to scroll to slide
    const goToSlide = (index) => {
        const slideWidth = slides[0].clientWidth; // Get width dynamically to support screen resizing
        slider.scrollTo({
            left: slideWidth * index,
            behavior: "smooth",
        });
        currentIndex = index;
        updateActiveNav(currentIndex);
    };

    // Click event for navigation dots
    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            goToSlide(index);
        });
    });

    // Auto slide scroll
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }, slideInterval);

    // Reset auto-slide timer when user interacts manually
    const resetTimer = () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }, slideInterval);
    };

    navLinks.forEach(link => {
        link.addEventListener("click", resetTimer);
    });

    // Initial state
    updateActiveNav(currentIndex);
});
