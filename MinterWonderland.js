var tlMinter = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

tlMinter.add({
    targets: '.minter-wonderland h1',
    opacity: 1,
    scale: 1.2,
    delay: anime.stagger(500)
})

// function scrollInVisible() {
//     const headers = document.querySelectorAll('.section-header')
//     headers.forEach(header => {
//         if (isElementInViewport(header)) {
//             header.classList.add("header-visible");
//         } else {
//             header.classList.remove("header-visible");
//         }
//     })
// }

// function isElementInViewport (el) {
//     var rect = el.getBoundingClientRect();

//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// if (window.addEventListener) {
//     addEventListener('DOMContentLoaded', scrollInVisible, false);
//     addEventListener('load', scrollInVisible, false);
//     addEventListener('scroll', scrollInVisible, false);
// }