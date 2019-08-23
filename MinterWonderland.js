var tlMinter = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500
});

tlMinter.add({
    targets: '.minter-wonderland h1',
    opacity: 1,
    scale: 1.3,
    delay: anime.stagger(500)
})

document.querySelector('.minter-wonderland-pic').addEventListener('click', () => {
    tlMinter.play()
})