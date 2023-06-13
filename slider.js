let flag = 0;
let slides = document.getElementsByClassName('slide');
let len = slides.length;

function slideshow(num){
    if(num==len){
        num = 0;
        flag = 0;
    }
    if(num == -1){
        num = len-1;
        flag = len-1;
    }
    slides[num].style.display = 'block';
}

function slidestop(num){
    slides[num].style.display = 'none';
}

function controller(x){
    slidestop(flag)
    flag = flag+x;
    slideshow(flag);
}
slides[0].style.display = 'block';