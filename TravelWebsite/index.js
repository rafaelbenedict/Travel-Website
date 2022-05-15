/* Slider */

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);

/* Hamburger */
function openMenu(){
    document.getElementById("Menu").style.height = "100%"
}

function closeMenu(){
    document.getElementById("Menu").style.height = "0%"
}
