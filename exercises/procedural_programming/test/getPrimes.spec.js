'use strict';


describe('getPrimes (procedural)', () => {

  it('debería exportar una función con el nombre `getPrimes`', () => {

    Assert.equal(typeof Submission, 'function');
    Assert.equal(Submission.name, 'getPrimes');
  });

  it('debería retornar los número primos menores de 20', () => {

    Assert.deepEqual(Submission(2, 20), [2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it('debería retornar los número primos entre 50 y 100', () => {

    Assert.deepEqual(Submission(50, 100), [53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });

});
