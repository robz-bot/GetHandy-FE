// src/components/EducationForm.js
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EducationForm = ({ onSubmit }) => {
  const [educationList, setEducationList] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (school == null || school == "") {
      toast("School is required");
      return;
    }
    if (degree == null || degree == "") {
      toast("Degree is required");
      return;
    }
    if (year == null || year == "") {
      toast("Year is required");
      return;
    }
    if (percentage == null || percentage == "") {
      toast("Percentage is required");
      return;
    }
    const newEducation = { school, degree, year, percentage };
    setEducationList([...educationList, newEducation]);
    onSubmit(newEducation);
    setSchool("");
    setDegree("");
    setYear("");
    setPercentage("");
    toast("Education Details saved!");
  };

  const handleRemove = (index) => {
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    setEducationList(updatedEducationList);
  };

  return (
    <>
      <div className="my-2">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h3>Education</h3>
            </div>
            <div className="card-body">
              {educationList.length > 0 && (
                <table className="table table-hover table-sm">
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Degree</th>
                      <th>Year</th>
                      <th>Percentage</th>
                      <th>Actions</th> {/* New column for remove button */}
                    </tr>
                  </thead>
                  <tbody>
                    {educationList.map((edu, index) => (
                      <tr key={index}>
                        <td>{edu.school}</td>
                        <td>{edu.degree}</td>
                        <td>{edu.year}</td>
                        <td>{edu.percentage}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleRemove(index)}
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
                  <label className="label">School/College</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className="col-lg-3 col-sm-12">
                  <label className="label">Degree</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                  />
                </div>
                <div className="col-lg-3 col-sm-12">
                  <label className="label">Year</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="col-lg-3 col-sm-12">
                  <label className="label">Percentage</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Percentage"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex align-items-center justify-content-center ">
                <button className="my-2 btn btn-sm btn-primary" type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EducationForm;
