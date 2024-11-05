function expandImage(imgSrc) {
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");

    expandedImg.src = imgSrc;
    modal.style.display = "flex"; 
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

document.querySelectorAll("#imgs img").forEach(img => {
    img.addEventListener("click", function() {
        expandImage(this.src);

    });
});
