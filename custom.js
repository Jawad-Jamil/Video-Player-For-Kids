let pics = [
"gifs/gif5.gif",
"gifs/gif4.gif",
"gifs/gif3.gif",
]

let imgTag = document.querySelector('#gif_img');

let number = 0;

function next(){
    number++;

    if (number>=pics.length) {
        number = 0;
    }

    imgTag.src = pics[number];
}


setInterval(next,4000)

function prev() {
    number--

    if (number<0) {
        number = pics.length-1;
    }

    imgTag.src = pics[number];
}


let all_video = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4",
    "videos/video6.mp4",
    "videos/video7.mp4",
    "videos/video8.mp4",
    "videos/video9.mp4",
]


let VideoTag = document.querySelector('#myVid');

let count = 0;

function nextVideo(){
    count++;

    if (count>=all_video.length) {
        count = 0;
    }

    VideoTag.src = all_video[count];
}

function prevVideo() {
    count--

    if (count<0) {
        count = all_video.length-1;
    }

    VideoTag.src = all_video[count];
}



let MyVideo = document.getElementById("myVid")
let poster = document.querySelector(".overly_poster")
let play_btn = document.getElementById("playPause_btn")

function playPause() {
    if (MyVideo.paused) {
        MyVideo.play()
        poster.setAttribute("style", "visibility: hidden; transition:.2s;");
        play_btn.classList.remove('fa-play-circle');
        play_btn.classList.add('fa-pause-circle');
        play_btn.setAttribute("style", "padding-top: 50px; transition:.2s; opacity:0;")
        
    } else if (MyVideo.played) {
        MyVideo.pause()
        poster.style.display = "inline-block";
        poster.setAttribute("style", "visibility: visible; transition:.2s;");
        play_btn.classList.remove('fa-pause-circle');
        play_btn.classList.add('fa-play-circle');
        play_btn.setAttribute("style", "padding-top: 0px; transition:.2s; opacity:1;")
    }

}

// function display_overly() {
//     poster.setAttribute("style", "visibility: visible; transition:.2s;");
//     play_btn.setAttribute("style", "padding-top: 0px; transition:.2s; opacity:1;")
// }

function hiding() {
    poster.setAttribute("style", "visibility: hidden; transition:.2s;");
    play_btn.setAttribute("style", "opacity:0;")
}
