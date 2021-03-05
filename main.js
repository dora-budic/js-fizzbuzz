// stampare i numeri da 1 a 100
for (var i = 1; i < 101; i++) {

  // controllare se sono multipli di 3 o 5 o 3 e 5
  if (!(i%15)) { //alternativa (!(i%3) && !(i%5))
    document.getElementById('container').innerHTML += "<p>" + "FizzBuzz" + "</p>";
  } else if (!(i%3)) {
    document.getElementById('container').innerHTML += "<p>" + "Fizz" + "</p>";
  } else if (!(i%5)) {
    document.getElementById('container').innerHTML += "<p>" + "Buzz" + "</p>";
  } else {
    document.getElementById('container').innerHTML += "<p>" + i + "</p>";
  }
}

var listTitle = document.getElementById('title');
console.log(listTitle);
listTitle.addEventListener('click', function(e) {
  e.target.style.fontStyle = "italic";
});


var elements = document.getElementById('container').children;

for (var i = 0; i < elements.length-2; i++) {
  i = i+2;
  elements[i].style.color = "#FF7E05";
  elements[i].style.fontWeight = "bold";
  elements[i].addEventListener('mouseover', function(e) {
    e.target.style.color = "#fff";
  });
  elements[i].addEventListener('mouseout', function(e) {
    e.target.style.color = "#FF7E05";
  });
  elements[i].addEventListener('click', function(e) {
    e.target.style.fontSize = "20px";
  });
}

for (var i = 0; i < elements.length-4; i++) {
  i = i+4;
  elements[i].style.color = "#F710D4";
  elements[i].style.fontWeight = "bold";
  elements[i].addEventListener('mouseover', function(e) {
    e.target.style.color = "#fff";
  });
  elements[i].addEventListener('mouseout', function(e) {
    e.target.style.color = "#F710D4";
  });
  elements[i].addEventListener('click', function(e) {
    e.target.style.fontSize = "20px";
  });
}

for (var i = 0; i < elements.length-14; i++) {
  i = i+14;
  elements[i].style.color = "#F7F710";
  elements[i].style.fontWeight = "bold";
  elements[i].addEventListener('mouseover', function(e) {
    e.target.style.color = "#fff";
  });
  elements[i].addEventListener('mouseout', function(e) {
    e.target.style.color = "#F7F710";
  });
  elements[i].addEventListener('click', function(e) {
    e.target.style.fontSize = "20px";
  });
}
