
// Scroll button
document.getElementById("learnBtn").addEventListener("click",function(){
document.getElementById("skills").scrollIntoView({behavior:"smooth"});
});

// Menu toggle
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

menuBtn.onclick = ()=>{
navList.classList.toggle("show");
};

// Popup
const popup = document.getElementById("popup");

document.getElementById("joinBtn").onclick = ()=>{
popup.style.display = "flex";
};

function closePopup(){
popup.style.display = "none";
}

// Progress animation
window.addEventListener("scroll",()=>{

document.querySelectorAll(".progress span").forEach(bar=>{
let position = bar.getBoundingClientRect().top;

if(position < window.innerHeight){
bar.style.width = bar.dataset.value;
}
});

});
