// Cookie dough pic

let hoverFunction = document.getElementById("hover-function");
var spoonAnimation = null;
hoverFunction.addEventListener("mouseenter", event => {
  var animation = anime({
      targets: "img.cookie-dough-pic",
      scale: 1.3,
      rotate: "1turn",
    });
    spoonAnimation = anime({
      targets: "img.spoon-pic",
      rotate: "1turn",
      direction: 'alternate',
      easing: 'easeInOutQuad',

    });

  function loop(t) {
    animation.tick(t);
    customRAF = requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
});
hoverFunction.addEventListener("mouseleave", event => {
  var animation = anime({
    targets: "img.cookie-dough-pic",
    scale: 1,
    rotate: "2turn"
  });
  spoonAnimation.reset();
//   animation = anime({
//     targets: "img.spoon-pic",
//     rotate: "1turn",
//     direction: 'alternate',
//     easing: 'easeInOutQuad',
 
//   });

  function loop(t) {
    animation.tick(t);
    customRAF = requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
});

// Cookie Dough Text

var textWrapper = document.querySelector(
  ".cookie-dough-heading .cookie-dough-letters"
);
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='cookie-dough-letters'>$&</span>"
);

anime
  .timeline({ loop: true })
  //   For each letter
  .add({
    targets: ".cookie-dough-heading .cookie-dough-letters",
    rotateY: [-200, 0],
    duration: 1300,
    delay: function(el, i) {
      return 100 * i;
    }
  })
  //   For the word
  .add({
    targets: ".cookie-dough-heading",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });
