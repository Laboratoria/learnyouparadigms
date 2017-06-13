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
actual. Este archivo contiene con _boilerplate_ (la plantilla sobre la que hacer
el ejercicio).

Refactoriza el código del que vimos en el ejercicio anterior en dos funciones,
`isPrime(num)` y `getPrimes(start, end)`.

Ya hemos envuelto el código en una función con el nombre `getPrimes`. Esta
función recibe dos argumentos (`start`, `end`), que nos deben permitir
especificar el rango de números primos que nos interesa.

En el bucle exterior, tendrás que sustituir el valor inicial de `i` por `start`
y la condición por `i < end`. Dentro del bucle sólo debe haber un condicional
que añada el número a la respuesta si `isPrime` retorna `true` para ese número.

La función `getPrimes` debe retornar un `array` con los números primos en vez
de imprimirlos a la consola. Para ello usa una variable donde ir gurdando los
números primos que vayamos encontrando y al final de la función devuelve
(retorna) ese array.

El bucle interior (en el que comprobamos si en número es primo) debe quedar
dentro de `isPrime`, la cual sólo ha recibir un argumento (el número a
comprobar) y retornar un booleano (`true` o `false`).

Puedes ejecutar el código del ejercicio con el siguiente comando:

`paradigms run imperative.js`

Una vez que estés lista, puedes verificar tu solución con el siguiente comando:

`paradigms verify imperative.js`
