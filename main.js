righteyex = 0;
righteyey = 0;
leftwristX = 0;
rightwtistX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(450,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,450);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        righteyex = results[0].pose.rightEye.x;
        righteyey = results[0].pose.rightEye.y;
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }

}

function draw(){
    background("cyan");
    text('Ruhaan', righteyex, righteyey);
    fill("purple")
    textSize(difference);
    document.getElementById("font_size").innerHTML = "Font size of the text = " + difference;
}