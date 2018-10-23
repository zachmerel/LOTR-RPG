$(document).ready(function() {
//Set Character HP
var gandalfHP = 180;
var legolasHP = 150;
var gimliHP = 120;
var gollumHP = 100;

//push HP to HTML
$('#gandalfHP').append(gandalfHP);
$('#gimliHP').append(gimliHP);
$('#legolasHP').append(legolasHP);
$('#gollumHP').append(gollumHP);

var gandalfCT = $("#gandalfCT");
var gimliCT = $("#gimliCT");
var gollumCT = $("#gollumCT");
var legolasCT = $("#legolasCT");
//on-click function to choose Gandalf as your character
$("#gandalfpic").on("click", function(){
  
    $('#your-character').append(gandalfCT);
    $('#enemies-avaliable-to-attack').append(gimliCT, gollumCT, legolasCT);
});
})