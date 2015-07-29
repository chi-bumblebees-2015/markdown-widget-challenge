$(document).ready(function(){
    var parser = new Parser();
    $("markdown").on("submit", function(event){
        //update parser's input
        //provide stuff to view
    });
});


function Parser(){
    this.markdown = "";
    this.html = "";
}

Parser.prototype.updateMarkdown = function(string){
    this.markdown = string;
}

Parser.prototype.parse = function(){

}
