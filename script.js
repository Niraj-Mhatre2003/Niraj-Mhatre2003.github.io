// typing animation

const text = "Hi, I'm Niraj Mhatre";
let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;

setTimeout(typeWriter,70);

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


// Galton board animation background

const canvas = document.getElementById("galton");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<100;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();
