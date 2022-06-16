
const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnSroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(testimonials);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}


function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    // verificar se a ceção passou da linha
    // quais dados vou precisar?

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)


    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?

    const sectionEndAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine
    //console.log('O fundo da seção chegou ou passou da linha?', sectionEndPassedTargetLine)*/

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnSroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #testimonials,
    #testimonials header,
    #testimonials .content,
    #testimonials .companies,
    #testimonials .banner,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content`
);

// Testimonials carousel

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            setWrapperSize: true,
        },
    }
});