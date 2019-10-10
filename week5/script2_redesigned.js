let currentImageIndex = 1;
function showSlides(n) {
    currentImageIndex = n;
    let image = document.querySelector("#i"+currentImageIndex);
    document.querySelector("#bigImage img").src = image.src;
}
function next() {
    currentImageIndex++;
    let image = document.querySelector("#i"+currentImageIndex);
    document.querySelector("#bigImage img").src = image.src;
}
function previous() {
    currentImageIndex--;
    let image = document.querySelector("#i"+currentImageIndex);
    document.querySelector("#bigImage img").src = image.src;
}