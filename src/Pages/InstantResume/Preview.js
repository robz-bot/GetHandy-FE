// src/components/Preview.js
import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const Preview = ({ personalInfo, education, experience, skills }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (color) => {
    setTheme(color);
  };

  const downloadResume = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save();
  };

  return (
    <div>
      <h2 className="text-center">Preview</h2>
      <div className="m-2 d-flex align-items-center justify-content-center fs-1">
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-primary"
          onClick={() => changeTheme("primary")}
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-success"
          onClick={() => changeTheme("success")}
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-secondary"
          onClick={() => changeTheme("secondary")}
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-danger"
          onClick={() => changeTheme("danger")}
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-warning"
          onClick={() => changeTheme("warning")}
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-dark"
          onClick={() => changeTheme("dark")}
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="mx-2 bi bi-circle-fill text-info"
          onClick={() => changeTheme("info")}
        ></i>
      </div>
      <div
        id="resume-preview"
        className="border border-1 rounded rounded-3 p-3"
      >
        {/* Personal Information */}
        <h3 className={"text-" + theme + " text-center"}>
          {personalInfo.name}
        </h3>
        <div className="row">
          <div className="col-6">
            <p>
              <span className={"text-" + theme + " fw-bold"}>Email: </span>
              {personalInfo.email}
            </p>
          </div>
          <div className="col-6">
            <p>
              <span className={"text-" + theme + " fw-bold"}>Phone: </span>
              {personalInfo.phone}
            </p>
          </div>
          <div className="col-6">
            <p>
              <span className={"text-" + theme + " fw-bold"}>Designation:</span>
              {personalInfo.designation}
            </p>
          </div>
          <div className="col-6">
            <p>
              <span className={"text-" + theme + " fw-bold"}>Location: </span>
              {personalInfo.location}
            </p>
          </div>
          <div className="col-6">
            <p>
              <span className={"text-" + theme + " fw-bold"}>GitHub: </span>
              {personalInfo.github}
            </p>
          </div>
          <div className="col-6">
            <p>
              <span className={"text-" + theme + " fw-bold"}>LinkedIn: </span>
              {personalInfo.linkedIn}
            </p>
          </div>
          <hr />
          <div className="col-12">
            <p>
              <span className={"text-" + theme + " fw-bold"}>
                Professional Summary: 
              </span>
              {personalInfo.summary}
            </p>
          </div>
        </div>
        <hr/>
        {/* Education */}
        <div>
          <h5 className={"text-" + theme}>Education</h5>
          {education.length > 0 && (
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Year</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {education.map((edu, index) => (
                  <tr key={index}>
                    <td>{edu.school}</td>
                    <td>{edu.degree}</td>
                    <td>{edu.year}</td>
                    <td>{edu.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <button
        className={"btn-" + theme + " my-2 btn btn-sm"}
        onClick={downloadResume}
      >
        Download PDF
      </button>
      <div>
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.position}</p>
            <p>Duration: {exp.duration}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preview;
