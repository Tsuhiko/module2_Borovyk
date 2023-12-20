// factorial.js
function factorial(n) {
    if (n < 0) {
      throw new Error("Факторіал визначений тільки для невід'ємних цілих чисел");
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return n * factorial(n - 1);
  }
  
  module.exports = factorial;  