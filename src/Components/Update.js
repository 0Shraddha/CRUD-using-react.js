import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setPhone(localStorage.getItem("phone"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e)=>{
    e.preventDefault();
    axios.put(`https://6533f14be1b6f4c590466854.mockapi.io/api/v1/crud-employeeinfo/${id}`,{
        name:name,
        phone:phone,
        email:email
    }).then(() => {
        navigate("/read");
       
    })
       
  }
  return (
    <>
      <h2 className="heading">Update Employee Details</h2>

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
            value={name}
            onChange={(e)=>setName(e.target.value)}
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
            value={phone}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Job Nature
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              Full Time
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              Part Time
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="formFileSm" class="form-label">
            Identity Card
          </label>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
            required
          />
        </div>

        {/* {id}
{job}
{name}
{email}
{phone} */}
        <button type="submit" className="btn btn-success" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
