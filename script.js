 const mainCarImage = document.getElementById("mainCarImage");
    const thumbs = document.querySelectorAll(".thumb");
    const imageList = Array.from(thumbs).map(thumb => thumb.getAttribute("data-img"));
    let currentImage = 0;

    function setImage(index) {
        currentImage = index;
        mainCarImage.src = imageList[index];

        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle("active", i === index);
        });
    }

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => setImage(index));
    });

    setInterval(() => {
        const next = (currentImage + 1) % imageList.length;
        setImage(next);
    }, 3500);

    // Tabs
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("data-tab");

            tabLinks.forEach(item => item.classList.remove("active"));
            tabPanels.forEach(panel => panel.classList.remove("active"));

            link.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });