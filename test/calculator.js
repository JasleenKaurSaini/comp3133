const { expect } = require("chai");
const calc = require("../app/calculator");

function runTest(type, operationName, actualValue, expectedValue, isPass) {
  const label = isPass ? "PASS" : "FAIL";

  it(`${label}: ${operationName}`, function () {
    const result = actualValue;

    if (isPass) {
      expect(result).to.equal(expectedValue);
      console.log(`${label} message: ${operationName} expected ${expectedValue} and got`, result);
    } else {
      expect(result, `${label} message: ${operationName} expected ${expectedValue}`).to.equal(expectedValue);
    }
  });
}

describe("Calculator Tests", function () {

  runTest("add", "add(5,2) should be 7", calc.add(5, 2), 7, true);
  runTest("add", "add(5,2) should be 8", calc.add(5, 2), 8, false);

  runTest("sub", "sub(5,2) should be 3", calc.sub(5, 2), 3, true);
  runTest("sub", "sub(5,2) should be 5", calc.sub(5, 2), 5, false);

  runTest("mul", "mul(5,2) should be 10", calc.mul(5, 2), 10, true);
  runTest("mul", "mul(5,2) should be 12", calc.mul(5, 2), 12, false);

  runTest("div", "div(10,2) should be 5", calc.div(10, 2), 5, true);
  runTest("div", "div(10,2) should be 2", calc.div(10, 2), 2, false);
});
