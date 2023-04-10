import axios from "axios";
import { useState } from "react";

function Conversion() {
  // state for result
  const [result, setResult] = useState("");

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const amountValue = event.target.amount.value;
    const currency = event.target.currency.value;
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

  return (
    <section className="conversion">
      <form onSubmit={handleSubmit}>
        <label htmlFor="currency">Choose currency:</label>
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CHF">CHF</option>
        </select>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Insert Amount"
          name="amount"
        ></input>

        <button type="submit">Convert</button>
      </form>

      <div className="result">{result}</div>
    </section>
  );
}

export default Conversion;
