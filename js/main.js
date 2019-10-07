(()=>{
    console.log('fired!');
    let numbers = document.querySelector("img");

function loggin(){
    var x = event.clientX 
    // console.log(x)
    var newX = x/16
    var roundedX = Math.floor(newX)
    console.log(roundedX)



    numbers.src = `images/FramesCube/CubeFrame${roundedX}.png`;
    
}
    addEventListener("mousemove", loggin)

})();