song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    
}

function setup() {
    canvas = createCanvas(600 ,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video ,ModelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function ModelLoaded() {
    console.log("PoseNet Is Initialized");
}

function draw() {
    image(video ,0 ,0 ,600 ,500);
    fill('#800000');
    stroke('#800000');
    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume" + volume;
    }
}

function play() 
{
    song.play();
}

function gotPoses(results) 
{
      if (results.length > 0) 
      {
          console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;
          console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

          rightWristX = results[0].pose.rightWrist.x;
          rightWristY = results[0].pose.rightWrist.y;
          console.log("rightWristX = "+rightWristX+"rightWristY"+rightWristY);     
      }
}
