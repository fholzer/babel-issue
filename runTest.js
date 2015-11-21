var rjs = require("requirejs");

rjs.onError = function (err) {
    throw err;
};

test = rjs(["dist/typeof"]);
