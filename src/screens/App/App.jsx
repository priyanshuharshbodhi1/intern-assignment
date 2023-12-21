import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {

  //states
  const [total, setTotal] = useState(0);
  const [type, setType] = useState(0);
  const [level, setLevel] = useState(0);
  const [words, setWords] = useState(0);
  const [quantity, setQuantity] = useState(1);

  //To update total when any of it type, level or quantity changes
  useEffect(() => {
    // Function to calculate total based on type and level multipliers (and quantity applied)
    const calculateTotal = () => {
      const typeMultiplier = getTypeMultiplier();
      const levelMultiplier = getLevelMultiplier();
      const totalMultiplier = typeMultiplier * levelMultiplier * 3;
      return quantity * totalMultiplier;
    };

    // Function to get type multiplier
    const getTypeMultiplier = () => {
      switch (type) {
        case 0:
          return 4;
        case 1:
          return 1;
        case 2:
          return 6;
        default:
          return 1;
      }
    };

    // Function to get level multiplier
    const getLevelMultiplier = () => {
      return level + 1;
    };

    // Update total when type, level, or quantity changes
    setTotal(calculateTotal());

  }, [type, level, quantity]);

  //function for handelling quantity changing event
  const handleQuantityChange = (event) => {
    // Ensure the entered value is a number
    const value = parseInt(event.target.value, 10);

    // Check if the value is within the desired range
    if (!isNaN(value) && value >= 1 && value <= 100) {
        setQuantity(value);
    }
  };

  return (
    <div className="main-container">
      <div className="calculator-container">
        <div className="inner-container">
          {/* Type selection section */}
          <div className="type">
            <div
              className={`selector-btn ${type === 0 ? "selected-type" : ""} `} // Sets a class of 'selected type' when clicking on it.
              onClick={() => setType(0)} // Set index to state.
            >
              Academic writing
            </div>
            <div
              className={`selector-btn ${type === 1 ? "selected-type" : ""}`}
              onClick={() => setType(1)}
            >
              Editing and proofreading
            </div>
            <div
              className={`selector-btn ${type === 2 ? "selected-type" : ""}`}
              onClick={() => setType(2)}
            >
              Calculations
            </div>
          </div>

          {/* Educational level selection section */}
          <div className="educational-level">
            <div
              className={`selector-btn ${level === 0 ? "selected-type" : ""} `}
              onClick={() => setLevel(0)}
            >
              High school
            </div>
            <div
              className={`selector-btn ${level === 1 ? "selected-type" : ""} `}
              onClick={() => setLevel(1)}
            >
              Undergraduate
            </div>
            <div
              className={`selector-btn ${level === 2 ? "selected-type" : ""} `}
              onClick={() => setLevel(2)}
            >
              Bachelor
            </div>
            <div
              className={`selector-btn ${level === 3 ? "selected-type" : ""} `}
              onClick={() => setLevel(3)}
            >
              Professional
            </div>
          </div>

          {/* Paper type selection section */}
          <div className="paper-type">
            <label htmlFor="paper-type">Type of paper</label>
            <br />
            <select
              id="paper-type"
              name="paper-type"
              className="paper-type-dropdown"
            >
              <option value="" style={{ color: "gray" }}>
                Select type
              </option>
              <option value="Research Paper">Research Paper</option>
              <option value="Research proposal">Research proposal</option>
              <option value="Thesis">Thesis</option>
              <option value="Thesis Proposal">Thesis Proposal</option>
              <option value="Speech">Speech</option>
              <option value="Thesis Statement">Thesis Statement</option>
            </select>
          </div>

          {/* Quantity and deadline input section */}
          <div className="inner-container-2">
            <div className="qty-and-deadline">
              {/* Quantity input */}
              <div className="quantity">
                <label htmlFor="quantity">
                  Quantity
                </label>
                <br />
                <input
                  type="number"
                  value={words === 1 ? quantity * 225 : quantity} //Qunatity as per selected - words or pages.
                  onChange={handleQuantityChange}
                  defaultValue="1"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="100"
                  className="quantity-input"
                  disabled={words === 1} 
                />

                {/* Page/word configuration */}
                <div className="page-config">
                  <div
                    className={`selector-btn ${
                      words === 0 ? "selected-type" : ""
                    } `}
                    onClick={() => setWords(0)}
                  >
                    Pages
                  </div>
                  <div
                    className={`selector-btn ${
                      words === 1 ? "selected-type" : ""
                    } `}
                    onClick={() => setWords(1)}
                  >
                    Words
                  </div>
                </div>
              </div>

              {/* Deadline input */}
              <div className="deadline">
                <label htmlFor="deadline">Deadline</label>
                <br />
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="deadline-date"
                />
              </div>
            </div>
          </div>

          {/* Price and order button section */}
          <div className="inner-container-3">

            {/* Total Price */}
            <div className="price">
              <div className="approx-price">Approx. Price</div>
              <div className="total-price">${total}</div>
            </div>

            {/* Order button */}
            <Link
              to="/thank-you"
              className="order-btn"
              style={{ textDecoration: "none", color: "black" }}
            >
              <b>PROCEED TO ORDER</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
