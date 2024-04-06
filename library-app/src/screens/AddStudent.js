import React from 'react';
import Header from '../components/Header';
import '../styles/AddBook.css';

function AddStudent() {
  return (
    <div>
      <Header />
      <div className="addform">
        <div className="title">Add Student</div>
        <form>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Name"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="mb-4">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Class
              </label>
              <input
                type="Number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="class"

              />
            </div>
            <div className="mb-4">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Division
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="division"

              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Admission No
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="123.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genderSelect" className="form-label">
              Gender
            </label>
            <select className="form-select" id="genderSelect">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>
      </div >
    </div >
  );
}

export default AddStudent;