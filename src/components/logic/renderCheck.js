const renderCheck = (result) => {
  if (result.length > 10) {
    const res = result.slice(0, 9);
    return res.concat('e');
  }
  return result;
};

export default renderCheck;
