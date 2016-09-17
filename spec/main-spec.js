'use strict';
const processNumber = require('../src/main');

describe('processNumber', ()=> {
  const specialNumbers = [3, 5, 7];

  it('is not special number', ()=> {
    const number = processNumber(1, specialNumbers);
    expect(number).toEqual(1);
  });

  it('times(3)=>Fizz', ()=> {
    const number = processNumber(9, specialNumbers);
    expect(number).toEqual('Fizz');
  });

  it('times(5)=>Buzz', ()=> {
    const number = processNumber(10, specialNumbers);
    expect(number).toEqual('Buzz');
  });

  it('times(7)=>Whizz', ()=> {
    const number = processNumber(14, specialNumbers);
    expect(number).toEqual('Whizz');
  });

  it('times(3,5)=>FizzBuzz', ()=> {
    const number = processNumber(15, specialNumbers);
    expect(number).toEqual('FizzBuzz');
  });

  it('includes(3)=>Fizz', ()=> {
    const number = processNumber(35, specialNumbers);
    expect(number).toEqual('Fizz');
  });
});
