var currentStartOfHour = moment().set("m", 0).set("s", 0);
var startOfBusinessDay = moment().set("m", 0).set("s", 0).set("h", 9);

while (startOfBusinessDay.get("h") < 18) {
    var row = $("<div>" + startOfBusinessDay.format("hh") + "</div>").addClass("row");
    row.append($("<div></div>").addClass("hour").appendTo(row));
    var middle = $("<div></div>");
    if (startOfBusinessDay.get("h") < currentStartOfHour.get("h")) {
        middle.addClass("past");
    }
    else if (startOfBusinessDay.get("h") === currentStartOfHour.get("h")) {
        middle.addClass("present");
    }
    else {
        middle.addClass("future");
    }
    row.append(middle);
    row.append($("<div></div>").addClass("saveBtn"));
    $(".container").append(row);
    startOfBusinessDay.add("h", 1);
}