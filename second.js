

var n = 0;
var i = 0;
var k = 0;
var eee = 0;

function nextPage() {
  window.location.href = 'third.html';
}



$(".shibuya1").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 740 && x < 751) {
    console.log("x is satisfied");
    if (y > 638 && y < 657) {

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

$(".shibuya2").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 364 && x < 381) {
    console.log("x is satisfied");
    if (y > 388 && y < 421) {

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

$(".shibuya3").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  alert("Not even close");
});

$(".shibuya4").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 122 && x < 141) {
    console.log("x is satisfied");
    if (y > 169 && y < 191) {

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

  alert("You found everything! Wait for the next stage!");
  setTimeout(nextPage, 1000);
}

});

$(".shibuya5").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  alert("Not even close");
});

$(".shibuya6").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 446 && x < 459) {
    console.log("x is satisfied");
    if (y > 637 && y < 649) {

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