const cameraBtn = document.getElementById("cameraBtn"); 
const imageUpload = document.getElementById("imageUpload");

cameraBtn.addEventListener("click", () => { imageUpload.click(); 
}); 

imageUpload.addEventListener("change", (e) => { const file = e.target.files[0];

    if (file) { console.log("Selected image:", file.name); 
        // Your image search logic here 
        // // Upload to server, run AI search, etc. 
        } 
    }); 
    
// const slideWidth = slides[0].offsetWidth + 8; 
const scrollContainer = document.getElementById('promoScroll'); 
const slides = scrollContainer.querySelectorAll('.promo-banner'); 
const dotsContainer = document.querySelector('.carousel-dots'); 

const dots = document.querySelectorAll('.dot'); 

scrollContainer.addEventListener('scroll', () => { const slideWidth = slides[0].offsetWidth; const index = Math.round(scrollContainer.scrollLeft / slideWidth); 
    dots.forEach(dot => dot.classList.remove('active')); 
    dots[index]?.classList.add('active'); }); 
    
const favoriteButton = document.querySelector('.favorite-button'); 
const favoriteIcon = favoriteButton?.querySelector('.favorite-icon'); 
const productCopy = document.getElementById('productCopy'); 
    if (favoriteButton && favoriteIcon) { 
        favoriteButton.addEventListener('click', () => { 
            const defaultSrc = favoriteIcon.dataset.defaultSrc; 
            const activeSrc = favoriteIcon.dataset.activeSrc; 
            const isToggled = favoriteButton.classList.toggle('toggled'); 
        favoriteIcon.src = isToggled ? activeSrc : defaultSrc; favoriteButton.setAttribute('aria-pressed', String(isToggled)); 
    }); 
}