var parser = new Parser();
var typingTimer = '';
var pauseTypingInterval = 3000;

$(document).ready(function(){
    textArea = $("#markdown");

    textArea.on("keyup", startTimer);
    textArea.on("keydown", stopTimer);
});

function startTimer(){
    stopTimer();
    typingTimer = setTimeout(updateHTML, pauseTypingInterval);
}

function stopTimer(){
    clearTimeout(typingTimer);
}

function updateHTML(){
    var markdownString = $("#markdown").val();
    var html = parser.convertToHTML(markdownString);
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
    var paragraphs = this.separateParagraphs(this.markdown);
    paragraphs = paragraphs.map(this.stylize, this);


    return "<p>" + paragraphs.join(" ") + "</p>";
}

Parser.prototype.separateParagraphs = function(markdownString){
    return markdownString.split("\n").filter(function(element){ return element != ""; });
}

Parser.prototype.stylize = function(string){
    string = this.embolden(string);
    string = this.italicize(string);
    return string;
}

Parser.prototype.embolden = function(string){
    var openingTag = true;
    for(i=0; i<string.length; i++){
        if (string.slice(i, i+2) == "**" || string.slice(i, i+2) == "__"){
            var insert = openingTag ? "<strong>" : "</strong>";
            openingTag = !openingTag;
            string = [string.slice(0, i) + insert + string.slice(i+2)].join("");
        }
    }
    return string;
}

Parser.prototype.italicize = function(string){
    var openingTag = true;
    for(i=0; i<string.length; i++){
        console.log(string.charAt(i));
        if (string.charAt(i) == "*" || string.charAt(i) == "_"){
            var insert = openingTag ? "<em>" : "</em>";
            openingTag = !openingTag;
            string = [string.slice(0, i) + insert + string.slice(i+1)].join("");
        }
    }
    return string;
}

function display(htmlString){
    var displayDiv = $("#display");
    displayDiv.html("");
    displayDiv.append(htmlString);
}
