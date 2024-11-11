const video=document.getElementById('video');
const callback=(entreies)=>{
    entries.forEach(entry => {
        if (entry.isIntersecing){
            video.play();
} else{
    video.pause();
}
    });
     };
     const observer=new IntersectionObserver(callback,{
        thereshold: 0.5
     });