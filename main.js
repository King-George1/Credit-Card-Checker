// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (cardNumber) => {
  const newArray = cardNumber.slice();
  const lengthIterate = newArray.length - 2;
  let tempValue = 0;
  for (let i = lengthIterate; i >= 0; i = i - 2) {
    tempValue = newArray[i] * 2;
    if (tempValue > 9) {
      tempValue = tempValue - 9;
    }
    newArray[i] = tempValue;
  }
  let sum = newArray.reduce((total, initial) => total + initial);
  return sum % 10 === 0 ? true : false;
};

const findInvalidCards = (creditNumbers) => {
  let invalidCards = [];
  creditNumbers.forEach((x) => {
    if (!validateCred(x)) {
      invalidCards.push(x);
    }
  });
  return invalidCards;
};

const InvalidCardCompanies = (invalidcreditCards) => {
  let companies = [];
  invalidcreditCards.forEach((y) => {
    if (y[0] === 3) {
      if (!companies.includes('Amex (American Express)')) {
        companies.push('Amex (American Express)');
      }
    } else if (y[0] === 4) {
      if (!companies.includes('Visa')) {
        companies.push('Visa');
      }
    } else if (y[0] === 5) {
      if (!companies.includes('Mastercard')) {
        companies.push('Mastercard');
      }
    } else if (y[0] === 6) {
      if (!companies.includes('Discover')) {
        companies.push('Discover');
      }
    } else {
      console.log('Company not found');
    }
  });
  return companies;
};


// Credit card number tester from a credit card number generator and validator site
const validateCard = (cardNumbersString) => {
  cardNumber = cardNumbersString.split('').map((x) => parseInt(x));
  validateCred(cardNumber)
    ? console.log('The number is VALID')
    : console.log('The number is INVALID');
};


//Function that converts invalid numbers to valid numbers
const invalidToValid = (invalidNumbers) => {
  const newArray = invalidNumbers.slice();
  const lengthIterate = newArray.length - 2;
  let tempValue = 0;
  for (let i = lengthIterate; i >= 0; i = i - 2) {
    tempValue = newArray[i] * 2;
    if (tempValue > 9) {
      tempValue = tempValue - 9;
    }
    newArray[i] = tempValue;
  }
  let sum = newArray.reduce((total, initial) => total + initial);
  let remainder = 10 - (sum % 10);
  let invalid = invalidNumbers.slice();
  for (let n = invalid.length - 1; n >= 0; n = n - 2) {
    if (invalid[n] < 9) {
      let nTA = 9 - invalid[n];
      if (nTA <= remainder) {
        invalid[n] += nTA;
        remainder -= nTA;
      } else {
        invalid[n] += remainder;
        break;
      }
      if (remainder <= 0) {
        break;
      }
    }
  }
  return invalid;
};


