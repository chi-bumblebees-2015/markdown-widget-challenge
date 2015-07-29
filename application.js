var parser = new Parser();
var typingTimer = '';
var pauseTypingInterval = 3000;

$(document).ready(function(){
    textArea = $("#markdown");

    textArea.on("keyup", startTimer);
    textArea.on("keydown", stopTimer);
});

function startTimer(){
    console.log("startTimer");
    stopTimer();
    typingTimer = setTimeout(updateHTML, pauseTypingInterval);
}

function stopTimer(){
    if (typingTimer){clearTimeout();}
}

function updateHTML(){
    console.log("updateHTML");
    var html = parser.convertToHTML(textArea.content);
    console.log(html);
    display(html);
}


function Parser(){
    this.markdown = "";
}

Parser.prototype.convertToHTML = function(string){
    this.markdown = string;
    return this.parse();
}

Parser.prototype.parse = function(){
    // var htmlString = stylize(this.markdown);
    console.log("parse");
    return "<h1>It works!!</h1>";
}

Parser.prototype.stylize = function(markdownString){

}

function display(htmlString){
    var displayDiv = $("#display");
    displayDiv.html("");
    displayDiv.append(htmlString);
}
