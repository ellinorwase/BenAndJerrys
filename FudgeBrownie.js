anime
  .timeline({ loop: true })
  .add({
    targets: ".h1-fudge-brownie .h1-letters",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i + 1);
    }
  })
  .add({
    targets: ".h1-fudge-brownie",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  let hoverPic = document.querySelector(".fudge-brownie-pic").addEventListener("mouseenter", performAction);

  if (hoverPic = true) {
    function performAction() {
        document.querySelector(".fudge-brownie").classList.add("fudge-brownie-after-hover");
        document.querySelector(".fudge-brownie-pic").classList.add("fudge-brownie-pic-after-hover");   
  }}else{
        document.querySelector(".fudge-brownie").classList.remove("fudge-brownie-after-hover");
        document.querySelector(".fudge-brownie-pic").classList.remove("fudge-brownie-pic-after-hover");
  }