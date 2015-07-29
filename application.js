$(document).ready(function(){

  MarkDownWidget("#source","#preview")
});

function MarkDownWidget(source_id, preview_id){
  var source = $(source_id);
  var preview = $(preview_id);
  source.on("keyup", function(){
    var text = $(this).val();

    //convert text to array
    var text_array = text.split("");

    //iterate through text and change * to <i> or </i>
    var counter = 0;
    for(var i=0; i < text_array.length; i++){
      var current_char = text_array[i];

      if(current_char === "*" && counter === 0){
        text_array[i] = "<i>";
        counter = 1;
      }
      else if(current_char === "*" && counter === 1){
        text_array[i] = "</i>";
        counter = 0;
      }
    }

    //convertback to string
    transformed_text = text_array.join("");

    //put in preview
    preview.html(transformed_text);
  });

}
