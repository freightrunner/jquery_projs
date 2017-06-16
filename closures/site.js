// Any time an element with the class of "tagline" is clicked
$("#test").click(function() {
    alert("jQuery works!");
});

// Script for counting with Global Variable
var counter1 = 0;
$("#button1").click(function() {
    counter1 += 1;
    $("#output1").text(counter1);
});

// Script for counting with Variable Inside Function
$("#button2").click(function() {
    var counter2 = 0;
    counter2 += 1;
    $("#output2").text(counter2);
});

// Script for a counter with a closure
var closureCount = (function () {             // variable closureCount is assigned the return value of a self-invoking function
  var counter3 = 0;                           // self invoking function only runs once - sets counter3 to 0 and returns a function expression
  return function () {return counter3 += 1;}  // This function still has access to the scope above it so counter3 is protected by the anonymous function above and can only be accessed with the closureCount function
})();                                         // closure is now a function with access to the parent scope, even after the parent function has closed

$("#button3").click(function() {              // Event Handler for when #button3 is clicked
  $("#output3").text(closureCount());         // Changes #output3 text to return from closureCount function
});