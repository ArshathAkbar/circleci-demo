function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const yearToCheck = 2021;
if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}
console.log('Welcome to CircleCi')
