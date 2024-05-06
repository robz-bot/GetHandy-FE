import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const TimezoneList = () => {
  const [timezones, setTimezones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTimezones = () => {
      // Get all timezones
      const allTimezones = moment.tz.names();

      // Set timezones state
      setTimezones(allTimezones);
    };

    // Fetch timezones when component mounts
    fetchTimezones();
  }, []);

  const filteredTimezones = timezones.filter((timezone) =>
    timezone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h3 className="text-center">All Timezones</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Timezone"
          aria-label="Search Timezone"
          aria-describedby="search-addon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="input-group-text">
          Total: {filteredTimezones.length}
        </span>
      </div>

      <ul className="list-group list-group-vertical-sm">
        {filteredTimezones.map((timezone, index) => (
          <>
            <div className="row d-flex align-content-center justify-content-center ">
              <div className="col-6">
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={index}
                >
                  {timezone}
                  <span className="badge bg-secondary">
                    {moment().tz(timezone).format("DD MMM, YYYY HH:mm:ss a")}
                  </span>
                </li>
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TimezoneList;
