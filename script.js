const cards = document.querySelectorAll('#anim');

var observer = new IntersectionObserver((entries) => {
    console.log(entries)

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
        entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`;
    }
    else {
        entry.target.style.animation = 'none';
    }
    })
    
})

cards.forEach(card => {
    observer.observe(card);
})
