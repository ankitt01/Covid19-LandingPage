const cards = document.querySelectorAll('#anim');

var observer = new IntersectionObserver((entries) => {
    console.log(entries)

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
ham.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(0)';
})
close.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(100%)';
})