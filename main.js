let tTop=document.getElementById("top")
document.getElementById("hamIcon").addEventListener('click',()=>{
    document.getElementById("ul").style.display="flex";
})
document.getElementById("hamIcon").addEventListener('dblclick',()=>{
    document.getElementById("ul").style.display="none";
})

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    tTop.style.display = "block";
  } else {
    tTop.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }