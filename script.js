const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// On sélectionne les éléments sur lesquels ont doit écouter le click
const rightArrow = document.querySelector('.arrow_right')
const leftArrow = document.querySelector('.arrow_left')

let currentIndex = 0


// On ajoute l'écouteur d'évènement (click)
rightArrow.addEventListener('click', () => {
    
    currentIndex++ 

    // On test si on arrive sur le dernier slide (longueur du slide)
    if(currentIndex >= slides.length){
        currentIndex = 0
    }
    /*
        On change les données sur la page web (DOM) 
            ->En changeant le SRC de l'image
            -> En changeant le contenu HTML de la tagLine (p)
    */
   changeSlide()
})

leftArrow.addEventListener('click', () => {
    currentIndex--
    if (currentIndex < 0){
        currentIndex = slides.length -1
    }
    changeSlide()
})

function changeSlide(){

    // On sélectionne l'image
    const img = document.querySelector('.banner-img')
    // On change uniquement la valeur de la source
    // On remplace avec la valeur de 'image' de notre tableau avec l'index en cours
    img.src = `./assets/images/slideshow/${slides[currentIndex].image}`

    // Mettre à jour la tagLine
    const tagLine = document.querySelector('#banner > p')
    tagLine.innerHTML = slides[currentIndex].tagLine
    
    // Sélectionne les éléments des bullet points
    const bulletPoints = document.querySelectorAll('.dots .dot');

    for(let i = 0; i < slides.length; i++){
        if(i === currentIndex){
            bulletPoints[i].classList.add('dot_selected')
        } else {
            bulletPoints[i].classList.remove('dot_selected')
        }
    }
}
