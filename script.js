/* MENU MOBILE */
function toggleMenu() {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
}

// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll("#navigation a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navigation").classList.remove("active");
    });
});


/* LIGHTBOX */

const images = document.querySelectorAll(
    ".art-card img, .sketch-card img"
);

const lightbox = document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");


images.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

}


lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* FORMULAIRE */

emailjs.init({
    publicKey: "ZenFPIdDyjIs7fZJ1"
});

document
    .querySelector(".contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const form = this;
        const button = form.querySelector("button");

        button.disabled = true;
        button.textContent = "Envoi...";

        emailjs.sendForm(
            "service_2q55s2e",
            "template_touzu5j",
            form
        )
        .then(function() {

            alert("Merci ! Votre message a bien été envoyé.");

            form.reset();

            button.disabled = false;
            button.textContent = "Envoyer le message";

        })
        .catch(function(error) {

            console.error("Erreur :", error);

            alert("Une erreur est survenue. Le message n'a pas été envoyé.");

            button.disabled = false;
            button.textContent = "Envoyer le message";
        });
    });