
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

//mouserover && wheel

const lastImg = document.querySelector(".content-destination img");

lastImg.addEventListener("dblclick",(e) => {
    if(lastImg.className === "clicked"){
        e.target.style.transform = "scale(1.0)";
    }else{
        lastImg.classList.toggle("clicked")
        e.target.addEventListener("wheel",(e) => {
            e.target.style.transform = "scale(1.1)";
            })
    }
});

//Scroll && click
const scrollTopBtn = document.createElement("button");
scrollTopBtn.style.display = "none";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "30px";
scrollTopBtn.style["z-index"] = "99";
scrollTopBtn.style["font-size"] = "1rem";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.outline = "none";
scrollTopBtn.style.background = "red";
scrollTopBtn.style.color = "white";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.padding = "15px";
scrollTopBtn.style["border-radius"] = "4px";
scrollTopBtn.textContent = "TOP";
document.body.append(scrollTopBtn);

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

scrollTopBtn.addEventListener("click", topFunction);

function scrollTop(){
    if(document.body.scrollTop > document.body.scrollHeight - 750 || document.documentElement.scrollTop > document.documentElement.scrollHeight - 750){
        scrollTopBtn.style.display = "block";
    }else{
        scrollTopBtn.style.display = "none";
    }
}
window.onscroll = function() {scrollTop()};


//load

const allImg = document.querySelectorAll("img");
allImg.forEach((img) => {
    img.addEventListener("load", () => {
        console.log("Loaded img"+img.alt)
    });
});

