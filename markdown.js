$(document).ready(function() {
  function MarkdownWidget(input, output) {
    this.$input = input;
    this.$output = output;
  }

  MarkdownWidget.prototype.markdownParcer = function(input) {
    // Display content of textarea
    $(this.$output).append(input);
    // If *.....*, replace first * with <em> and second * with </em>
    // If _....._, replace first _ with <em> and second _ with </em>
    // If **....**, replace first ** with <strong> and second ** with </strong>
  }

  MarkdownWidget.prototype.updateInput = function() {
    var widget = new MarkdownWidget($("#source"), $("#preview"));

    this.$output.text("");
    widget.markdownParcer(this.$input.val());
  }

  $("#source").on("keyup", function() {
    var widget = new MarkdownWidget($("#source"), $("#preview"));
    widget.updateInput();
  });
});
