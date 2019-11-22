$(document).ready(function(){
  
var question = '';
var Magic8Ball = {};
var answer = '';
Magic8Ball.result = ['YES', 'NO', 'MAYBE', 'ASK LATER', 'NOT YET', 'SOON', 'UNSURE', 'DEFINITELY'];
$("#answer").hide();
var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};  
var giveAnswer = function(question){ 
    if (question !== '' && question !== null) {
      var number = getRandomInt(0,7);
      answer = Magic8Ball.result[number];
      $("#answer").text(answer);
      $("#answer").fadeIn(4000);
      $("#8ball").attr("src",'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
    }
    else {
      answer = "You did not ask a question!";
      $("#answer").text(answer);
      //console.log("You didn't ask a question!");
    }
};
  
var AMA = //setTimeout( 
    function() {
      $("#answer").hide();
      $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      $("#8ball").effect("shake");
      question = prompt("ASK A YES/NO QUESTION!");
      //$("#questionButton").click(giveAnswer);
      giveAnswer(question);
      };//,500);
  
$("#questionButton").click(AMA);

});