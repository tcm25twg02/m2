/* CONTROLO DO MENU HAMBURGER */
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* CONTROLO DO SLIDESHOW */
let slideIndex = 1;

// Inicia o slideshow mal o script carrega
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    // Slideshow automático (5 segundos)
    setInterval(() => plusSlides(1), 5000);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; 

    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

/* INTEGRAÇÃO XML (CARREGAR TABELA) */
window.addEventListener('load', function() {
    const tabela = document.getElementById("corpo-tabela");
    if (!tabela) return;

    fetch('data/dados.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            let marcos = xml.getElementsByTagName("marco");

            for (let i = 0; i < marcos.length; i++) {
                let row = tabela.insertRow();
                row.insertCell(0).innerText = marcos[i].getElementsByTagName("ano")[0].textContent;
                row.insertCell(1).innerText = marcos[i].getElementsByTagName("evento")[0].textContent;
                row.insertCell(2).innerText = marcos[i].getElementsByTagName("autor")[0].textContent;
            }
        });
});

