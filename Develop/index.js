var currentStartOfHour = moment().set("m", 0).set("s", 0);
var startOfBusinessDay = moment().set("m", 0).set("s", 0).set("h", 9);

while (startOfBusinessDay.get("h") < 18) {
    var hourString = startOfBusinessDay.format("hh A");
    var row = $("<div></div>").addClass("row").addClass("time-block");
    var hour = $("<div>" + hourString + "</div>").addClass("hour");
    hour.addClass("col-2");
    row.append(hour);
    var middle = $('<textarea data-id="' + hourString + '"></textarea>').addClass("description").addClass("col-8");
    if (startOfBusinessDay.get("h") < currentStartOfHour.get("h")) {
        middle.addClass("past");
    }
    else if (startOfBusinessDay.get("h") === currentStartOfHour.get("h")) {
        middle.addClass("present");
    }
    else {
        middle.addClass("future");
    }
    if (localStorage.getItem(hourString) != null) {
        middle.val(localStorage.getItem(hourString));
    }
    row.append(middle);
    var saveButton = $('<button data-id="' + hourString + '">Save</button>').addClass("saveBtn").addClass("col-2");

    saveButton.on("click", function (event) {
        var index = event.target.getAttribute("data-id");
        event.preventDefault();
        var text = $('textarea[data-id="' + index + '"]').val();
        localStorage.setItem(index, text);
        console.log(text);
    })
    row.append(saveButton);
    $(".container").append(row);
    startOfBusinessDay.add("h", 1);
}