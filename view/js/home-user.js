document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const navLinks = document.querySelectorAll(".slider-nav a");
    const slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;
    const slideInterval = 3000; // 3 วินาที

    // ฟังก์ชันเพิ่ม active class
    const updateActiveNav = (index) => {
        navLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    // ฟังก์ชันเลื่อนไปยังภาพ
    const goToSlide = (index) => {
        const slideWidth = slides[0].clientWidth; // ความกว้างของรูป
        slider.scrollTo({
            left: slideWidth * index,
            behavior: "smooth",
        });
        currentIndex = index;
        updateActiveNav(currentIndex); // อัปเดตสถานะปุ่ม
    };

    // เพิ่มเหตุการณ์คลิกให้กับปุ่ม
    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            goToSlide(index);
        });
    });

    // ทำให้ภาพเลื่อนไปเรื่อย ๆ
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }, slideInterval);

    // เรียกครั้งแรกเพื่อเน้นปุ่มแรก
    updateActiveNav(currentIndex);
});
