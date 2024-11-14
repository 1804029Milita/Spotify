console.log("Welcome to Soptify");
let songIndex=0;
let audio =new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogress= document.getElementById('myProgressBar');
let gf=document.getElementById('gf');

let songs=[
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"}
]

masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-play');
        gf.style.opacity=1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gf.style.opacity=0;

    }
})
audio.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audio.currentTime/audio.duration)*100)
    console.log(progress);
    myprogress.value= progress;

})