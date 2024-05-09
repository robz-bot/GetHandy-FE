import React, { useState } from "react";
import emojiRegex from "emoji-regex";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const EmojiComponent = () => {
  // Get the regex pattern for matching emojis
  const emojiPattern = emojiRegex();

  // Create an array to store emojis and their Unicode representations
  const emojis = [];

  // Define Unicode ranges to cover more emojis
  const unicodeRanges = [
    { start: 0x1f600, end: 0x1f64f }, // Emoticons
    { start: 0x1f300, end: 0x1f5ff }, // Miscellaneous Symbols and Pictographs
    { start: 0x1f680, end: 0x1f6ff }, // Transport and Map Symbols
    { start: 0x2600, end: 0x26ff }, // Miscellaneous Symbols
    // Add more Unicode ranges as needed to cover additional emojis
  ];

  // Iterate through each Unicode range to find emojis
  for (const range of unicodeRanges) {
    for (let i = range.start; i <= range.end; i++) {
      const emoji = String.fromCodePoint(i);
      if (emoji.match(emojiPattern)) {
        emojis.push({
          emoji: emoji,
          unicode: i.toString(16),
        });
      }
    }
  }

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter emojis based on search query
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.unicode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the number of columns based on the size of the filtered emojis array
  const numColumns = Math.ceil(filteredEmojis.length / 10); // Assuming 10 rows per column

  // Split filtered emojis array into arrays of columns
  const emojiColumns = [];
  for (let i = 0; i < numColumns; i++) {
    emojiColumns.push(filteredEmojis.slice(i * 10, (i + 1) * 10));
  }

  return (
    <>
      <Breadcrums />
      <div className="container">
        <h3 className="text-center">Emojis with Unicode Representation</h3>
        <div className="row mb-3">
          <div className="col">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search Unicode"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span class="input-group-text" id="basic-addon1">
                Total: {filteredEmojis.length} Emojis
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          {emojiColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`col-lg-${12 / numColumns} col-sm-12 col-md-${12 / 2}`}
            >
              <table className="table table-bordered border-primary table-sm table-responsive table-hover">
                <thead>
                  <tr>
                    <th>Emoji</th>
                    <th>Unicode</th>
                  </tr>
                </thead>
                <tbody>
                  {column.map((emoji, index) => (
                    <tr key={index}>
                      <td>{emoji.emoji}</td>
                      <td>{emoji.unicode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmojiComponent;
