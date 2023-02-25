import "./style.css";
import javascriptLogo from "./javascript.svg";

// const masked = "*".repeat(n - 4) + cardNumber.slice(-4);

// return masked;

function maskCreditCard(cardNumber) {
  const n = cardNumber.length;

  // splice the last four characters
  const lastFour = cardNumber.slice(-4);
  const remaining = cardNumber.slice(0, n - 4);

  // mask the remaining numbers with asterisks
  const masked = "*".repeat(remaining.length) + lastFour;

  return masked;
}

const creditCardNumberElement = document.getElementById("card");
const creditCardNumber = creditCardNumberElement.textContent;
const maskedNumber = maskCreditCard(creditCardNumber);
creditCardNumberElement.textContent = maskedNumber;
