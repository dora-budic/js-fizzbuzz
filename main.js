// stampare i numeri da 1 a 100
for (var i = 1; i < 101; i++) {

  // controllare se sono multipli di 3 o 5 o 3 e 5
  if (!(i%3) && !(i%5)) {
    document.getElementById('list').innerHTML += "<li>" + "FizzBuzz" + "</li>";
  } else if (!(i%3)) {
    document.getElementById('list').innerHTML += "<li>" + "Fizz" + "</li>";
  } else if (!(i%5)) {
    document.getElementById('list').innerHTML += "<li>" + "Buzz" + "</li>";
  } else {
    document.getElementById('list').innerHTML += "<li>" + i + "</li>";
  }
}
