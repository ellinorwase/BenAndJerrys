let clickFunction = document.getElementById("click-function");
clickFunction.addEventListener("mouseenter", event => {
  var animation = anime({
    targets: "img.cookie-dough-pic",
    scale: 1.4,
    rotate: "1turn"
  })

  function loop(t) {
    animation.tick(t);
    customRAF = requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
});
clickFunction.addEventListener("mouseleave", event => {
    var animation = anime({
      targets: "img.cookie-dough-pic",
      scale: 1,
      rotate: "2turn"
    });
  
    function loop(t) {
      animation.tick(t);
      customRAF = requestAnimationFrame(loop);
    }
  
    requestAnimationFrame(loop);
  });

// Cookie Dough Text

// Wrap every letter in a span
var textWrapper = document.querySelector(
  ".cookie-dough-heading .cookie-dough-letters"
);
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='cookie-dough-letters'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".cookie-dough-heading .cookie-dough-letters",
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 100 * i;
    }
  })
  .add({
    targets: ".cookie-dough-heading",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
//   .add({
//     targets: ".color-rgb",
//     color: 'rgb(255,255,255)', 
//   });
//   .add({ targets: ".color-rgb", color: "rgb(58, 106, 209)"},0);
