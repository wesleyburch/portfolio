
// JavaScript
window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });

function toggleHide(){
  hiddenText = document.getElementsByClassName("hidden");
  if(hiddenText.style.visibility === "hidden"){
    hiddenText.style.visibility = "visible";
  } else {
    hiddenText.style.display = "hidden"
  }
}