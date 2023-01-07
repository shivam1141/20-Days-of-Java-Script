function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    return x / y;
  }
  
  function calculate(x, y, operator) {
    switch (operator) {
      case "+":
        return add(x, y);
      case "-":
        return subtract(x, y);
      case "*":
        return multiply(x, y);
      case "/":
        return divide(x, y);
      default:
        return "Invalid operator";
    }
  }
  
  const x = prompt("Enter x:");
  const y = prompt("Enter y:");
  const operator = prompt("Enter operator (+, -, *, /):");
  
  document.write("The calculation is : ",calculate(x, y, operator));