import React, { useState } from "react";
import { Form, Badge } from "react-bootstrap";

const SkillsForm = ({ onSubmit }) => {
  const [skillsList, setSkillsList] = useState([]);
  const [skill, setSkill] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const addSkill = () => {
    if (skill.trim() === "") {
      return;
    }
    setSkillsList([...skillsList, skill]);
    onSubmit([...skillsList, skill]);
    setSkill("");
  };

  const handleDelete = (index) => {
    const updatedSkillsList = [...skillsList];
    updatedSkillsList.splice(index, 1);
    setSkillsList(updatedSkillsList);
    onSubmit(updatedSkillsList);
  };

  return (
    <>
      <div className="my-2">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group>
            <div className="card">
              <div className="card-header">
                <h3>Skills</h3>
              </div>
              <div className="p-2">
                {skillsList.map((skill, index) => (
                  <Badge key={index} className="m-2 bg-warning text-dark ">
                    {skill}
                    <span
                      className="mx-1 text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(index)}
                    >
                      &times;
                    </span>
                  </Badge>
                ))}
              </div>
              <div className=" p-3">
                <label className="label">Skills
                <small> (Press enter to save skills)</small></label>
                <Form.Control
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Add Skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default SkillsForm;
