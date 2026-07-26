// ==========================
// MIKA HUB Premium Script
// ==========================

// Mobile Menu Close
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link=>{
link.addEventListener("click",()=>{
menuToggle.checked=false;
});
});

// Navbar Shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
header.style.background="rgba(5,8,22,.95)";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";
}else{
header.style.background="rgba(10,20,40,.7)";
header.style.boxShadow="none";
}

});

// Fade Animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".course-card,.review-card,.about,.contact").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});

// Floating Effect
document.addEventListener("mousemove",(e)=>{

const circles=document.querySelectorAll(".circle");

circles.forEach((circle,index)=>{

const speed=(index+1)*15;

circle.style.transform=
`translate(${e.clientX/speed}px,${e.clientY/speed}px)`;

});

});
