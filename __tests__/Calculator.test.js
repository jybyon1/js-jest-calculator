// 2개의 숫자에 대해 덧셈이 가능하다.
// 2개의 숫자에 대해 뺄셈이 가능하다.
// 2개의 숫자에 대해 곱셈이 가능하다.
// 2개의 숫자에 대해 나눗셈이 가능하다.
// 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.

import Calculator from "../src/index";

const calculator = new Calculator();

test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
  expect(calculator.sum(1, 1)).toBe(2);
});

test("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
  expect(calculator.minus(2, 1)).toBe(1);
});

test("2개의 숫자에 대해 곱셈이 가능하다.", () => {
  expect(calculator.subtract(2, 2)).toBe(4);
});

test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
  expect(calculator.devide(2, 2)).toBe(1);
});

test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
  expect(calculator.sum(1000, 1)).toThrow(
    "숫자는 한번에 최대 3자리 수까지만 다룰 수 있다."
  );
});

test("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
  expect(calculator.devide(3, 2)).toBe(1);
});
