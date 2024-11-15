console.log("Welcome to Soptify");
let songIndex=0;
let audio =new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogress= document.getElementById('myProgressBar');
let gf=document.getElementById('gf');
let songItem= Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Cielo -Huma-huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "DEAF KEV", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Different Heaven & EHIDE", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    
]
songItem.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("sonename")[0].innerText= songs[i].songName;

})
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gf.style.opacity=1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gf.style.opacity=0;

    }
})
audio.addEventListener('timeupdate',()=>{
    progress= parseInt((audio.currentTime/audio.duration)*100);
    myprogress.value= progress;

})
myprogress.addEventListener('change',()=>{
    audio.currentTime= myprogress.value*audio.duration/100;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audio.src= 'songs/$(index).mp3';
        audio.currentTime=0;
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        
    })

})

