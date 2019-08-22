let clickFunction = document.getElementById("click-function");
clickFunction.onclick = function(){

    
    var animation = anime({
        targets: 'img.cookie-dough-pic',
        translateY: [
            {value: 200, duration: 500},
            {value: 0, duration: 500},
        ],
        rotate: {
            value: "1turn",
            easing: "easeInOutSine"
        },
        easing: 'easeInOutQuad',
        autoplay: false
    });
    
    function loop(t) {
        animation.tick(t);
        customRAF = requestAnimationFrame(loop);
    }
    
    requestAnimationFrame(loop);
}