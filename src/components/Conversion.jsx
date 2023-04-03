import React from "react";
import axios from "axios";
import { useState } from "react";

function Conversion() {
  // states - currency, amount & result
  const [currency, setCurrency] = useState("EUR");
  const [amountValue, setAmountValue] = useState("");
  const [result, setResult] = useState("");

  // button click action
  const handleClick = (event) => {
    event.preventDefault();
    if (amountValue > 0) {
      axios
        .get(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}`)
        .then((response) => {
          setResult(
            `${(response.data.rates[0].mid * amountValue).toFixed(2)} PLN`
          );
        })
        .catch((error) => {
          setResult(
            "There was an error fetching data. Please refresh and try again."
          );
        });
    } else {
      setResult("Amount must be bigger than 0");
    }
  };

  // currency onChange
  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  // amount onChange
  const handleAmount = (event) => {
    setAmountValue(event.target.value);
  };

  return (
    <section className="conversion">
      <form>
        <label htmlFor="currency">Choose currency:</label>
        <select id="currency" value={currency} onChange={handleCurrency}>
          <option>EUR</option>
          <option>USD</option>
          <option>CHF</option>
        </select>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Insert Amount"
          onChange={handleAmount}
        ></input>

        <button type="submit" onClick={handleClick}>
          Convert
        </button>
      </form>

      <div className="result">{result}</div>
    </section>
  );
}

export default Conversion;
