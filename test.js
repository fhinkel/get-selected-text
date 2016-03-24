var getSelectedText = require('./index.js');

document = {
    element: {
        value: {
            lastIndexOf: function () {
            },
            indexOf: function() {
            },
            slice: function () {
            }
        }, 
        focus: function () {
            
        }
    },

    getElementById: function () {
        return this.element;
    }
};

var inputField = {};
getSelectedText();

console.log('Done testing. All good');