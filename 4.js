var plusOne = function (digits) {
  const numberFromDigits = BigInt(digits.join("")) + BigInt(1);
  return numberFromDigits.toString().split("");
};
