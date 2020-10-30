$(document).ready(function () {
    // Set up the date in jumbotron
    var currentDay = moment().format("[Today is] dddd, MMMM Do YYYY");
    // Append date to HTML
    $("#todaysDate").append(currentDay);
    // Verify the date in console
    console.log(currentDay);
});