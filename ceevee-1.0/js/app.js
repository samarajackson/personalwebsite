$(document).ready(function () {

//function addRow() {    
    //var myName = document.getElementById("name");
    //var age = document.getElementById("age");
    //var table = document.getElementById("myTableData");
    //var rowCount = table.rows.length;
    //var row = table.insertRow(rowCount);
   // row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
   // row.insertCell(1).innerHTML= myName.value;
   // row.insertCell(2).innerHTML= age.value;
//}

//function deleteRow(obj) {
    //var index = obj.parentNode.parentNode.rowIndex;
    //var table = document.getElementById("myTableData");
    //table.deleteRow(index);
//}

//function addTable() {
    //var myTableDiv = document.getElementById("myDynamicTable");
    //var table = document.createElement('TABLE');
    //table.border='1';
    //var tableBody = document.createElement('TBODY');
    //table.appendChild(tableBody);
     
    //for (var i=0; i<3; i++){
      // var tr = document.createElement('TR');
      // tableBody.appendChild(tr);
      
       //for (var j=0; j<4; j++){
           //var td = document.createElement('TD');
           //td.width='75';
           //td.appendChild(document.createTextNode("Cell " + i + "," + j));
          // tr.appendChild(td);
      // }
   // }
   // myTableDiv.appendChild(table);
   
//}

//function load() {  
    //console.log("Page load finished");
//}
var Magic8Ball = {};
var answer = '';
var questiontable = [];
Magic8Ball.result = ['Yes', 'No', 'Perhaps', 'ASK LATER', 'Doubtful', 'Most likely', 'UNSURE', 'DEFINITELY'];
$("#answer").hide();

//Functions used
var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}; 
var AMA = function() {
    setback();
    var shakeit = function(){$("#8ball").effect('shake',{times:4},1000)};
    question = $('#question').val();
    shakeit();
    setTimeout(function(){giveAnswer(question)},1500);
};
var giveAnswer =  function(question){ 
    var check = questiontable.indexOf(question);
    console.log(check);
    questiontable.push(question);
    if (check >= 0 ){
        $('#question').val("Ask Me a Different Question.")
    }
    else if (question !== '' && question !== null && question !="Ask Me a Question Here!") {
      var number = getRandomInt(0,7);
      answer = Magic8Ball.result[number];
      $("#answer").text(answer);
      $("#answer").fadeIn(5000);
      $("#8ball").attr("src",'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
    }
    else {
      $('#question').val("Ask Me a Question Here!")
      //console.log("You didn't ask a question!");
    }
};
var setback = function(){
  $("#answer").hide();
  $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
};

//code

$("#questionButton").click(AMA);

});