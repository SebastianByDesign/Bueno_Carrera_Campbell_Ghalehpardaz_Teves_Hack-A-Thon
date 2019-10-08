//Sidebar functionality(()=>{
  (()=>{  
    console.log('fired!');
    let numbers = document.querySelector(".InteractiveImage img");

function loggin(){
    var x = event.clientX 
    // console.log(x)
    var newX = x/16
    var roundedX = Math.floor(newX)
    console.log(roundedX)
    if (roundedX>90){
        return
    }



    numbers.src = `http://127.0.0.1:5500/images/FramesCube/MainComp_000${roundedX}.png`;
    
}
    addEventListener("mousemove", loggin);

    // function toggle() {
    //     document.getElementById("nav-toggler").classList.toggle("fa-times");
    //     document.getElementById("nav-toggler").classList.toggle("fa-bars");
    //     document.getElementById("sidebar").classList.toggle("active");
    // }
    
    // var openMenu = document.getElementById('nav-toggler');
    // openMenu.addEventListener("click", toggle);

})();



