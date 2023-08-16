export const ERROR_MESSAGE = Object.freeze({
  MAX_NUM: "숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.",
});

class Calculator {
  validation(a, b) {
    if (a > 999) {
      throw new Error(ERROR_MESSAGE.MAX_NUM);
    }
    if (b > 999) {
      throw new Error(ERROR_MESSAGE.MAX_NUM);
    }
  }

  sum(a, b) {
    this.validation(a, b);
    return Math.floor(a + b);
  }

  minus(a, b) {
    this.validation(a, b);
    return Math.floor(a - b);
  }

  subtract(a, b) {
    this.validation(a, b);
    return Math.floor(a * b);
  }

  devide(a, b) {
    this.validation(a, b);
    return Math.floor(a / b);
  }
}

export default Calculator;
