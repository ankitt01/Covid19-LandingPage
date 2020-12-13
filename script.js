const cards = document.querySelectorAll('#anim');

var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0 && entry.target.dataset.direction === 'vertical'){
        entry.target.style.animation = `animvertical 1s ${entry.target.dataset.delay} forwards ease-out`;
    } else if(entry.intersectionRatio > 0 && entry.target.dataset.direction === 'horizontal'){
        entry.target.style.animation = `animhorizontal 1s ${entry.target.dataset.delay} forwards ease-out`;
    }
    else {
        entry.target.style.animation = 'none';
    }
    })
    
})

cards.forEach(card => {
    observer.observe(card);
})


const ham = document.querySelector('.ham') 
const close = document.querySelector('.close')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.link a')
ham.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(0)';
})
close.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(100%)';
})
links.forEach((link) => {
    link.addEventListener('click' , () => {
        navLinks.style.transform = 'translateX(100%)';
    })
})


const navbar = document.querySelector('nav')
const hero = document.querySelector('.hero-container')
const options1 = {
    rootMargin: "-100px"
};
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navbar.classList.add('nav-scrolled')
        } else {
            navbar.classList.remove('nav-scrolled')
        }
    })
}, options1)

observer1.observe(hero);