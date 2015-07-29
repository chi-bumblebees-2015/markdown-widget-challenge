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
    var bold_counter = 0;
    var bold_counter2 = 0;
    var italic_counter = 0;
    var italic_counter2 = 0;
    for(var i=0; i < text_array.length; i++){
      var current_char = text_array[i];

      if(current_char === "*" && text_array[i + 1] === "*" && bold_counter === 0){
        text_array[i] = "<str";
        text_array[i+1] = "ong>";
        bold_counter = 1;
      }
      else if(current_char === "*" && text_array[i + 1] === "*" && bold_counter === 1){
        text_array[i] = "</str";
        text_array[i+1] = "ong>";
        bold_counter = 0;
      }

      else if(current_char === "_" && text_array[i + 1] === "_" && bold_counter2 === 0){
        text_array[i] = "<str";
        text_array[i+1] = "ong>";
        bold_counter2 = 1;
      }
      else if(current_char === "_" && text_array[i + 1] === "_" && bold_counter2 === 1){
        text_array[i] = "</str";
        text_array[i+1] = "ong>";
        bold_counter2 = 0;
      }

      else if(current_char === "*" && text_array[i + 1] != "*" && italic_counter === 0){
        text_array[i] = "<i>";
        italic_counter = 1;
      }
      else if(current_char === "*" && text_array[i + 1] != "*" && italic_counter === 1){
        text_array[i] = "</i>";
        italic_counter = 0;
      }

      else if(current_char === "_" && text_array[i + 1] != "_" && italic_counter2 === 0){
        text_array[i] = "<i>";
        italic_counter2 = 1;
      }
      else if(current_char === "_" && text_array[i + 1] != "_" && italic_counter2 === 1){
        text_array[i] = "</i>";
        italic_counter2 = 0;
      }



    }

    //convertback to string
    transformed_text = text_array.join("");

    //put in preview
    preview.html(transformed_text);
  });

}
