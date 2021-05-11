// import operate from './operate';

// const isValidNumber = (input) => {
//   const int = Number.parseInt(input, 10);
//   if (int >= 0 && int <= 9) {
//     return true;
//   } return false;
// };

// const calculate = (calculateData, buttonName) => {
//   const { total, next, operation } = calculateData;

//   if (isValidNumber(buttonName) && operation == null) {
//     const res = total + Number.parseInt(buttonName, 10);
//     return { total: res, next: null, operation: null };
//   }
//   if (isValidNumber(buttonName) && operation != null && next != null) {
//     const res = operate(total, next, buttonName);
//     return res;
//   }
// };

// export default calculate;
