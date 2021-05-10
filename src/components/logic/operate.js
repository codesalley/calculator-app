const operation = (total, next, buttonName) => {
  let res = 0;
  switch (buttonName) {
    case '-':
      res = total - next;
      return res;
    case '+':
      res = total + next;
      return res;

    default:
      return false;
  }
};

export default operation;
