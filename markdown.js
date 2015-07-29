function Text(ascii) {
  this.ascii = ascii;
};

Text.prototype.convertToMarkdown = function(ascii) {
  var strongOutput = handleStrong(ascii);
  var italicOutput = handleItalics(strongOutput);
  return italicOutput;
};

Text.prototype.Markdown = function() {
  return this.convertToMarkdown(this.ascii);
};

var displayText = function(ascii) {
  console.log(ascii);
  $("#awesome").html(ascii);
}

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
};


String.prototype.replaceDoubleIndexAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    a[index+1] = "";
    return a.join("");
};

var handleStrong = function(ascii) {
  var strongMode = 1;
  var lookup = ascii.search(/\*\*/);
  for (i = lookup; i > -1; i = ascii.search(/\*\*/)) {
  if (strongMode % 2 === 0) {
    var tag = "</strong>";
  }
  else
  {
    var tag = "<strong>";
  }
  strongMode++;
  var ascii = ascii.replaceDoubleIndexAt(i, tag) };
  return ascii;
};

var handleItalics = function(ascii) {
  var italics_mode = 1;
  var lookup = ascii.search(/\*|\_/);
  for (i = lookup; i > -1; i = ascii.search(/\*/)) {
  if (italics_mode % 2 === 0) {
    var tag = "</em>";
  }
  else
  {
    var tag = "<em>";
  }
  italics_mode++;
  var ascii = ascii.replaceAt(i, tag) };
  return ascii;
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
