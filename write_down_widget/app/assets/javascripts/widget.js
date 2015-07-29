// model
var Statement = function(input, output) {
  this.input = input;
  this.output = output;
};

Statement.prototype.processDoubleStarInput = function(data){
  var boldRegexGlobal = /(\*\*)(.[^\*\*]*)(\*\*)/g;
  return data.replace(boldRegexGlobal, function(match, p1, p2){
    return "<strong>" + p2 + "</strong>";
  }); // closes replace
};

Statement.prototype.processSingleStarInput = function(data){
  var starRegexGlobal = /(\*)(.[^\*]*)(\*)/g;
  return data.replace(starRegexGlobal, function(match, p1, p2){
    return "<em>" + p2 + "</em>";
  }); // closes replace
};

Statement.prototype.processUnderscoreInput = function(data){
  var underscoreRegexGlobal = /(\_)(.[^\_]*)(\_)/g;
  return data.replace(underscoreRegexGlobal, function(match, p1, p2){
    return "<em>" + p2 + "</em>";
  }); // closes replace
};

Statement.prototype.markdown_parser = function(){
  var data = this.input
  data = this.processDoubleStarInput(data);
  data = this.processSingleStarInput(data);
  this.output = this.processUnderscoreInput(data);
}; // closes markdown_parser



// controler
var statement_controller = function(element, model){
  model.input = element.find('#user-input').val();
  model.markdown_parser();
  element.find('#display').html(model.output);
}; // closes controler



// view
$(document).ready(function(){
 var statement = new Statement("","")
  $("#widget").on('keyup', function(){
    statement_controller($(this), statement);
  }); // closes keyup
}); // closes ready


