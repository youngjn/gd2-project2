$(window).on('load', function(){
  setTimeout(removeLoader, 2300); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loading" ).fadeOut(100, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading" ).remove(); //makes page more lightweight 
  });  
}

var n = 0;
var i = 0;
var k = 0;
var eee = 0;

// $('.timesquare1').click(function(e) {
//   var mouseX = e.clientX;
//   var mouseY = e.clientY;
//   if(mouseX >= 666 && mouseX <= 689 && mouseY >= 450 && mouseY <= 486) {

//     console.log("clicked");
//     $('.findN h3').css("display", "block");
//   } else if(mouseX >= 694 && mouseX <= 699 && mouseY >= 764 && mouseY <= 779) {
//     $('.findI h3').css("display", "block");
//   } else if(mouseX >= 1060 && mouseX <= 1080 && mouseY >= 854 && mouseY <= 869) {
//     $('.findK h3').css("display", "block");
//   } else if(mouseX >= 935 && mouseX <= 947 && mouseY >= 623 && mouseY <= 643) {
//     $('.findE h3').css("display", "block");
//   }
// });

function nextPage() {
  window.location.href = 'second.html';
}

$('.timesquare1').click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 665 && x < 691) {
    console.log("x is satisfied");
    if (y > 410 && y < 453) {

    console.log("clicked");
    $('.findN h3').css("display", "block");
    n++;
    } else {
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

$(".timesquare2").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 690 && x < 700) {
    console.log("x is satisfied");
    if (y > 725 && y < 740) {

    console.log("clicked");
    $('.findI h3').css("display", "block");
    i++;
    } else {
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

$(".timesquare3").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  alert("Not even close");
});

$(".timesquare4").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 815 && x < 830) {
    console.log("x is satisfied");
    if (y > 588 && y < 609) {

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

$(".timesquare5").click(function(e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x + " , " + y);
  if(x > 40 && x < 60) {
    console.log("x is satisfied");
    if (y > 815 && y < 831) {

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

