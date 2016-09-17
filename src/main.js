const loadRules = require('./fixture');

const sayNumber = (studentNumber) => {
  const rules = loadRules();
  const specialArray = rules.specialNumbers.map((specialNumber, index)=> {
    return {number: specialNumber, value: rules.outputs[index]};
  });

  let saying;
  const firstSpecialNumber = specialArray[0];
  if (!studentNumber.toString().includes(firstSpecialNumber.number)) {
    saying = specialArray.map(item => studentNumber % item.number === 0 ? item.value : '').join('');
  } else {
    saying = firstSpecialNumber.value;
  }

  return saying === '' ? studentNumber : saying;
};

module.exports = sayNumber;