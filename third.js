

var n = 0;
var i = 0;
var k = 0;
var eee = 0;

function nextPage() {
  $('.end').css("display", "block");
}



$(".london1").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 249 && x < 261) {
    console.log("x is satisfied");
    if (y > 79 && y < 92) {

    console.log("clicked");
    $('.findK h3').css("display", "block");
    k++;
    } else{
      alert("Getting close");
    }
  } else {
    alert("Not even close");
  }

  if(n >= 1 && i >= 1 && k >= 1 && eee >= 1) {

  alert("You found everything! Wait for the next step!");
  setTimeout(nextPage, 1000);
}

});

$(".london2").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  alert("Not even close");


});

$(".london3").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 485 && x < 494) {
    console.log("x is satisfied");
    if (y > 96 && y < 111) {

    console.log("clicked");
    $('.findI h3').css("display", "block");
    i++;
    } else{
      alert("Getting close");
    }
  } else {
    alert("Not even close");
  }

  if(n >= 1 && i >= 1 && k >= 1 && eee >= 1) {

  alert("You found everything! Wait for the next stage!");
  setTimeout(nextPage, 1000);
}

});

$(".london4").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  alert("Not even close");


});

$(".london5").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 566 && x < 581) {
    console.log("x is satisfied");
    if (y > 712 && y < 731) {

    console.log("clicked");
    $('.findE h3').css("display", "block");
    eee++;
    } else{
      alert("Getting close");
    }
  } else {
    alert("Not even close");
  }

  if(n >= 1 && i >= 1 && k >= 1 && eee >= 1) {

  alert("You found everything! Wait for the next stage!");
  setTimeout(nextPage, 1000);
}

});

$(".london6").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 539 && x < 571) {
    console.log("x is satisfied");
    if (y > 429 && y < 454) {

    console.log("clicked");
    $('.findN h3').css("display", "block");
    n++;
    } else{
      alert("Getting close");
    }
  } else {
    alert("Not even close");
  }

  if(n >= 1 && i >= 1 && k >= 1 && eee >= 1) {

  alert("You found everything! Wait for the next stage!");
  setTimeout(nextPage, 1000);
}

});