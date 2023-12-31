// factorial.test.js
const factorial = require('./factorial');

// Тести для функції обчислення факторіалу
describe('factorial', () => {
  // Тест на обчислення факторіалу для 0
  test('факторіал 0 має бути 1', () => {
    expect(factorial(0)).toBe(1);
  });

  // Тест на обчислення факторіалу для 1
  test('факторіал 1 має бути 1', () => {
    expect(factorial(1)).toBe(1);
  });

  // Тест на обчислення факторіалу для числа більше 1
  test('факторіал 5 має бути 120', () => {
    expect(factorial(5)).toBe(120);
  });

  // Тест на обчислення факторіалу для великого числа (для демонстрації рекурсії)
  test('факторіал 10 має бути 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  // Тест на обчислення факторіалу для від'ємного числа (повинен викликати помилку)
  test('факторіал від\'ємного числа генерує помилку', () => {
    expect(() => {
      factorial(-5);
    }).toThrowError("Факторіал визначений тільки для невід'ємних цілих чисел");
  });
});