const tl = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 750
})

tl.add({
    targets: '.headerBg div',
    width: '100%',
    backgroundColor: 'rgb(197, 242, 255)',
    delay: anime.stagger(100)
})

tl.add({
    targets: '.headerBg div',
    width: '90%',
    backgroundColor: 'rgb(235, 235, 255)',
})

tl.add({
    targets: '.icon',
    top: '8%',
    opacity: 1,
    duration: 2000
})

tl.add({
    targets: '.header h1',
    top: '15%',
    opacity: 1,
    duration: 4000
}, '-=1400')

const rotateIt = anime({
    targets: '.headerBg',
    scale: '2',
    translateX: '40%',
    rotate: '35deg',
    duration: 5000,
    autoplay: false
})

document.querySelector('.icon').addEventListener('mouseover', () => {
    rotateIt.play()
})