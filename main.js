let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let img7 = document.getElementById('img7');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let text6 = document.getElementById('text6');
let text7 = document.getElementById('text7');
let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');
let point4 = document.getElementById('point4');
let point5 = document.getElementById('point5');
let point6 = document.getElementById('point6');
let point7 = document.getElementById('point7');

// Tableau contenant des paires [image, texte, point]
let dataImages = [
    [img1, text1, point1],
    [img2, text2, point2],
    [img3, text3, point3],
    [img4, text4, point4],
    [img5, text5, point5],
    [img6, text6, point6],
    [img7, text7, point7]
];

function ShowImages() {
    for (let i = 0; i < dataImages.length; i++) {
        setTimeout(() => {
            // Réinitialiser la visibilité et le style de toutes les images, textes et points
            dataImages.forEach(([img, text, point]) => {
                img.style.display = 'none';
                text.style.display = 'none';
                point.style.backgroundColor = 'white'; // Réinitialise la couleur du point
            });

            // Afficher l'image, le texte courants, et changer la couleur du point
            dataImages[i][0].style.display = 'block'; // Image
            dataImages[i][1].style.display = 'block'; // Texte
            dataImages[i][2].style.backgroundColor = '#9DBBC6'; // Change la couleur du point courant

            // Si c'est la dernière image, relancer ShowImages après un délai
            if (i === dataImages.length - 1) {
                setTimeout(ShowImages, 2000); // Redémarre après la dernière image
            }
        }, i * 2000); // Délai basé sur l'indice (i)
    }
}

// Initialisation : cacher toutes les images et les textes sauf la première paire
dataImages.forEach(([img, text, point]) => {
    img.style.display = 'none';
    text.style.display = 'none';
    point.style.backgroundColor = 'white'; 
});
dataImages[0][0].style.display = 'block'; 
dataImages[0][1].style.display = 'block'; 
dataImages[0][2].style.backgroundColor = '#9DBBC6'; 

// Lancer l'affichage
ShowImages();
// Fonction principale appelée lors du défilement
window.onscroll = function () {
   let value = window.scrollY;

    handleInitialText(value);
    toggleItemsVisibility(value);
    toggleAboutVisibility(value);
    animateDivsOnScroll(value);
    titrepartenarait(value);
    titresection3(value);
};

// Fonction pour afficher le texte initial
function handleInitialText(value) {
    let p1 = document.querySelector('#text1 p');
    let h1Element = document.querySelector('#text1 h1');

    if (value === 0) {
        h1Element.classList.add('visible');
        p1.classList.add('visible');
    }
}

// Fonction pour afficher ou masquer les items et modifier l'en-tête
function toggleItemsVisibility(value) {
    let items = document.querySelectorAll('.container2 .item');
    let header = document.querySelector('.head');

    if (value > 5.5) {
        items.forEach((item) => {
            item.classList.add('visible');
        });
        header.classList.add('scrolle');
    } else {
        items.forEach((item) => {
            item.classList.remove('visible');
        });
        header.classList.remove('scrolle');
    }
}

// Fonction pour afficher ou masquer les éléments "about"
function toggleAboutVisibility(value) {
   let h2Element = document.querySelector('.about h2');
    let p2 = document.querySelector('.about p');

    if (value >= 50) {
        if (h2Element && p2) {
            h2Element.classList.add('visible');
            p2.classList.add('visible');
        }
    } else {
        if (h2Element && p2) {
            h2Element.classList.remove('visible');
            p2.classList.remove('visible');
        }
    }
}

// Fonction pour animer les divs au scroll
let lastScrollY = 0; // Variable pour suivre la dernière position de défilement

function animateDivsOnScroll(value) {
    let div1 = document.querySelector('.div1');
    let div2 = document.querySelector('.div2');
    let div3 = document.querySelector('.div3');
    let phrase = document.getElementById('phrase');
    if (value > lastScrollY) {
        if (value > 5.5 && value < 6) {
           
             phrase.style.transform = 'translateY(150px)';
             div1.style.transform = 'translateY(0)';
             div2.style.transform = 'translateY(0)';
             div3.style.transform = 'translateY(0)';
        } else {
          
            phrase.style.transform = 'translateY(-30px)';
            div1.style.transform = 'translateY(1px)';
            div2.style.transform = 'translateY(-30px)';
            div3.style.transform = 'translateY(-50px)';
        }
    } 
    else {
        if (value < 5.5) {
            phrase.style.transform = 'translateY(150px)';
            div1.style.transform = 'translateY(0)';
            div2.style.transform = 'translateY(0)';
            div3.style.transform = 'translateY(0)';
        } else {
           
            
            phrase.style.transform = 'translateY(-30px)';
            div1.style.transform = 'translateY(1px)';
            div2.style.transform = 'translateY(-30px)';
            div3.style.transform = 'translateY(-50px)';
        }
    }

    lastScrollY = value;
}
function titrepartenarait(value){
    let titrepartenaraiat = document.querySelector('.titre h2');
   
    if(value > 7 ){
        titrepartenaraiat.style.fontSize ='80px';
    
    }else{
        titrepartenaraiat.style.fontSize ='50px';

    }
}
function titresection3(value){
    let titresection3 = document.getElementById('titresection3');
    if(value > 10){  
        titresection3.style.fontSize ='60px'
    }else{
        titresection3.style.fontSize ='50px';
    }
}

window.onload = function () {
    init(); 
};

function init() {
    const p1 = document.querySelector('#text1 p'); 
    const h1Element = document.querySelector('#text1 h1'); 
    if (h1Element && p1) {
        h1Element.classList.add('visible'); 
        p1.classList.add('visible');
    }
   
}


// Récupérer l'élément du bouton "Retour"
const retourButton = document.querySelector('.retour');
window.addEventListener('scroll', function() {
  
    if (window.scrollY > 0) {
     
        retourButton.style.display = 'block';
    } else {
       
        retourButton.style.display = 'none';
    }
});
// Ajouter un événement pour faire revenir l'utilisateur en haut de la page (scrollY = 0)
retourButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
});
window.addEventListener('scroll', () => {
    document.querySelectorAll('.number').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        let target = +el.getAttribute('data-target');
        let count = 0;
        let interval = setInterval(() => {
          count += Math.ceil(target / 250);
          el.textContent = count;
          if (count >= target) clearInterval(interval);
        }, 0);
      }
    });
  });
  function showSection(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    let CPG = document.querySelector('.CPG');

    // Vérifie si la section est actuellement visible
    if (CPG.style.display === 'block') {
        CPG.style.display = 'none'; // Cache la section si elle est déjà visible
    } else {
        CPG.style.display = 'block'; // Affiche la section si elle est cachée
    }
}
