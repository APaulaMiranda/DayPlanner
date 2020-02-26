var moment = require('moment');
var jquery = require("jquery");
var currentStartOfHour = moment().set("m", 0).set("s", 0);
var startOfBusinessDay = currentStartOfHour.set("h", 9);

while (startOfBusinessDay.get("h") < 17) {
    var row = jquery("div").addClass("row");
    jquery("div").addClass("hour").appendTo(row);
    var middle = jquery("div");
    if (startOfBusinessDay.get("h") < currentStartOfHour.get("h")) {
        middle.addClass("past");
    }
    else if (startOfBusinessDay.get("h") === currentStartOfHour.get("h")) {
        middle.addClass("present");
    }
    else {
        middle.addClass("future");
    }
    middle.appendTo(row);
    jquery("<div></div>").addClass("saveBtn").appendTo(row);
    startOfBusinessDay.add("h", 1);
}