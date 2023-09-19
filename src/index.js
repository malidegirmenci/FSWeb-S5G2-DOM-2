import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
const imgs = document.querySelectorAll(".content-section img");

imgs.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.style["transform"] = "scale(1.2)";
        img.style["transition"] = "0.5s ease-in-out";
    });
    img.addEventListener("mouseleave", () => {
        img.style["transform"] = "scale(1)";
        img.style["transition"] = "0.5s ease-in-out";
    });
});

//mousedown & mouseUp
const h2 = document.querySelector(".content-section .text-content h2")
const buH2 = h2.textContent;
h2.addEventListener("mousedown", () => {
    h2.textContent = "Nereye gidiyon iş var iş"
})
h2.addEventListener("mouseup",()=>{
    h2.textContent = buH2;
})

//doubleclick
const imgContainer = document.querySelector(".intro");
const headLineImg = document.querySelector(".intro img");
imgContainer.style["overflow"] = "hidden";
imgContainer.style["display"] = "flex";
imgContainer.style["height"] = "350px";

let currentPosition = 0;

headLineImg.addEventListener("dblclick",
function moveImage(){
    currentPosition += 2;
    headLineImg.style.transform = `translateX(${currentPosition}px)`;
    if(currentPosition < -headLineImg.innerWidth){
        currentPosition = window.innerWidth;
    }
    requestAnimationFrame(moveImage)
});

