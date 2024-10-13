var playing=false;
var score;
var trialsLeft;
var fruits=['apple','banana','cherries','grapes','mango','papaya','pear','pineapple','watermelon'];
var step;
var action;//set interval
$(function(){
    //click on start reset button
    $("#startreset").click(function(){
        //we are playing
        if(playing==true){
             //reload thr page
             location.reload();

        }
        else{
        //we are not playing
        playing=true;//game initiated

        //set score to 0
        score=0;
        $("#scorevalue").html(score);

        //show trials left
        $("#trialsLeft").show();
        trialsLeft=3;
       addHearts();
       //hide game over box
       $("#gameOver").hide();
        //change the button text to "reset game"
     $("#startreset").html("Reset Game");
     //start sendind fruits
     startAction();
        }

    });
    $("#fruit1").mouseover(function(){
      score++;
      $("#scorevalue").html(score);//update score

     // document.getElementById("slicesound").play();
     $("#slicesound")[0].play();//play sound

     //stop fruit 
   clearInterval(action);
   //hide the fruit
   $("#fruit1").hide("explode",500);//slice fruit

     //send new fruit
     setTimeout(startAction,500);
    });

//slice a fruit.
    //play sound
    //explore fruit           
    
    //function
    function addHearts(){
    $("#trialsLeft").empty();
    for(i=0;i<trialsLeft;i++){
        $("#trialsLeft").append('<img src="heart.png" class="life">');
    }
}

//start sending fruits

function startAction(){
     //generating a fruit
     $("#fruit1").show();
     chooseFruit();//chose a random fruit
  $("#fruit1").css({'left' :Math.round(550*Math.random()),'top':-50});//randkom position

            //generate random step
            step = 1+ Math.round(5*Math.random())//change step
          


   
//move fruit down by one step every 10ms
action=setInterval(function(){

    //move fruit down by one step
    $("#fruit1").css('top',$("#fruit1").position().top + step);


        // check if the fruit is too low
        if($("#fruit1").position().top>$("#fruitsContainer").height()){

        //check if we have trials left
        if(trialsLeft>1){
            //generating a fruit
           $("#fruit1").show();
           chooseFruit();//chose a random fruit
        $("#fruit1").css({'left' :Math.round(550*Math.random()),'top':-50});//randkom position

          //generate random step
          step = 1+ Math.round(5*Math.random())//change step
          
          //reduce trials by 1
          trialsLeft--;

          //populate trialsleft box
            addHearts();
        }
         else{
            //game over
            playing=false;//we are not playing anymore
            $("#startreset").html("Start Game")//change button to start game
            $("#gameOver").show();
            $("#gameOver").html('<p> Game Over!</p> <p> Your score is '+ score +' </p>');
            $("#trialsLeft").hide();
            stopAction();
         }
    }
},10);
}

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src',fruits[Math.round(8*Math.random())]+'.png')
}

//stop dropping fruits

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});