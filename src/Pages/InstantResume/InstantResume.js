// src/InstantResume.js
import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import Preview from "./Preview";
import EducationForm from "./EducationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExperienceForm from "./ExperienceForm";

function InstantResume() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [preview, setPreview] = useState(false);

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducation([...education, data]);
  };

  const handleExperienceSubmit = (data) => {
    setExperience([...experience, data]);
  };

  const handleSkillsSubmit = (data) => {
    setSkills([...skills, data]);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div>
        <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
        <EducationForm onSubmit={handleEducationSubmit} />
        <ExperienceForm onSubmit={handleExperienceSubmit} />
        {/* <SkillsForm onSubmit={handleSkillsSubmit} /> */}
      </div>
      <div className="d-flex align-items-center justify-content-center ">
        <button
          className="btn btn-sm btn-warning"
          onClick={() => {
            if (personalInfo != null && education.length > 0) {
              setPreview(true);
            } else {
              toast("Fill all required Fields to get Preview");
            }
          }}
        >
          Show Preview
        </button>
        {preview && (
          <button
            className="mx-2 btn btn-sm btn-danger"
            onClick={() => {
              setPreview(false);
            }}
          >
            Hide Preview
          </button>
        )}
      </div>
      {preview && (
        <Preview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      )}
    </div>
  );
}

export default InstantResume;
