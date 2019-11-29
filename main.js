window.addEventListener("load", main, false);

function main(e) {
    document.getElementById('query').focus()
    window.addEventListener("keydown", enter);
} 

function enter() {
    if (window.event.keyCode == 13) {
        var form = document.getElementsByName("form")[0];
        var query = document.getElementById("query").value;

        if(/\w.:\/\/.+$/.test(query)) {
            location.href = query;
        } else if(/^.+ [\.|\,]$/.test(query)) {
            var encoded = "https://duckduckgo.com/?q=" + encodeURIComponent("\\" + query.match(/^(.+) [\.|\,]$/)[1]);
            location.href = encoded;
        } else if(/^\S+\.\S+$/.test(query)) {
            location.href = "http://" + query;
        } else {
            var encoded = "https://www.google.com/search?q=" + encodeURIComponent(query);
            location.href = encoded;
        }
    }
}