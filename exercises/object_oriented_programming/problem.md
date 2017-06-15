En la programación orientada a objetos (OOP), nos concentramos en describir
objetos, que tienen una data (un estado) y una serie de operaciones que pueden
realizar.

Imaginemos que estamos construyendo una aplicación de "notas", donde el usuario
puede añadir notas con un texto. Antes de empezar a implementar tratamos de
imaginarnos los objetos que participan de este proceso. Lo primero que se nos
viene a la mente es que vamos a necesitar objetos de tipo "nota".

## Tarea

Se ha creado automáticamente un archivo llamado `oop.js` en el directorio
actual. Este archivo contiene el _boilerplate_ (la plantilla sobre la que hacer
el ejercicio).

El boilerplate contiene dos constructores (`Note` y `Notes`). El primero
(`Note`) ya está implemetado. Ahora nos piden implementar los métodos
`Notes.prototype.add` y `Notes.prototype.toString`.

## Boilerplate

```js
function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

// Convierte note en un string con este formato:
// [X] | Mon Jun 12 2017 | mundo
Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  //...
};

Notes.prototype.toString = function () {
  //...
};
```

## Ejemplo

Una vez implementado el ejercicio, alguien que importe tu módulo debería de
poder hacer lo siguiente:

```js
const note1 = new Note('hola');
const note2 = new Note('mundo');
const notes = new Notes();

notes.add(note1);
notes.add(note2);

console.log(notes.toString());

// [ ] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola

note1.completed = true;

console.log(notes.toString());

// [ ] | Mon Jun 12 2017 | mundo
// [X] | Mon Jun 12 2017 | hola
```

## Requisitos

* `Notes.prototype.add` debe botar error (throw) si el argumento (`note`) no es una instancia de `Note`.

* `Notes.prototype.add` debe añadir nuevas notas al principio de `this.data`, no al final.

* La implementación de `Notes.prototype.toString` debe iterar sobre las notas e invocar `toString` en cada nota y así ir concatenando el resultado. El string que retornes debe contener una línea para cada nota (ver ejemplo).

* El método `Notes.prototype.toString` debe listar las notas ordenadas por fecha de creación descendente, la última añadida debe aparecer primero.

* No olvides exportar los constructores `Note` y `Notes`.

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
* https://css-tricks.com/understanding-javascript-constructors/
