$(document).ready(function() {
  widget = new MarkdownWidget($("#source"), $("#preview"));

  function MarkdownWidget(input, output) {
    this.$input = input;
    this.$output = output;
  }

  MarkdownWidget.prototype.markdownParcer = function(input) {
    widget.convertUnderscores(input);
    // If *.....*, replace first * with <em> and second * with </em>
    // If _....._, replace first _ with <em> and second _ with </em>
    console.log(input.match(/_/g).length);
    // If **....**, replace first ** with <strong> and second ** with </strong>
    // If \n, replace \n with <br>

    // Display content of textarea
    $(this.$output).append(input);
  }

  MarkdownWidget.prototype.updateInput = function() {
    this.$output.text("");
    widget.markdownParcer(this.$input.val());
  }

  MarkdownWidget.prototype.convertUnderscores = function(string) {
    var underscores = string.match(/_/g);
    var count = underscores.length;
    if (count % 2 === 1) {
      // pop last _ off of regex array
    }
    // convert
    // each if index of regex array is even, replace with <em>
    // each if index of regex array is odd, replace with </em>

  }

  $("#source").on("keyup", function() {
    widget.updateInput();
  });
});
