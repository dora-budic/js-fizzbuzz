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
