const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

const galleryImages = document.querySelectorAll(".image-card img");


// Ouvrir l'image

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// Fermer avec le bouton X

closeLightbox.addEventListener("click", function() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});


// Fermer en cliquant sur le fond

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// Fermer avec la touche Échap

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});