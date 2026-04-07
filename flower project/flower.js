document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelector(".stars");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
        star.style.background = "white";
        star.style.position = "absolute";
        star.style.borderRadius = "50%";
        star.style.opacity = Math.random();
        stars.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    setInterval(createStar, 100);
});
