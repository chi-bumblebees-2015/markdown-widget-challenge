function Text(ascii) {
  this.ascii = ascii;
};

Text.prototype.convertToMarkdown = function(ascii) {
  var output = ascii.replace(/\*/, handleItalics() );
  return output;
};

Text.prototype.Markdown = function() {
  return this.convertToMarkdown(this.ascii);
};

//Updates the View
var displayText = function(ascii) {
  $("#awesome").html(ascii);
}

var italics_mode = false

var handleItalics = function() {
  if (italics_mode) {
    italics_mode = false;
    return "</em>";
  }
  else
  {
    italics_mode = true;
    return "<em>";
  }
};

$(document).ready(function() {
  //Controller
  $("#boring").keyup(function() {
    var ascii = $("textarea").val();
    var text = new Text(ascii);
    displayText(text.Markdown());
  });
});

// I want to grab the html inside of a textarea, and then essentially append it to the bottom of the HTMl.,


//Model: Textarea

//Viewer?Controller: keyup

//Viewer: HTML document
