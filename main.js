noseX = 0;
noseY = 0;
diff = 0;
rightwristX = 0;
leftwristX = 0;


function setup()
{
camera = createCapture(VIDEO)
camera.size(550,500)

canvas = createCanvas(550,500)
canvas.position(560,150)

poseNet = ml5.poseNet(camera, modelLoaded)
poseNet.on('pose', gotPoses )

}

function modelLoaded(){
console.log("Yes.")
}

function gotPoses(results){
if(results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log(noseX, noseY)
    rightwristX = results[0].pose.rightWrist.x
    leftwristX = results[0].pose.leftWrist.x
    console.log(rightwristX, leftwristX)
    diff = floor(leftwristX - rightwristX)

    console.log(diff)
}
}



function preload(){

}

function draw(){
 
  background("#376c78")
  fill('white')
  stroke('black')
  textSize(diff)
  text("john", noseX,noseY)
  document.getElementById("square").innerHTML = "Current Font Size: " + diff + "px"


}