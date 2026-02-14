// Dark Mode
document.getElementById("darkToggle").onclick=function(){
document.body.classList.toggle("dark");
};

// Reveal Animation
const reveals=document.querySelectorAll(".language");
window.addEventListener("scroll",()=>{
reveals.forEach(r=>{
const top=r.getBoundingClientRect().top;
if(top<window.innerHeight-100){r.classList.add("show");}
});
});

// Counters
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
counter.innerText="0";
const update=()=>{
const target=+counter.getAttribute("data-target");
const c=+counter.innerText;
const inc=target/100;
if(c<target){counter.innerText=Math.ceil(c+inc);setTimeout(update,20);}
else{counter.innerText=target;}
};
update();
});

// Payment Modal
document.querySelectorAll(".payBtn").forEach(btn=>{
btn.onclick=()=>{document.getElementById("paymentModal").style.display="flex";}
});
function closeModal(){
document.getElementById("paymentModal").style.display="none";
}

// Form
document.getElementById("form").addEventListener("submit",function(e){
e.preventDefault();
alert("Registration Successful! 🎉 We will contact you soon.");
});