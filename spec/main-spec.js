'use strict';
const processNumber = require('../src/main');

describe('printStudentNumbers', ()=> {
  const specialNumbers = [3, 5, 7];
  const totalNumber = 100;

  describe('processNumber', ()=> {
    it('is not special number', ()=> {
      const number = processNumber(1);
      expect(number).toEqual(1);
    });

    it('is the special number`s multiple but not includes first special number', ()=> {
      const number = processNumber(10);
      expect(number).toEqual('Buzz');
    });
  });

});