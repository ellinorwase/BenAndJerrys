function checkForVisibility() {
    let images = document.querySelectorAll("img");
    images.forEach(function(image) {
      if (isPicInViewport(image)) {
        let textWrapper = document.querySelector('.h1-fudge-brownie .h1-letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    
      }else{
        image.classList.remove("pic-slide");
      }
    });
  }

  function isPicInViewport (pic) {
    var rect = pic.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }

  window.addEventListener('scroll', checkForVisibility())

  anime.timeline({loop: true})
  .add({
      targets: '.h1-fudge-brownie .h1-letters',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: function(el, i) {
          return 45 * (i+1)
  }
}).add({
targets: '.h1-fudge-brownie',
opacity: 0,
duration: 1000,
easing: "easeOutExpo",
delay: 50000
});