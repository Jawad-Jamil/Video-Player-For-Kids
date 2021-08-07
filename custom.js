
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
let play_head = document.getElementById("play_h_text")
let range = document.querySelector("#rangeId");
let left_duration = document.querySelector(".left_duration");
let right_duration = document.querySelector(".right_duration");

range.addEventListener("change", VidSeek)
VideoTag.addEventListener("timeupdate", seektimeupdate)


function seektimeupdate() {
    let new_time = VideoTag.currentTime * (100/VideoTag.duration)
    range.value = new_time;
    left_duration.innerHTML = (VideoTag.currentTime/60);
    right_duration.innerHTML = (VideoTag.duration/60);
}


function VidSeek() {
    let seekto = VideoTag.duration * (range.value/100)
    VideoTag.currentTime = seekto;
    right_duration.innerHTML = VideoTag.duration;
}


function nexting() {
    VideoTag.currentTime+=3;
}

function previousing() {
    VideoTag.currentTime-=3;
}


let playPause2 = document.getElementById("playPause_btn2")

let count = 0;


window.onload = function() {
    if (playPause2.classList.contains("fa-play-circle")) {
        playPause2.classList.remove("fa-play-circle")
        playPause2.classList.add("fa-pause-circle")
    }
}

function nextVideo(){

    if (playPause2.classList.contains("fa-play-circle")) {
        playPause2.classList.remove("fa-play-circle")
        playPause2.classList.add("fa-pause-circle")
    }

    poster.setAttribute("style", "visibility: hidden; transition:.2s;");
    play_btn.setAttribute("style", "opacity:0;")

    count++;

    if (count>=all_video.length) {
        count = 0;
    }

    VideoTag.src = all_video[count];
    play_head.innerHTML = 'Siraj | Ep-'+[count+1]
}


function prevVideo() {

    if (playPause2.classList.contains("fa-play-circle")) {
        playPause2.classList.remove("fa-play-circle")
        playPause2.classList.add("fa-pause-circle")
    }
    poster.setAttribute("style", "visibility: hidden; transition:.2s;");
    play_btn.setAttribute("style", "opacity:0;")

    count--

    if (count<0) {
        count = all_video.length-1;
    }

    VideoTag.src = all_video[count];
}


let poster = document.querySelector(".overly_video")
let play_btn = document.getElementById("playPause_btn")
let VideoTags = document.getElementById('myVid');

function playPause() {
    if (VideoTag.paused) {
        VideoTag.play()
        poster.setAttribute("style", "visibility: hidden; transition:.2s;");
        play_btn.classList.remove('fa-play-circle');
        play_btn.classList.add('fa-pause-circle');
        play_btn.setAttribute("style", "padding-top: 50px; transition:.2s; opacity:0;")
        
    } else if (VideoTag.played) {
        VideoTag.pause()
        poster.style.display = "inline-block";
        poster.setAttribute("style", "visibility: visible; transition:.2s;");
        play_btn.classList.remove('fa-pause-circle');
        play_btn.classList.add('fa-play-circle');
        play_btn.setAttribute("style", "padding-top: 0px; transition:.2s; opacity:1;")
    }

    if (VideoTags.played) {
        playPause2.classList.remove('fa-play-circle');
        playPause2.classList.add('fa-pause-circle');
    }
    
    if (VideoTags.paused) {
        playPause2.classList.remove('fa-pause-circle');
        playPause2.classList.add('fa-play-circle');
    }


}


let favorate = document.querySelector("#fav_icon");

favorate.addEventListener("click", function() {
    favorate.classList.toggle("fas")
    favorate.classList.toggle("fav_icon")
});



function play_page() {
    document.getElementById("container").style.display='none';
    document.getElementById("container_play").style.display='block';
}


function home() {
    document.querySelector('#myVid').src='#'
    document.getElementById("container").style.display='flex';
    document.getElementById("container_play").style.display='none';
}


// function display_overly() {
//     poster.setAttribute("style", "visibility: visible; transition:.2s;");
//     play_btn.setAttribute("style", "padding-top: 0px; transition:.2s; opacity:1;")
// }
