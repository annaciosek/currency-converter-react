import React from "react";
import axios from "axios";

function Conversion() {
  return (
    <section className="conversion">
      <form>
        <label htmlFor="currency">Choose currency:</label>
        <select id="currency" value={currentCurrency}>
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
        ></input>

        <button type="submit">Convert</button>
      </form>

      <div className="result"></div>
    </section>
  );
}

export default Conversion;
