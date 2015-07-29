$(document).ready(function() {

  var MarkdownWidget = function(input,output){
    input.on("keyup",function(event){
    var inputText = $(this).val();

    var nth = 1;
    inputText = inputText.replace(/\*{2}/g, function() {
      nth++;
      return (nth % 2 == 0) ? "<strong>" : "</strong>";
    });

    var nth = 1;
    inputText = inputText.replace(/\*{1}/g, function() {
      nth++;
      return (nth % 2 == 0) ? "<em>" : "</em>";
    });

    var nth = 1;
    inputText = inputText.replace(/\_{1}/g, function() {
      nth++;
      return (nth % 2 == 0) ? "<em>" : "</em>";
    });

    output.html(inputText);
    });
  };

  var input = $("#input");
  var output = $("#output");
  MarkdownWidget(input,output);

});
