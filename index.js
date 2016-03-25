module.exports = function (inputField) {
    var element = document.getElementById(inputField);
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
            element.val(str);
            end = str.length - 1; // position of last \n 
        }
        require('set-caret-position')(inputField, end + 1);
    }
    return str.slice(start, end) + "\n";
};
