// typing animation

const text = "Hi, I'm Niraj Mhatre";
let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;

setTimeout(typeWriter,80);

}

}

typeWriter();


// smooth scroll

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});

});

});


// dark mode toggle

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {

document.body.classList.toggle("light-mode");

};
