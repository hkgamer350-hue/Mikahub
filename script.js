// ===========================
// MIKA HUB Premium Script
// ===========================

// Smooth Animation
const cards = document.querySelectorAll(".card,.feature-card");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.8s";
observer.observe(card);
});

// Premium Button Ripple
document.querySelectorAll(".btn,.card-btn").forEach(button=>{

button.addEventListener("click",function(e){

let circle=document.createElement("span");

circle.style.position="absolute";
circle.style.width="20px";
circle.style.height="20px";
circle.style.background="rgba(255,255,255,.5)";
circle.style.borderRadius="50%";
circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";
circle.style.transform="translate(-50%,-50%)";
circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{
circle.remove();
},600);

});

});

// Ripple Animation
const style=document.createElement("style");

style.innerHTML=`
.btn,.card-btn{
position:relative;
overflow:hidden;
}

@keyframes ripple{
from{
width:0;
height:0;
opacity:.8;
}
to{
width:400px;
height:400px;
opacity:0;
}
}
`;

document.head.appendChild(style);
