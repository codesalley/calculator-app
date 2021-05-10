const calculate = (calculateData, buttonName) => {
  const { total, next, operation } = calculateData;
  const results = operation(total, next, buttonName);

  return results;
};

export default calculate;
