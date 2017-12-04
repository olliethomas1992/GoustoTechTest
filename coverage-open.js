var open = require('open');

module.exports = function openCoverage(){
    open("./coverage/lcov-report/index.html");
    return "Test Run Complete.\nOpening Coverage...";
}

require("make-runnable/custom")({
    printOutputFrame: false
});