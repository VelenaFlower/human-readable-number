module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const digit = number % 10;

  if (number < 20) {
    return units[number];
  }
  if (number < 100) {
    return (
      tens[Math.floor(number / 10) - 2] + (digit ? ` ${units[digit]}` : '')
    );
  }
  if (number < 1000) {
    return `${units[Math.floor(number / 100)]} hundred${
      number % 100 === 0 ? '' : ` ${toReadable(number % 100)}`
    }`;
  }
  return undefined;
};
