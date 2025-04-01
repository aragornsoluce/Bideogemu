document.addEventListener("DOMContentLoaded", () => {
    const categoriesLink = document.getElementById("categories-link");
    const categoriesMenu = document.getElementById("categories-menu");

    categoriesLink.addEventListener("click", (e) => {
        e.preventDefault();
        categoriesMenu.classList.toggle("active");
    });

    // Close the menu if clicking outside
    document.addEventListener("click", (e) => {
        if (!categoriesMenu.contains(e.target) && e.target !== categoriesLink) {
            categoriesMenu.classList.remove("active");
        }
    });
});

// affichage du menu lorsqu'il est survoler
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const categoriesLink = document.getElementById("categories-link");
    const categoriesMenu = document.getElementById("categories-menu");

    let currentIndex = 0;
    let intervalId;

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const startCarousel = () => {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 7000);
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
        clearInterval(intervalId);
        startCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
        clearInterval(intervalId);
        startCarousel();
    });

    categoriesLink.addEventListener("mouseover", () => {
        categoriesMenu.classList.add("active");
    });

    categoriesLink.addEventListener("mouseout", () => {
        categoriesMenu.classList.remove("active");
    });
    
    categoriesMenu.addEventListener("mouseover", () => {
        categoriesMenu.classList.add("active");
    });

    categoriesMenu.addEventListener("mouseout", () => {
        categoriesMenu.classList.remove("active");
    });

    startCarousel();
});