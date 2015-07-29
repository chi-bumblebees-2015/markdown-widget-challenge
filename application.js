
var markdown = {
  toHTML: function(mardownString) {
    var newText = this.replaceBoldTags(mardownString);
    return newText;
  },
  replaceBoldTags: function(mardownString) {
    return mardownString.replace(/\*\*(.+)\*\*/g, "<b>$1</b>");
  }
}

$(document).ready(function(){
  $('#source').on('click', $('button'), function(e) {
    var text = $('#text-area-source').val();
    $("#text-area-preview").html(markdown.toHTML(text))
  });
});


