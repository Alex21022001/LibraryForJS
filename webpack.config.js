'use strict';

let path = require('path');

module.exports = {
    mode: 'production',
    entry: __dirname + "/src/js/main.js",
    output: {
        filename: 'myOwnLibrary.js',
        path: __dirname + '/dist/js/'
    },
    watch: false,

    devtool: "source-map",

    module: {}
};
