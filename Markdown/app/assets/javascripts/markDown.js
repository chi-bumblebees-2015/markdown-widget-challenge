
function MarkDownWidget(source, destination){
  this.source = source;
  this.destination = destination;
}

MarkDownWidget.prototype.stylize = function(character){
  var value = $(this.source).val();
  var boldMatch = value.match(/\*\*(...)+\**\ /);
  var italicsMatch = value.match(/\_[^_]+\_\ /);
  if (boldMatch) {
    var boldWord = boldMatch[0].slice(2,-3);
    return "<b>"+boldWord+"</b>";
  }
  else if (italicsMatch) {
    var italicsWord = italicsMatch[0].slice(1,-2);
    return "<i>"+italicsWord+"</i>";
  } else {
    return character;
  }
}

function MarkDownView(model){
  this.model = model;
}

MarkDownView.prototype.populate = function(){
  var keyStroke = $(this.model.source).val();
  var longShot = this.model.stylize(keyStroke);

  $(this.model.destination).html(longShot);
}



$(function(){
  var widget = new MarkDownWidget("#source-id", "#preview-div");
  var widgetView = new MarkDownView(widget);
  $(widget.source).on("keyup", function(event){
    widgetView.populate();
  });

});
