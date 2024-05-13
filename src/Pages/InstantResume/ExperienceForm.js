// src/components/ExperienceForm.js
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExperienceForm = ({ onSubmit }) => {
  const [experienceList, setExperienceList] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company == null || company == "") {
      toast("Company is required");
      return;
    }
    if (position == null || position == "") {
      toast("School is required");
      return;
    }
    if (startMonth == null || startMonth == "") {
      toast("Start Month is required");
      return;
    }
    if (startYear == null || startYear == "") {
      toast("Start Year is required");
      return;
    }
    if (endMonth == null || endMonth == "") {
      toast("End Month is required");
      return;
    }
    if (endYear == null || endYear == "") {
      toast("End Year is required");
      return;
    }
    const newExperience = {
      company,
      position,
      duration: `${startMonth}' ${startYear} - ${endMonth}' ${endYear}`,
    };
    setExperienceList([...experienceList, newExperience]);
    onSubmit(newExperience);
    setCompany("");
    setPosition("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
  };

  const handleDelete = (index) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList.splice(index, 1);
    setExperienceList(updatedExperienceList);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 50; year--) {
    years.push(year);
  }

  return (
    <div className="my-2">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h3>Experience</h3>
          </div>
          <div className="card-body">
            {experienceList.length > 0 && (
              <table className="table table-hover table-sm">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Duration</th>
                    <th>Actions</th> {/* New column for remove button */}
                  </tr>
                </thead>
                <tbody>
                  {experienceList.map((edu, index) => (
                    <tr key={index}>
                      <td>{edu.company}</td>
                      <td>{edu.position}</td>
                      <td>{edu.duration}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          // onClick={() => handleRemove(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <label className="label">Company</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-sm-12">
                <label className="label">Position</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Company"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-sm-12">
                <label className="label">Start Date</label>
                <select
                  className="form-select form-select-sm"
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select form-select-sm"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                >
                  <option value="">Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-3 col-sm-12">
                <label className="label">End Date</label>
                <select
                  className="form-select form-select-sm"
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select form-select-sm"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                >
                  <option value="">Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex align-items-center justify-content-center ">
              <button className="btn btn-sm btn-primary" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
