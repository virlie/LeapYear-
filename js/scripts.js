///This project needs  will be able to give a true or false answer, for the question, is this year a leapyear?
///The year is evenly divisible by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.
///
var input=()

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var results = leapYear(year);
    $("#results").text(result);
  });
});
