import React, { useState } from "react";
import numberToWords from "number-to-words";
import _ from "lodash";

const NumberToWordsConverter = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState({});
  const [words, setWords] = useState("");

  const [type, setType] = useState("1");

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
    if (!isNaN(value)) {
      const words = numberToWords.toWords(value);
      setWords(words);
    } else {
      setWords("");
    }
  };

  const handleChangeText = (e) => {
    const value = e.target.value;
    const upper = _.upperCase(value);
    const lower = _.lowerCase(value);
    const cap = _.capitalize(value);
    const snake = _.snakeCase(value);
    const camel = _.camelCase(value);
    const kebab = _.kebabCase(value);
    const start = _.startCase(value);

    setText({
      uppercase: upper,
      lowercase: lower,
      cap: cap,
      snake: snake,
      camel: camel,
      kebab: kebab,
      start: start,
    });
  };

  return (
    <>
      <div class="container input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">
          Choose your tranformation
        </label>
        <select
          class="form-select form-select-sm w-75"
          id="inputGroupSelect01"
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="1" selected>
            Number to Words Transformation
          </option>
          <option value="2">Text Transformation</option>
        </select>
      </div>
      {type == "1" && (
        <div className="container d-flex flex-column align-items-center justify-content-center ">
          <h4 className="text-center">Number to Words Converter</h4>
          <input
            className="form-control form-control-sm w-75"
            type="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter a number"
          />
          <div>
            {isNaN(number) ? (
              <p>Please enter a valid number.</p>
            ) : (
              <>
                {number > 0 && (
                  <div className="my-3 fs-1 text-center ">
                    <p className="badge bg-primary text-wrap"> {words}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
      {type == "2" && (
        <div className="container d-flex flex-column align-items-center justify-content-center ">
          <h4 className="text-center">Text Transformation</h4>
          <div class="container input-group">
            <label class="input-group-text" for="inputGroupSelect01">
              Enter the text
            </label>
            <input
              className="form-control form-control-sm w-75"
              type="text"
              onChange={handleChangeText}
              placeholder="Enter a text"
            />
          </div>
          <div>
            {
              <>
                {text && (
                  <>
                    {/* <h3 className="my-3 text-center">TEXT TRANSOFRMATION</h3> */}
                    <ol class="list-group list-group-numbered my-2">
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Uppercase</div>
                          <small className="">{text.uppercase}</small>
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Lowercase</div>
                          <small className="">{text.lowercase}</small>
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Captalize</div>
                          <small className="">{text.cap}</small>
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Snake Case</div>
                          <small className="">{text.snake}</small>
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Camel Case</div>
                          <small className="">{text.camel}</small>
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Kebab Case</div>
                          <small className="">{text.kebab}</small>
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">Start Case</div>
                          <small className="">{text.start}</small>
                        </div>
                      </li>
                    </ol>
                  </>
                )}
              </>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default NumberToWordsConverter;
