const printStudentNumber = ()=> {
  const specialNumbers = [3, 5, 7];
  const totalNumber = 100;


};

const processNumber = (studentNumber) => {
  if (studentNumber % 3 === 0) {
    return 'Fizz';
  } else if (studentNumber % 5 === 0) {
    return 'Buzz';
  } else if (studentNumber % 7 === 0) {
    return 'Whizz';
  }

  return studentNumber;
};

module.exports = processNumber;