import React, { useState, useEffect } from "react";
import axios from "axios";

const Read = () => {

  const [data, setData] = useState([]);

 function getData(){
    axios.get("https://6533f14be1b6f4c590466854.mockapi.io/api/v1/crud-employeeinfo")
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      
    });
  }
  
  useEffect(() => {
  getData();
  },[]);

  return (
    <>
      <div className="main-heading">List of employee</div>
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

        {
          data.map((eachData) => {
            return(
              <>
               <tbody>
          <tr>
            <td >{eachData.id}</td>
            <td>{eachData.name}</td>
            <td>{eachData.phone}</td>
            <td>{eachData.email}</td>
            <td>
              <button class="btn btn-success">Edit</button>
            </td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
              </>
            )
            })
        }
      </table>
    </>
  );
};

export default Read;
