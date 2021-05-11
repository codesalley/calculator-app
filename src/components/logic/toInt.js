const toInt = (input) => {
  if (input.includes('.')) {
    const res = Number.parseFloat(input, 10);
    return res;
  }
  const res = Number.parseInt(input, 10);
  return res;
};

export default toInt;
