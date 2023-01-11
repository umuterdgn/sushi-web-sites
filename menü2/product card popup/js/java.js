let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});



let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')


}


const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true,
})

sr.reveal('.myimageabout', { delay: 350, origin: 'left' })
sr.reveal('.about-text-content', { delay: 350, origin: 'right' })
sr.reveal('.home-image', { delay: 350, origin: 'left' })
sr.reveal('.home-text-content', { delay: 350, origin: 'right' })

sr.reveal('.quality-content', { delay: 350, origin: 'left' })
sr.reveal('.qulity-image', { delay: 350, origin: 'right' })
sr.reveal('.gallery-image', { delay: 350, origin: 'top' })
sr.reveal('.menu-food-content', { delay: 350, origin: 'top' })
sr.reveal('.menu-food-text', { delay: 350, origin: 'bottom' })
sr.reveal('.food-main-content', { delay: 350, origin: 'bottom' })
sr.reveal('.before', { delay: 350, origin: 'bottom' })
sr.reveal('.footer-logo', { delay: 350, origin: 'bottom' })