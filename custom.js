let pics = [
"gifs/gif5.gif",
"gifs/gif4.gif",
"gifs/gif3.gif",
]

let imgTag = document.querySelector('img');

let number = 0;

function next(){
    number++;

    if (number>=pics.length) {
        number = 0;
    }

    imgTag.src = pics[number];
}


setInterval(next,4000)

console.log(pics);

function prev() {
    number--

    if (number<0) {
        number = pics.length-1;
    }

    imgTag.src = pics[number];
}