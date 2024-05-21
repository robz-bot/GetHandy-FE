// src/InstantResume.js
import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import Preview from "./Preview";
import EducationForm from "./EducationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import ProjectExperienceForm from "./ProjectExpereinceForm";

function InstantResume() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
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

  const handleProjectSubmit = (projectData) => {
    setExperienceList([...experienceList, projectData]);
  };

  const handleEdit = (editedProject) => {
    // Find the index of the edited project in the experienceList
    const index = experienceList.findIndex(
      (project) => project.projectNumber === editedProject.projectNumber
    );
    // If the project is found, replace it with the edited project
    if (index !== -1) {
      const updatedList = [...experienceList];
      updatedList[index] = editedProject;
      setExperienceList(updatedList);
    }
  };

  const handleDelete = (deletedProject) => {
    // Filter out the deleted project from the experienceList
    const updatedList = experienceList.filter(
      (project) => project.projectNumber !== deletedProject.projectNumber
    );
    setExperienceList(updatedList);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div>
        <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
        <EducationForm onSubmit={handleEducationSubmit} />
        <ExperienceForm onSubmit={handleExperienceSubmit} />
        <SkillsForm onSubmit={handleSkillsSubmit} />
        <ProjectExperienceForm
          experienceList={experienceList}
          onSubmit={handleProjectSubmit}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
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
          experienceList={experienceList}
        />
      )}
    </div>
  );
}

export default InstantResume;
