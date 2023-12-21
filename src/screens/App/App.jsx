import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [total, setTotal] = useState(0);

  const [type, setType] = useState(0);

  const [level, setLevel] = useState(0);

  const [words, setWords] = useState(0);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Function to calculate total based on type and level multipliers
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
      return level + 1; // Adjust as needed based on your requirements
    };

    // Update total when type, level, or quantity changes
    setTotal(calculateTotal());
  }, [type, level, quantity]);

  const handleQuantityChange = (event) => {
    // Ensure the entered value is a number
    const value = parseInt(event.target.value, 10);

    // Check if the value is within the desired range
    if (!isNaN(value) && value >= 1 && value <= 100) {
      // if(words===1){
      //   const newValue = value*225;
      //   setQuantity(newValue)
      // }
      // else{
        setQuantity(value);
      // }
      
    }
  };

  useEffect (()=>{
    
    // if (!isNaN(quantity) && quantity >= 1 && quantity<= 10000) {
    //   if(words===1){
    //     const newValue = quantity*225;
    //     setQuantity(newValue)
    //   }
    //   else{
    //     setQuantity(quantity);
    //   }
      
    // }
  },[quantity,words])

  return (
    <div className="main-container">
      <div className="calculator-container">
        <div className="inner-container">
          <div className="type">
            <div
              className={`selector-btn ${type === 0 ? "selected-type" : ""} `}
              onClick={() => setType(0)}
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
          <div className="inner-container-2">
            <div className="qty-and-deadline">
              <div className="quantity">
                <label htmlFor="quantity">
                  Quantity
                </label>
                <br />
                <input
                  type="number"
                  value={words === 1 ? quantity * 225 : quantity}
                  onChange={handleQuantityChange}
                  defaultValue="1"
                  id="quantity"
                  name="quantity"
                  min="1" // You can set a minimum value if needed
                  max="100"
                  className="quantity-input"
                  disabled={words === 1} 
                />
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
          <div className="inner-container-3">
            <div className="price">
              <div className="approx-price">Approx. Price</div>
              <div className="total-price">${total}</div>
            </div>
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
