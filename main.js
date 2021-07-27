function preload(){

}

function setup(params) {
    canvas = createCanvas(800, 600);
    canvas.position(110, 100);
    video = createCapture(VIDEO);
    video.hide();
    //1fl
    fill("#fff");
    translate(700, 500);
    noStroke();
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);}
    //1rt
    fill("#000");
    rect(-600, -18, 600, 40);
    //2rt
    fill("#000");
    rect(-600, -420, 600, 40);
    //3rt
    rect(-600, -420, 50, 420)
    //4rt
    rect(-25, -400, 50, 420)
    //2fl
    fill("#FFFFFF");
    translate(-0, -400);
    noStroke();
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);}
    //3fl
    fill("#FFFFFF");
    translate(-570, -0);
    noStroke();
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);}
    //3fl
    fill("#FFFFFF");
    translate(0,400);
    noStroke();
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);}
}

function draw() {
    image(video, 160, 120, 480, 360);
}

function take_snapshot(){
    save('PICTUREFRAME.png');
}