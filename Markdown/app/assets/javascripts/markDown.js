
function MarkDownWidget(source, destination){
  this.source = source;
  this.destination = destination;
}



function MarkDownView(model){
  this.model = model;
}

MarkDownView.prototype.populate = function(){

  var keyStroke = $(this.model.source).val();
  $(this.model.destination).html(keyStroke);
}


$(function(){
  var widget = new MarkDownWidget("#source-id", "#preview-div");
  var widgetView = new MarkDownView(widget);

  $(widget.source).on("keyup", function(event){

    widgetView.populate();
  });

});
