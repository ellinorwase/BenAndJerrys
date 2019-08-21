function checkForVisibility() {
    let images = document.querySelectorAll("img");
    images.forEach(function(image) {
      if (isPicInViewport(image)) {
        image.classList.add("pic-slide");
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