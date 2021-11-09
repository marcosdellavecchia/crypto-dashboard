import React from "react";
const Convert = () => {
  const testConst = null;

  return (
    <>
      <div className="container board-header">
        <div id="exchange-ranking" className="col-md-3">
          Quantity
        </div>
        <div className="col-md-3">From</div>
        <div className="col-md-3">To</div>
        <div id="exchange-country" className="col-md-3">
          Acción
        </div>
      </div>
      <div className="container board">
        <div className="exchanges">
          <div id="exchange-ranking" className="col-md-3 exchange">
            <input type="number" name="quantity" />
          </div>
          <div className="col-md-3 exchange">
            <select>
              <option>Placeholder from</option>
            </select>
          </div>
          <div className="col-md-3 exchange">
            <select>
              <option>Placeholder to</option>
            </select>
          </div>
          <div id="exchange-country" className="col-md-3 exchange">
            <button>Convert</button>
          </div>
        </div>

        <div className="exchanges">
          <div id="exchange-ranking" className="col-md-12 exchange">
            Result
          </div>
        </div>
      </div>
    </>
  );
};

export default Convert;
