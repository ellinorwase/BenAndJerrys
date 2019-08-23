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

// HIGHLIGHT FOLLOWS
const triggers = document.querySelectorAll('em');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLinks() {
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(em => em.addEventListener('mouseenter', highlightLinks));