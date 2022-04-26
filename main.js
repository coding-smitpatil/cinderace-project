x=0;
y=0;

drawcircle ="";
drawrect ="";

var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function preload(){
        pokemon=loadImage("cinderacepokemon.png");
}


function start(){
    document.getElementById("status").innerHTML="please speak out the pokemon's name";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="drawing a "+ content;
    if(content=="Pokemon")
    {x=Math.floor(Math.random()*900);
     y=Math.floor(Math.random()*600);
     drawcircle="set";
    }
   
    }

    function setup(){
        canvas=createCanvas(900,600);
    }

    function draw(){
        if(drawcircle=="set")
        {
            image(pokemon,x,y,50,50);
            document.getElementById("status").innerHTML="pokemon is drawn";
            drawcircle="";
        }

       
    }