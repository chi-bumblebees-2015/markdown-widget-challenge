// function that takes text from a div, and returns that text in a new div as markup

function MarkdownWidget(text_source, preview_div) {
  this.text_source = $(text_source)
  this.preview_div = $(preview_div)
  this.text_content = function(){
    return this.text_source.val()
  }

  var widget = this
  this.pos = 0
  widget.text_source.keyup(function(){
    // text = widget.make_markup(widget.text_content(), "*", "b")
    text = widget.make_markup(widget.text_content(), "#", "h1")
    // text = widget.make_markup(widget.text_content(), "_", "i")
    widget.preview_div.html(text)
  })

}

MarkdownWidget.prototype.make_markup = function(text, symbol, html){
  text_arr = text.split("")
  for (i = 0; i < text_arr.length; i++){
    if (text_arr[i] === symbol) {
      text_arr[i] = "<" + html + ">";
      for (a = i; a < text_arr.length; a++){
        if (text_arr[a] === symbol){
          text_arr[a] = "</" + html + ">";
        }
      }
    }

  }
  return text_arr.join("")
}



$( document ).ready(function() {

  var markdown = new MarkdownWidget("#original_text textarea", "#preview")

});


