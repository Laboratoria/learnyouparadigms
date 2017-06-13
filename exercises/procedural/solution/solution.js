function isPrime(num) {
  for (var i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(start, end) {
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(2, 20);
