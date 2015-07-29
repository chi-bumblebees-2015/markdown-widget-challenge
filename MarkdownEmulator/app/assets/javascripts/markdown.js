$(document).ready(function(){

  $("#md-button").on("click", function(e){
    e.preventDefault();
    $("#output-space").html("");
    var input = $("#formatted-input").val();
    var boldInput = input.match(/(\*\*|\_\_)(.+)(\*\*|\_\_)/g);
  });
});


// $(document).ready(function(){

//   $("#md-button").on("click", function(e){
//     e.preventDefault();
//     $("#output-space").html("");
//     var input = $("#formatted-input").val();
//     var firstChar = input.charAt(0);
//     var lastChar = input.charAt(input.length - 1);
//     var secondChar = input.charAt(1);
//     var slastChar = input.charAt(input.length - 2);

//     if ((secondChar ===  "*" && slastChar === "*") || (secondChar ===  "_" && slastChar === "_"))
//     {
//       var output = input.slice(2, -2);
//       $("#output-space").removeClass("italics");
//       $("#output-space").append(output).addClass("bold");
//     }
//     else if((firstChar ===  "*" && lastChar === "*") || (firstChar ===  "_" && lastChar === "_"))
//     {
//       var output = input.slice(1, -1);
//       $("#output-space").removeClass("bold");
//       $("#output-space").append(output).addClass("italics");
//     }
//     else
//     {
//      $("#output-space").append("YOU DONE MESSED UP A-A RON!").css("color", "red")
//     }

//   });
// });

// function MarkdownWidget(input, output)
// {
//   this.input = input;
//   this.output = output;
// }

// function createWidget(input, ouput)
// {
//   return new MarkdownWidget(input, output);
// }

// MarkdownWidget.prototype.makeBold = function()
// {

// }

// MarkdownWidget.prototype.makeItalicized = function()
// {

// }


// $(document).ready(function(){
//   $("#md-button").on("click", function(){
//     var widget = new createWidget($("#formattedInput"), $("#markdown-output"))
//   });
// });
