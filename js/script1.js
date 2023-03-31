window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
 if(document.body.scrollTop > 40 || documentElement.scrollTop > 40){
document.getElementById("myBtn").style.display = "block";
}else {
document.getElementById("myBtn").style.display = "none";
}
}
