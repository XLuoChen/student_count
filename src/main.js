const processNumber = (studentNumber, specialNumbers) => {
  const fixtureArray = ['Fizz', 'Buzz', 'Whizz'];
  const specialArray = specialNumbers.map((specialNumber, index)=> {
    return {number: specialNumber, value: fixtureArray[index]};
  });

  let output;
  var firstSpecialNumber = specialArray[0];
  if (!studentNumber.toString().includes(firstSpecialNumber.number)) {
    output = specialArray.map(item => studentNumber % item.number === 0 ? item.value : '').join('');
  } else {
    output = firstSpecialNumber.value;
  }

  return output === '' ? studentNumber : output;
};

module.exports = processNumber;