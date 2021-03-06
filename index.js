module.exports = function (id) {
    var element = document.getElementById(id);
    var str = element.value,
        start = element.selectionStart,
        end = element.selectionEnd,
        endPos;
    if (start === end) {
        // grab the current line
        if (end != 0) {
            start = 1 + str.lastIndexOf("\n", end - 1);
        } else {
            start = 0;
        }
        endPos = str.indexOf("\n", start);
        if (endPos !== -1) {
            end = endPos;
        } else {
            str = element.value + "\n";
            element.value = str;
            end = str.length - 1; // position of last \n 
        }
        require('set-caret-position')(id, end + 1);
    }
    return str.slice(start, end) + "\n";
};
