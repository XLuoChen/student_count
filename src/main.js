const processNumber = (studentNumber, specialNumbers) => {
  const fixtureArray = ['Fizz', 'Buzz', 'Whizz'];
  const specialArray = specialNumbers.map((specialNumber, index)=> {
    return {number: specialNumber, value: fixtureArray[index]};
  });

  let output = '';
  for (let item of specialArray) {
    if (!studentNumber.toString().includes(specialArray[0].number)) {
      if (studentNumber % item.number === 0) {
        output += item.value;
      }
    } else {
      output = specialArray[0].value;
    }
  }

  return output === '' ? studentNumber : output;
};

module.exports = processNumber;