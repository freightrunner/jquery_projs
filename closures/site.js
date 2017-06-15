// Any time an element with the class of "tagline" is clicked
$("#test").click(function() {
    alert("jQuery works!");
});

// Create counter global variable
var counter1 = 0;
$("#button1").click(function() {
    counter1 += 1;
    $("#output1").text(counter1);
})
