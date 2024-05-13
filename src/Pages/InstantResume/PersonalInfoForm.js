// src/components/PersonalInfoForm.js
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const PersonalInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [designation, setDesignation] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == null || name == "") {
      toast("Name is required");
      return;
    }
    if (designation == null || designation == "") {
      toast("Designation is required");
      return;
    }
    if (email == null || email == "") {
      toast("Email is required");
      return;
    }
    if (phone == null || phone == "") {
      toast("Phone Number is required");
      return;
    }
    if (location == null || location == "") {
      toast("Location is required");
      return;
    }
    if (summary == null || summary == "") {
      toast("Summary is required");
      return;
    }
    onSubmit({
      name,
      email,
      phone,
      location,
      github,
      designation,
      summary,
      linkedIn,
    });
    toast("Personal Details saved!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h3>Personal Information</h3>
          </div>
          <div className="card-body">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 col-md-4 ">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-sm"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Phone Number</label>
                <input
                  className="form-control form-control-sm"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-4">
                <label className="form-label">Designation</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
                <label className="form-label">Current Location</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Current Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Professional Summary</label>
                <textarea
                  className="form-control form-control-sm"
                  placeholder="Professional Summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                ></textarea>
              </div>
              <h5 className="my-2">Addtional Link(s)</h5>
              <div className="col-lg-6 col-sm-12 col-md-4">
                <label className="form-label">Github</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Github"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-4">
                <label className="form-label">LinkedIn</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="LinkedIn"
                  value={linkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
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
      <ToastContainer />
    </>
  );
};

export default PersonalInfoForm;
