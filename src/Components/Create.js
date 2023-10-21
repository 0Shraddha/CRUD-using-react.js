import React from "react";

const Create = () => {
  return (
    <>
          <h2 className="heading">Add Employee Details</h2>

      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Fullname"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Contact No.
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Job Nature
          </label>
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
   Full Time
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Part Time
  </label>
</div>
        </div>
        <div class="mb-3">
  <label for="formFileSm" class="form-label">Identity Card</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file" required/>
</div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
