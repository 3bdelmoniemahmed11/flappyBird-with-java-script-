let canvas=document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//load images
let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth= new Image();
let pipeSouth= new Image();
bird.src="../images/bird.png";
bg.src="../images/bg.png";
fg.src="../images/fg.png";
pipeNorth.src="../images/pipeNorth.png";
pipeSouth.src="../images/pipeSouth.png";
//draw images
function draw()
{
    ctx.drawImage(bg,0,0);
    ctx.drawImage(pipeNorth,100,0);
}
draw();


