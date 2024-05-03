import React, { useState } from "react";
import convert from "convert"; // Import the convert package
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const LengthConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (!value || !fromUnit || !toUnit) {
      console.error("Please enter a value and select units for conversion.");
      return;
    }

    try {
      const convertedValue = convert(value, fromUnit).to(toUnit);
      setResult(convertedValue);
    } catch (error) {
      console.error("Error converting:", error.message);
    }
  };

  return (
    <>
      <Breadcrums />
      <div className="container">
        <h3>Length Converter</h3>
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Value
              </span>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
                From
              </label>
              <select
                class="form-select"
                id="inputGroupSelect01"
                value={fromUnit}
                onChange={(e) => {
                  setFromUnit(e.target.value);
                  handleConvert();
                }}
              >
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="ft">Feet</option>
                <option value="mi">Mile</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
                To
              </label>
              <select
                class="form-select"
                id="inputGroupSelect01"
                value={toUnit}
                onChange={(e) => {
                  setToUnit(e.target.value);
                  handleConvert();
                }}
              >
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="ft">Feet</option>
                <option value="mi">Mile</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <button className="btn btn-sm btn-success" onClick={handleConvert}>
            Convert
          </button>
        </div>
        {value && result && (
          <div className="text-center p-2 my-2 border border-1 rounded-2">
            <span className="fs-1 badge bg-primary">
              {value}
              {fromUnit} equals {result}
              {toUnit}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default LengthConverter;
