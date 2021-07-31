canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var roverwidth=100
    roverheight=90
var bImage="mars.jpg"
var rImage="rover.png"
var roverX=10 
roverY=10
function add(){
    bIMGtag=new Image()
    bIMGtag.onload=uploadBackground
    bIMGtag.src=bImage

    rIMGtag=new Image()
    rIMGtag.onload=uploadRover
    rIMGtag.src=rImage
}
function uploadBackground(){
    ctx.drawImage(bIMGtag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rIMGtag,roverX,roverY,roverwidth,roverheight)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    key=e.keyCode
    console.log(key)
    if(key=='38'){
        console.log("up")
    }
    if(key=='39'){
        console.log("right")
    }
    if(key=='37'){
        console.log("left")
    }
    if(key=='40'){
        console.log("down")
    }
}