/* DARK / LIGHT MODE */

const toggle = document.getElementById("themeToggle")

toggle.onclick = () => {
document.body.classList.toggle("light-mode")
}

/* PARTICLES BACKGROUND */

particlesJS("particles-js", {
particles: {
number: {
value: 80,
density: {
enable: true,
value_area: 800
}
},

color: {
value: "#6366f1"
},

shape: {
type: "circle"
},

opacity: {
value: 0.5
},

size: {
value: 3
},

line_linked: {
enable: true,
distance: 150,
color: "#6366f1",
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 3
}
},

interactivity: {
events: {
onhover: {
enable: true,
mode: "grab"
}
},

modes: {
grab: {
distance: 140,
line_linked: {
opacity: 1
}
}
}
},

retina_detect: true
})
