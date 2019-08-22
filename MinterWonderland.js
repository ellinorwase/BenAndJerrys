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