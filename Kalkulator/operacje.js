// const number0 = document.querySelector(".number--0");
// const number1 = document.querySelector(".number--1");
// const number2 = document.querySelector(".number--2");
// const number3 = document.querySelector(".number--3");
// const number4 = document.querySelector(".number--4");
// const number5 = document.querySelector(".number--5");
// const number6 = document.querySelector(".number--6");
// const number7 = document.querySelector(".number--7");
// const number8 = document.querySelector(".number--8");
// const number9 = document.querySelector(".number--9");
// const sqrt = document.querySelector(".sqrt");
// const procent = document.querySelector(".procent");
// const substract = document.querySelector(".substract");
// const add = document.querySelector(".add");
// const devide = document.querySelector(".devide");
// const multiply = document.querySelector(".multiply");
// const square = document.querySelector(".square");
// const comma = document.querySelector(".comma");
// const equal = document.querySelector(".equal");
// const btnAll = document.querySelectorAll(".btn");
// const allOperators = document.querySelectorAll(".operator");

// const ofon = document.querySelector(".ofon");
// const back = document.querySelector(".back");
// const display = document.querySelector(".display");

// const container = document.querySelector(".container");

// // const upadateDisplay = function (value) {
// //   const maxDisplayLength = 14; // Maksymalna długość zawartości .display

// //   // Sprawdź, czy wartość jest liczbą
// //   if (!isNaN(value)) {
// //     // Konwertuj wartość na string i skróć do określonej długości
// //     let stringValue = value.toString();

// //     // Jeśli wartość jest liczbą, ale przekracza maksymalną długość, skróć
// //     if (stringValue.length > maxDisplayLength) {
// //       const dotIndex = stringValue.indexOf(".");
// //       if (dotIndex !== -1) {
// //         // Jeśli liczba ma kropkę, utrzymaj jedną cyfrę po kropce
// //         stringValue = value.toPrecision(maxDisplayLength - dotIndex - 1);
// //       } else {
// //         // Jeśli liczba nie ma kropki, skróć do określonej długości
// //         stringValue = value.toPrecision(maxDisplayLength - 1);
// //       }
// //     }

// //     // Zaktualizuj .display
// //     display.textContent = stringValue;
// //   } else {
// //     // Jeśli wartość nie jest liczbą (np. NaN) i jest operatorem, zaktualizuj .display
// //     if (["+", "-", "*", "/"].includes(value)) {
// //       // Sprawdź, czy dodanie operatora nie przekroczy maksymalnej długości
// //       if (display.textContent.length < maxDisplayLength) {
// //         display.textContent += value;
// //       }
// //     } else {
// //       // Jeśli wartość nie jest ani liczbą, ani operatorem, zaktualizuj .display bez żadnych zmian
// //       display.textContent = value;
// //     }
// //   }
// // };
// const upadateDisplay = function (value) {
//   const maxDisplayLength = 14;
//   // Konwertuj wartość na string i skróć do określonej długości
//   const stringValue = value.toString();
//   const shortenedValue = stringValue.slice(0, maxDisplayLength);

//   display.textContent = shortenedValue;
// };

// allNumbers.forEach((button) => {
//   button.addEventListener("click", function () {
//     if (display.textContent === "0") {
//       display.textContent = "";
//     }
//     const value = button.dataset.value;

//     const resoult = display.textContent + value;
//     upadateDisplay(resoult);
//   });
// });

// allOperators.forEach((button) => {
//   button.addEventListener("click", function () {
//     const value = button.dataset.value;
//     const currentContent = display.textContent;
//     const lastChar = currentContent.slice(-1);

//     const availableOperators = Array.from(allOperators).map(
//       (operator) => operator.dataset.value
//     );
//     // Sprawdź, czy ostatni znak to już operator
//     const isLastCharOperator = availableOperators.includes(lastChar);

//     if (!isLastCharOperator) {
//       //Wymyślic jak zrobić aby brało wszytskie operatory a nie tylko ten sam rodzaj
//       const resoult = display.textContent + value;
//       upadateDisplay(resoult);
//     } else {
//       const resoult = currentContent.slice(0, -1) + value;
//       upadateDisplay(resoult);
//     }
//   });
// });

// ofon.addEventListener("click", function (e) {
//   display.textContent = 0;
// });

// square.addEventListener("click", function () {
//   const value = display.textContent;
//   display.textContent = Math.pow(value, 2);
// });

// procent.addEventListener("click", function () {
//   const value = display.textContent;
//   display.textContent = value / 100;
// });

// sqrt.addEventListener("click", function () {
//   const value = display.textContent;
//   const resoult = Math.sqrt(value);
//   upadateDisplay(resoult);
// });

// equal.addEventListener("click", function () {});
// console.log(typeof devide.dataset.value);

// // allNumbers.addEventListener("click", function (e) {
// //   console.log("HAlo");
// // });

// // number1.addEventListener("click", function (e) {
// //   e.preventDefault();
// //   console.log("HEj");
// //   display.textContent = 1;
// // });

// // add.addEventListener("click", function (e) {
// //   e.preventDefault();
// //   console.log("HEj");
// //   if (display.textContent === "+") return 0;
// //   else display.textContent = `${display.textContent} +`;
// // });

// ofon.addEventListener("click", function (e) {
//   display.textContent = 0;
// });

// /*

// Pobranie danych z przycisków
// Wyświetlenie danych odpowiadającej danemu przyciskowi
// Należy dodać warunek dzieki któremu nie będzie można wstwaić operatora po operatorze
/////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");

  let currentInput = "0";
  let operator = null;
  let previousInput = null;

  const btnAll = document.querySelectorAll(".btn");

  const updateDisplay = function (value) {
    const maxDisplayLength = 14;
    // Konwertuj wartość na string i skróć do określonej długości
    const stringValue = value.toString();
    const shortenedValue = stringValue.slice(0, maxDisplayLength);

    display.textContent = shortenedValue;
  };

  const handleNumberClick = function (value) {
    if (currentInput === "0" || operator) {
      currentInput = value;
    } else if (value === "." && currentInput.includes(".")) {
      return; // unikaj dodawania więcej niż jednej kropki
    } else {
      currentInput += value;
    }
    updateDisplay(currentInput);
  };

  const handleClearClick = function () {
    currentInput = "0";
    operator = null;
    previousInput = null;
    updateDisplay(currentInput);
  };

  const handleBackspaceClick = function () {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
      currentInput = "0";
    }
    updateDisplay(currentInput);
  };

  const handleOperatorClick = function (value) {
    if (operator) {
      calculate();
      operator = value;
      console.log("num2 after calculate in handleOperatorClick:", currentInput);
    } else {
      operator = value;
      previousInput = currentInput;
      console.log("num1 after handleOperatorClick:", previousInput);
    }
    updateDisplay(previousInput);
  };

  const handleEqualClick = function () {
    calculate();
    operator = null;
    updateDisplay(currentInput);
  };

  const handleSquareClick = function () {
    if (currentInput !== "0") {
      currentInput = Math.pow(parseFloat(currentInput), 2);
      updateDisplay(currentInput);
    }
  };

  const handleSqrtClick = function () {
    if (currentInput !== "0") {
      currentInput = Math.sqrt(parseFloat(currentInput));
    }
    updateDisplay(currentInput);
  };

  btnAll.forEach((button) =>
    button.addEventListener("click", function () {
      const value = button.dataset.value;

      if (!isNaN(parseFloat(value)) || value === ".") {
        handleNumberClick(value);
      } else if (value === "C") {
        handleClearClick();
      } else if (value === "B") {
        handleBackspaceClick();
      } else if (["+", "-", "*", "/", "%"].includes(value)) {
        handleOperatorClick(value);
      } else if (value === "=") {
        handleEqualClick();
      } else if (value === "^2") {
        handleSquareClick();
      } else if (value === "sqrt2") {
        handleSqrtClick();
      }
    })
  );

  const calculate = function () {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    console.log("num1:", num1);
    console.log("num2:", num2);

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operator) {
        case "+":
          currentInput = num1 + num2;
          break;
        case "-":
          currentInput = num1 - num2;
          break;
        case "*":
          currentInput = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            currentInput = num1 / num2;
          } else {
            currentInput = "Error";
          }
          break;
        case "%":
          currentInput = (num1 * num2) / 100;
      }
      previousInput = currentInput;
    }
    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("currentInput after calculation:", currentInput);
  };

  const calculateSquare = function () {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
      currentInput = (num ** 2).toString();
      previousInput = currentInput;
    }
  };
});

// document.addEventListener("DOMContentLoaded", function () {
//   const allNumbers = document.querySelectorAll(".nbr");
//   const allOperators = document.querySelectorAll(".operator");
//   const clearButton = document.querySelector(".clear");
//   const equalsButton = document.querySelector(".equal");
//   let currentInput = "0";
//   let operator = null;
//   let previousInput = null;

//   const updateDisplay = function (value) {
//     const maxDisplayLength = 14;
//     const stringValue = value.toString();
//     const containsOperator = /[\+\-\*\/]/.test(stringValue);

//     let shortenedValue;

//     if (containsOperator) {
//       shortenedValue = stringValue.slice(0, maxDisplayLength);
//     } else {
//       shortenedValue =
//         stringValue !== "0"
//           ? stringValue.length > maxDisplayLength
//             ? stringValue.slice(0, maxDisplayLength)
//             : stringValue
//           : "";
//     }

//     display.textContent = shortenedValue;
//   };

//   const handleNumberClick = function (value) {
//     if (currentInput === "0") {
//       currentInput = value;
//     } else {
//       currentInput += value;
//     }
//     updateDisplay(currentInput);
//   };

//   const handleOperatorClick = function (value) {
//     if (operator) {
//       calculate();
//       operator = value;
//       previousInput = currentInput;
//       currentInput = "0";
//       updateDisplay(previousInput);
//     } else {
//       operator = value;
//       previousInput = currentInput;
//       currentInput = "0";
//       updateDisplay(previousInput);
//     }
//   };

//   const calculate = function () {
//     const num1 = parseFloat(previousInput);
//     const num2 = parseFloat(currentInput);

//     if (!isNaN(num1) && !isNaN(num2)) {
//       switch (operator) {
//         case "+":
//           currentInput = (num1 + num2).toString();
//           break;
//         case "-":
//           currentInput = (num1 - num2).toString();
//           break;
//         case "*":
//           currentInput = (num1 * num2).toString();
//           break;
//         case "/":
//           currentInput = num2 !== 0 ? (num1 / num2).toString() : "Error";
//           break;
//         default:
//           break;
//       }
//       updateDisplay(currentInput);
//     }
//   };

//   const handleClearClick = function () {
//     currentInput = "0";
//     operator = null;
//     previousInput = null;
//     updateDisplay(currentInput);
//   };

//   const handleEqualsClick = function () {
//     calculate();
//     operator = null;
//   };

//   allNumbers.forEach((button) => {
//     button.addEventListener("click", function () {
//       const value = button.dataset.value;
//       handleNumberClick(value);
//     });
//   });

//   allOperators.forEach((button) => {
//     button.addEventListener("click", function () {
//       const value = button.dataset.value;
//       handleOperatorClick(value);
//     });
//   });

//   clearButton.addEventListener("click", handleClearClick);

//   equalsButton.addEventListener("click", handleEqualsClick);
// });
