import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {

 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [[job], setJob] = useState("");
 const [id, setId] = useState("");

 const history = useNavigate();   //for redirecting, for route

 const header = {"Access-Control-Allow-Origin" : "*"};

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("https://6533f14be1b6f4c590466854.mockapi.io/api/v1/crud-employeeinfo",{
    name:name,
    phone:phone,
    email:email,
    job:job,
    id:id,
    header    
  })
  .then(() => {
    history("/read");
  });
}

//  function MyComponent() {
//   const [id, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]; // Get the selected file
//     setSelectedFile(file); // Store the selected file in the state
//   };
// }
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Job Nature
          </label>
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={(e) => setJob(e.target.data)} checked/>
  <label class="form-check-label" for="exampleRadios1">
   Full Time
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"  />
  <label class="form-check-label" for="exampleRadios2">
    Part Time
  </label>
</div>
        </div>
        <div class="mb-3">
  <label for="formFileSm" class="form-label">Identity Card</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file" onChange={(e) => setId(e.target.value)} required/>
</div>
{id}
{/* {id}
{job}
{name}
{email}
{phone} */}
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
        

  );
};

export default Create;
