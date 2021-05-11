const isValidNumber = (input) => {
  const int = Number.parseInt(input, 10);
  if (int >= 0 && int <= 9) {
    return true;
  } return false;
};

export default isValidNumber;
