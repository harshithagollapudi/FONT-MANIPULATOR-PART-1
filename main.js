function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);
    canvas = createCanvas(400,400);
    canvas.position(430,130);
    background("#6f9dde");
}