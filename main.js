video = "" ;
status = "" ;


   function preload(){
        video = createVideo('video.mp4');
        
    }

    function setup() {
     video = createCapture(VIDEO);
     vidoe.size(500, 300);


     canavs = createCanvas(550,550);
     canvas.position(500,100);
    }



function gotResult(error,results){
    if (error) {
        console.log(error);
        objects = results;
    }
    console.log(results);
    }
    function start()
 {
 objectDetector = ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
 getElementById("(～￣▽￣)～").value;

 }





function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    
}