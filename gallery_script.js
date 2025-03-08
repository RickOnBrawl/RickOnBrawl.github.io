const imageGallery = [
    "https://naavik.co/wp-content/uploads/2023/10/brawl-stars.jpg",
    "https://images.squarespace-cdn.com/content/v1/58af450eb3db2b0582612f1d/1707662368729-PA2K3W3Y2IBE3YV8TDKM/all-loading-screens-coming-in-this-update-v0-m7si1wq0yh5c1.jpeg?format=1000w",
    "https://wallpapercave.com/wp/wp12386763.jpg",
    "https://images5.alphacoders.com/129/1299408.jpg"

]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImgIndex];
}

nextButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex + 1) % imageGallery.length
    updateImage()
})


updateImage();