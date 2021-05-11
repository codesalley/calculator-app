const findOperator = (next, op) => {
  const arrData = next.split('');
  const res = arrData.find((e) => op.includes(e));
  if (res) {
    return res;
  }
  return false;
};

export default findOperator;
