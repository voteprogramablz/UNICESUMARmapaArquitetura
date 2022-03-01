const button = document.querySelector("[data-btn]");
const divColor = document.querySelector("#colorSelected");
const hexaValue = document.querySelector("[data-hexa]");

function handleSubmit(event) {
  event.preventDefault();
  const inputRA = document.querySelector("#ra");
  const RAEighthCharactere = inputRA.value[6];

  if (!inputRA.value.trim()) {
    alert("Insira seu RA");
    return;
  }

  const binaryDigit = checkBinaryValue(+RAEighthCharactere);
  const hexa = parseInt(binaryDigit, 2).toString(16).toUpperCase();

  if (hexa === "NAN") {
    hexaValue.innerText = "";
  } else {
    divColor.style.background = `#${hexa}`;
    hexaValue.innerText = `A sua cor em hexadecimal é: #${hexa}`;
  }
}

function checkBinaryValue(number) {
  switch (+number) {
    case 0: {
      return "000000001000000000000000";
    }
    case 1: {
      return "111111111111101011111010";
    }
    case 2: {
      return "110100100110100100011110";
    }
    case 3: {
      return "010010110000000010000010";
    }
    case 4: {
      return "111011101000001011101110";
    }
    case 5: {
      return "111110101000000001110010";
    }
    case 6: {
      return "111111111010010100000000";
    }
    case 7: {
      return "111111111111111100000000";
    }
    case 8: {
      return "111111111100101111011011";
    }
    case 9: {
      return "000000000000000011111111";
    }
  }
}

button.addEventListener("click", handleSubmit);
