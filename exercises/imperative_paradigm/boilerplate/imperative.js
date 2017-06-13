//
// Calcula todos los números primos menores que `20`.
//

// Iteramos desde 2 (el primer número primo) hasta 19 (menor que 20)
for (var i = 2; i < 20; i++) {
  // Inicializamos una variable para hacer seguimiento de si el número es primo
  // o no.
  var isPrime = true;

  // Para ver si el número es primo, vamos a tratar de demostrar que NO es
  // primo, y si no podemos, entonces podemos decir que sí es primo.
  // Si el número es divisible por cualquier otro entero, que no sea `1` o el
  // número mismo, sabemos que no es primo.
  // Iteramos desde 2 hasta `i / 2`. No necesitamos probar números más allá de
  // `i / 2` porque los valores estarían entre 2 y 1, siempre dejando residuo.
  for (var j = 2; j <= (i / 2); j++) {
    // Si `i` (el número que estamos verificando) es divisible por `j` sin dejar
    // residuo significa que no es primo!
    if (i % j === 0) {
      isPrime = false;
      break; // no necesitamos seguir tratando, ya sabemos que no es primo
    }
  }

  // Si el número `i` es primo lo imprimimos en la consola
  if (isPrime) {
    console.log(i);
  }
}
