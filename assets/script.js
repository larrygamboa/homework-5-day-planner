$(document).ready(function () {
    //
    // Set up the date in jumbotron
    var currentDay = moment().format("[Today is] dddd, MMMM Do YYYY");
    // Append date to HTML
    $("#todaysDate").append(currentDay);
    // Verify the date in console
    console.log(currentDay);

    //
    // Get current time by hour
    var currentTime = moment().format('HH');

    //
    // Set up time slot variables
    var inputText9am = $("#inputText9am");
    var inputText10am = $("#inputText10am");
    // var inputText11am = $("#inputText11am");
    // var inputText12am = $("#inputText12am");
    // var inputText1pm = $("#inputText1pm");
    // var inputText2pm = $("#inputText2pm");
    // var inputText3pm = $("#inputText3pm");
    // var inputText4pm = $("#inputText4pm");
    // var inputText5pm = $("#inputText5pm");

    //
    // Store the content with local storage for each time slot
    $("#inputText9am").append(localStorage.getItem("9AM"));
    $("#inputText10am").append(localStorage.getItem("10AM"));

    //
    // Create event listeners for buttons to set items to local storage
    document.querySelector("#btn9am").addEventListener("click", function () {
        localStorage.setItem("9AM", (inputText9am.val()));
    });
    //
    document.querySelector("#btn10am").addEventListener("click", function () {
        localStorage.setItem("10AM", (inputText10am.val()));
    });

});