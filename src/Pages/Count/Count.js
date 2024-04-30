import React, { useState } from "react";
import _ from "lodash";

function Count() {
  const [text, setText] = useState("");
  const [counts, setCounts] = useState({});

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    updateCounts(newText);
  };

  const updateCounts = (newText) => {
    const charCount = newText.length;
    const charCount1 = _.countBy(newText);
    const wordCount = newText
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const sentenceCount = newText
      .split(/[.!?]+/)
      .filter((sentence) => sentence.length > 0).length;
    const spaceCount = newText.split(" ").length - 1;
    setCounts({
      all: charCount1,
      characters: charCount,
      words: wordCount,
      sentences: sentenceCount,
      spaces: spaceCount,
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Text Analyzer</h3>
      <textarea
        className="form-control form-control-sm"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={50}
      />
      <div className="my-3 d-flex flex-column align-items-center justify-content-center ">
        <h3>Major Counts</h3>
        <ol className="list-group list-group-horizontal ">
          <li className="list-group-item d-flex  align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Characters</div>
            </div>
            <span className="mx-4 badge text-bg-primary rounded-pill">
              {counts.characters}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Words</div>
            </div>
            <span className="mx-4 badge text-bg-primary rounded-pill">
              {counts.words}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Sentences</div>
            </div>
            <span className="mx-4 badge text-bg-primary rounded-pill">
              {counts.sentences}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Spaces</div>
            </div>
            <span className="mx-4 badge text-bg-primary rounded-pill">
              {counts.spaces}
            </span>
          </li>
        </ol>
        {counts.all && (
          <>
            <h3 className="my-3">Individual count</h3>
            <div className="">
              <ul className="d-flex flex-wrap">
                {Object.entries(counts.all).map(([key, value]) => (
                  <li
                    className="border border-0 bg-white list-group-item d-flex align-items-start me-3 mb-3"
                    key={key}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{key}</div>
                    </div>
                    <span className="mx-3 badge text-bg-info rounded-pill">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Count;
