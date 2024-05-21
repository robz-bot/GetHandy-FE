import React, { useState } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";

const ProjectExperienceForm = ({ experienceList, onSubmit, onEdit, onDelete }) => {
  const [projectNumber, setProjectNumber] = useState("");
  const [projectName, setProjectName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [environment, setEnvironment] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleEdit = (project) => {
    setProjectNumber(project.projectNumber);
    setProjectName(project.projectName);
    setRole(project.role);
    setDescription(project.description);
    setResponsibilities(project.responsibilities);
    setEnvironment(project.environment);
    const start = project.duration.split('-')[0].trim();
    const end = project.duration.split('-')[1].trim();
    setStartMonth(start.split("/")[0]);
    setStartYear(start.split("/")[1].trim());
    setEndMonth(end.split("/")[0].trim());
    setEndYear(end.split("/")[1]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectNumber) {
      // If projectNumber is set, it's in edit mode
      const editedProject = {
        projectNumber,
        projectName,
        role,
        description,
        responsibilities,
        environment,
        duration: `${startMonth}/${startYear} - ${endMonth}/${endYear}`,
      };
      onEdit(editedProject);
    } else {
      // If projectNumber is not set, it's a new project
      const projectData = {
        projectNumber: experienceList.length + 1, // Auto-generated project number
        companyName: "", // Company name will be passed from parent component as dropdown
        projectName,
        role,
        description,
        responsibilities,
        environment,
        duration: `${startMonth}/${startYear} - ${endMonth}/${endYear}`,
      };
      onSubmit(projectData);
    }
    // Clear form fields
    setProjectNumber("");
    setProjectName("");
    setRole("");
    setDescription("");
    setResponsibilities("");
    setEnvironment("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
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
    <>
      <div className="card">
        <div className="card-header">
          <h3>Project</h3>
        </div>
        {experienceList.length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Project Number</th>
                <th>Project Name</th>
                <th>Role</th>
                <th>Description</th>
                <th>Responsibilities</th>
                <th>Environment</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {experienceList.map((project) => (
                <tr key={project.projectNumber}>
                  <td>{project.projectNumber}</td>
                  <td>{project.projectName}</td>
                  <td>{project.role}</td>
                  <td>{project.description}</td>
                  <td>{project.responsibilities}</td>
                  <td>{project.environment}</td>
                  <td>{project.duration}</td>
                  <td>
                    <Button variant="info" size="sm" onClick={() => handleEdit(project)}>Edit</Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => onDelete(project)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Form onSubmit={handleSubmit}>
          <div className="card-body">
            <Form.Group as={Row} controlId="projectName">
              <Form.Label column sm="3">
                Project Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  className="form-control-sm"
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="role">
              <Form.Label column sm="3">
                Role
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  className="form-control-sm"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="description">
              <Form.Label column sm="3">
                Description
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  className="form-control-sm"
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="responsibilities">
              <Form.Label column sm="3">
                Responsibilities
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  className="form-control-sm"
                  as="textarea"
                  rows={3}
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="environment">
              <Form.Label column sm="3">
                Environment
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  className="form-control-sm"
                  as="textarea"
                  rows={3}
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">
                Duration
              </Form.Label>
              <Col sm="9">
                <Row>
                  <Col>
                    <Form.Control
                      className="form-select-sm"
                      as="select"
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                      required
                    >
                      <option value="">Start Month</option>
                      <option value="">Month</option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-select-sm"
                      as="select"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                      required
                    >
                      <option value="">Start Year</option>
                      <option value="">Year</option>
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-select-sm"
                      as="select"
                      value={endMonth}
                      onChange={(e) => setEndMonth(e.target.value)}
                      required
                    >
                      <option value="">End Month</option>
                      <option value="">Month</option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-select-sm"
                      as="select"
                      value={endYear}
                      onChange={(e) => setEndYear(e.target.value)}
                      required
                    >
                      <option value="">End Year</option>
                      <option value="">Year</option>
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-center ">
            <Button size="sm" variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ProjectExperienceForm;
