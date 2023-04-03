import React from "react";
import axios from "axios";

function Conversion() {
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.nbp.pl/api/exchangerates/tables/A/${currency}`)
      .then((response) => {})
      .catch((error) => {});
  };
  return (
    <section className="conversion">
      <form>
        <label htmlFor="currency">Choose currency:</label>
        <select id="currency" value={currentCurrency} onChange={handleCurrency}>
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
          onChange={handleInput}
        ></input>

        <button type="submit" onClick={handleClick}>
          Convert
        </button>
      </form>

      <div className="result"></div>
    </section>
  );
}

export default Conversion;
