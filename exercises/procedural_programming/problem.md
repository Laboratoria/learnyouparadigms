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

Se ha creado automáticamente un archivo llamado `procedural.js` en el directorio
actual. Este archivo contiene el _boilerplate_ (la plantilla sobre la que hacer
el ejercicio).

Refactoriza el código que vimos en el ejercicio anterior en dos funciones:

* `getPrimes(start, end)`
* `isPrime(num)`

Ya hemos envuelto el código en una función con el nombre `getPrimes`.

## Boilerplate

```js
function isPrime(num) {
  //...
}

function getPrimes(start, end) {
  for (var i = 2; i < 20; i++) {
    var isPrime = true;

    //...

    if (isPrime) {
      console.log(i);
    }
  }
}
```

## Requisitos

* La función `getPrimes` recibe dos argumentos: `start` y `end`, que nos deben permitir especificar el rango de números primos que nos interesa.

* La función `getPrimes` debe retornar un `array` con los números primos en vez de imprimirlos en la consola. Para ello usa una variable donde ir gurdando los números primos que vayamos encontrando y al final de la función devuelve (retorna) ese array.

* En el bucle de `getPrimes`, tendrás que sustituir el valor inicial de `i` por `start` y la condición por `i < end`.

* Dentro del bucle de `getPrimes` debes invocar a `isPrime` para determinar si el número en cuestión es primo.

* El bucle que en el ejercicio anterior usamos para comprobar si un número es primo, ahora debe quedar dentro de `isPrime`, la cual sólo ha de recibir un argumento (el número a comprobar) y retornar un booleano (`true` o `false`).

* Asegúrate de que tu script exporta las funciones `getPrimes` e `isPrime`.

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
* https://nodejs.org/api/modules.html#modules_the_module_object

***

Puedes ejecutar el código del ejercicio con el siguiente comando:

`paradigms run procedural.js`

Una vez que estés lista, puedes verificar tu solución con el siguiente comando:

`paradigms verify procedural.js`
