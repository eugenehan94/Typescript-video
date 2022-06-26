const btn = document.querySelector<HTMLButtonElement>(".switch-btn");
const video = document.querySelector<HTMLVideoElement>(".video-container");

btn?.addEventListener("click", () => {
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video?.pause();
    }else{
        btn.classList.remove("slide");
        video?.play();
    }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader?.classList.add("hide-preloader")
})

export {}