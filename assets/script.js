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
    var inputText11am = $("#inputText11am");
    var inputText12pm = $("#inputText12pm");
    var inputText1pm = $("#inputText1pm");
    var inputText2pm = $("#inputText2pm");
    var inputText3pm = $("#inputText3pm");
    var inputText4pm = $("#inputText4pm");
    var inputText5pm = $("#inputText5pm");

    //
    // Create event listeners for buttons to set items to local storage
    document.querySelector("#btn9am").addEventListener("click", function () {
        localStorage.setItem("9am", (inputText9am.val()));
    });
    //
    document.querySelector("#btn10am").addEventListener("click", function () {
        localStorage.setItem("10am", (inputText10am.val()));
    });
    //
    document.querySelector("#btn11am").addEventListener("click", function () {
        localStorage.setItem("11am", (inputText11am.val()));
    });
    //
    document.querySelector("#btn12pm").addEventListener("click", function () {
        localStorage.setItem("12pm", (inputText12pm.val()));
    });
    //
    document.querySelector("#btn1pm").addEventListener("click", function () {
        localStorage.setItem("1pm", (inputText1pm.val()));
    });
    //
    document.querySelector("#btn2pm").addEventListener("click", function () {
        localStorage.setItem("2pm", (inputText2pm.val()));
    });
    //
    document.querySelector("#btn3pm").addEventListener("click", function () {
        localStorage.setItem("3pm", (inputText3pm.val()));
    });
    //
    document.querySelector("#btn4pm").addEventListener("click", function () {
        localStorage.setItem("4pm", (inputText4pm.val()));
    });
    //
    document.querySelector("#btn5pm").addEventListener("click", function () {
        localStorage.setItem("5pm", (inputText5pm.val()));
    });

    //
    // Store the content with local storage for each time slot
    $("#inputText9am").append(localStorage.getItem("9am"));
    $("#inputText10am").append(localStorage.getItem("10am"));
    $("#inputText11am").append(localStorage.getItem("11am"));
    $("#inputText12pm").append(localStorage.getItem("12pm"));
    $("#inputText1pm").append(localStorage.getItem("1pm"));
    $("#inputText2pm").append(localStorage.getItem("2pm"));
    $("#inputText3pm").append(localStorage.getItem("3pm"));
    $("#inputText4pm").append(localStorage.getItem("4pm"));
    $("#inputText5pm").append(localStorage.getItem("5pm"));

});