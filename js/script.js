const BODY = document.querySelector('body'); //scrolling
const HTML = document.querySelector('html');
const kebabBtn = document.querySelector('.kebab_ico');
const fixedTop = document.querySelector('.fixedTop');

window.addEventListener('scroll', function(){
    let i = this.document.documentElement.scrollTop;

    console.log(i);
    if (i > 250) {
        BODY.classList.add('scrolling');
    } else {
        BODY.classList.remove('scrolling');
    }
});

fixedTop.addEventListener('click', function(){
    window.scrollTo({
        top :0,
        behavior: 'smooth'
    });
});

// mobBtn click Event

kebabBtn.addEventListener('click', function(e) {
    e.preventDefault(); //클릭했을때 위치가 변하는 것을 막아준다

    BODY.classList.toggle('mobNav');

    if(BODY.classList.contains('mobNav')) {
        HTML.style.overflow = "hidden";
        HTML.style.paddingRight = "17px";
    } else {
        HTML.style.overflowY = "visible";
        HTML.style.paddingRight = 0;
    }

    function resize() {
        HTML.style.overflowY = "visible";
        HTML.style.paddingRight = 0;

        BODY.classList.remove('mobNav');
    }

    window.addEventListener('resize', function() {
        if(this.window.innerWidth > 999) {
            resize();
        }
    });
});