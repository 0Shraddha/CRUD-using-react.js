import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(
        "https://6533f14be1b6f4c590466854.mockapi.io/api/v1/crud-employeeinfo"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id,name) {
    alert("The employee info is going to be deleted");
    axios
      .delete(`https://6533f14be1b6f4c590466854.mockapi.io/api/v1/crud-employeeinfo/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id,name,email,phone) => {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("phone",phone);
    localStorage.setItem("email",email);



  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main-heading">List of employees</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Full name</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            <th></th>

            {/* <th scope="col">Job</th>
        <th scope="col">Identity Card</th> */}
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <>
              {/* <div>
                <h1 className="heading">{eachData.name}</h1>
              </div> */}

              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.phone}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update"><button class="btn btn-success" onClick={() => setToLocalStorage(eachData.id,eachData.name,eachData.email,eachData.phone)}>Edit</button></Link>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
