En el ejercicio anterior, nuestro código directamente empezaba a hacer
operaciones, sin ningún tipo de reuso de código. Podíamos ejecutar el código,
pero no podíamos importarlo desde otro script o invocarlo con diferentes
valores.

La programación _procedural_ (por procedimientos) introduce el concepto de
procedimientos o funciones que nos permiten agrupar instrucciones, y así reusar
bloques de código e invocarlos con diferentes valores.

Según va creciendo un programa, vamos a tener la necesidad de organizar nuestro
código en pedacitos comprensibles, además de abstraer repetición. La
programación por procedimientos representa un primer paso de abstracción, lo que
nos obliga a tener que dar nombres a estos procedimientos, encapsularlos, y
definir sus interfaces (input/output).

## Tarea

Refactoriza el código del _boilerplate_ en dos funciones, `isPrime` y
`printPrimes`.

Primero envuelve el código en una función con el nombre `printPrimes`. Esta
función debe recibir dos argumentos (`start`, `end`), que nos permitan
especificar el rango de números primos que queremos imprimir.

En el bucle exterior, tendrás que sustituir el valor inicial de `i` por `start`
y la condición por `i < end`. Dentro del bucle sólo debe haber un condicional
que imprima a la consola el número si `isPrime` retorna `true` para ese número.

El bucle interior quedará dentro de `isPrime` ...

## Boilerplate

```js
//
// Calcula todos los números primos menores que `20`.
//

function isPrime(num) {
  //...
}

function printPrimes(start, end) {
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
}
```
