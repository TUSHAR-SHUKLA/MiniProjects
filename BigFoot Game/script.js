



function moveBigft(){

     alert("Woo you have won!! You found the bigfoot.");

    let picture = document.getElementById('img_bigft');

    let x= Math.random() * 300;
    let y= Math.random() * 300;

    picture.style.top= x + 'px';
    picture.style.left= y + 'px';

}