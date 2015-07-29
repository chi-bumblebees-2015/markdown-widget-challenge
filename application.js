$(document).ready(function(){
  $("#source").on("keyup", function(){
    var text = $(this).val();
    $("#preview").text(text);
  });

  // $("body").css("background-color", "red")
});

