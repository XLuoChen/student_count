const processNumber = (studentNumber, specialNumbers) => {
  const fixtureArray = ['Fizz', 'Buzz', 'Whizz'];
  const specialArray = specialNumbers.map((specialNumber, index)=> {
    return {number: specialNumber, value: fixtureArray[index]};
  });

  for (let item of specialArray) {
    if (!studentNumber.toString().includes('3')) {
      if (studentNumber % item.number === 0) {
        return (item.value);
      }
    }
  }

  return studentNumber;
};

module.exports = processNumber;