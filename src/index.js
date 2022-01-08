let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function toNormalForm (number) {
  let standartNum = '' + number;

  while (standartNum.length <= 2) {
    standartNum = '0' + standartNum;
  }
  return standartNum;
}

function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  let standartNum = toNormalForm(number);
  
  let humanReadNumber = ''; 
  if (Number(standartNum[0]) !== 0) {
    humanReadNumber += units[Number(standartNum[0])] + ' hundred' + ' ';
  } 

  if (Number(standartNum[1]) === 1) {
    humanReadNumber += tenToTwenty[Number('1'+ standartNum[2]) - 10];
    return humanReadNumber.trim();
  }

  if (Number(standartNum[1]) !== 0 ) {
    humanReadNumber += dozens[Number(standartNum[1])] + ' ';
  } 

  if (Number(standartNum[2]) !== 0) {
    humanReadNumber += units[Number(standartNum[2])];
  }

  return humanReadNumber.trim();
}

module.exports = toReadable;