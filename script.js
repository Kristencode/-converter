function convertCurrency() {
  let amount = parseFloat(document.getElementById("amount").value);
  let midBody = document.getElementById("result");
  let dropdown = document.getElementById("allCurrency");
  let selectedCurrency = dropdown.value;

  fetch("https://open.er-api.com/v6/latest/USD")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let rate = data.rates[selectedCurrency];
      let converted = amount * rate;

      midBody.innerText =
        amount + " USD = " + converted.toFixed(2) + " " + selectedCurrency;
    });
}

function cur() {
  let dropdown = document.getElementById("allCurrency");

  if (dropdown.options.length === 0) {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let currencies = Object.keys(data.rates);

        currencies.forEach(function (currency) {
          let option = document.createElement("option");
          option.value = currency;
          option.textContent = currency;
          dropdown.appendChild(option);
        });
      });
  }
}
