canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_img = "mars.jpg";
rover_img = "rover.png";

rover_height = 250;
rover_width = 250;

rover_xpos = 10;
rover_ypos = 10;

function add(){

    background_img_all = new Image();
    background_img_all.onload = upload_background;
    background_img_all.src = background_img;

    rover_img_all = new Image();
    rover_img_all.onload = upload_rover;
    rover_img_all.src = rover_img;
    

}


function upload_background(){
    ctx.drawImage(background_img_all,0,0,canvas.width,canvas.height);
}


function upload_rover(){
    ctx.drawImage(rover_img_all,rover_xpos,rover_ypos,rover_width,rover_height);
}