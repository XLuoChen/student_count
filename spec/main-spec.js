'use strict';
const sayNumber = require('../src/main');

describe('sayNumber', ()=> {

  describe('contains first special number', () => {

    it('includes(3)=>Fizz', ()=> {
      const number = sayNumber(35);
      expect(number).toEqual('Fizz');
    });
  });

  describe('not contains first special number', () => {

    it('times(5)=>Buzz', ()=> {
      const number = sayNumber(10);
      expect(number).toEqual('Buzz');
    });

    it('times(3,5)=>FizzBuzz', ()=> {
      const number = sayNumber(15);
      expect(number).toEqual('FizzBuzz');
    });
  });

  describe('others', () => {
    it('is not times special number', ()=> {
      const number = sayNumber(1);
      expect(number).toEqual(1);
    });
  });
});
