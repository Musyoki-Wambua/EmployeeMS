import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditEmployee = () => {
    const{id} = useParams()
    const [category, setCategory] = useState([]);
    const[employee, setEmployee] = useState({
        name: '',
        email: '',
        password: '',
        salary: '',
        address: '',
        category_id: '',
        image: ''
    });

    useEffect(() => {
        axios.get('http://locakhost:3000/auth/category')
        .then(result => {
          //console.log(result)
          if(result.data.Status){
           setCategory(result.data.Result)
          }else{
            alert(result.data.Error)
          }
        }).catch(err => console.log(err))

        axios.get('http://locakhost:3000/auth/employee' + id)
        .then(result => {
           console.log(result.data)
          }).catch(err => console.log(err))
      }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
    <div className="p-3 rounded w-50 border">
      <h3 className="text-center">Edit Employee</h3>
      <form className="row g-1" >
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputName"
            placeholder="Enter Name"
            onChange={(e) => setEmployee({...employee, name: e.target.value})}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-0"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) => setEmployee({...employee, email: e.target.value})}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-0"
            id="inputPassword4"
            placeholder="Enter Password"
            onChange={(e) => setEmployee({...employee, password: e.target.value})}
          />
          <label htmlFor="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputSalary"
            placeholder="Enter Salary"
            autoComplete="off"
            onChange={(e) => setEmployee({...employee, salary: e.target.value})}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputAddress"
            placeholder="1234 EastLands Nairobi"
            autoComplete="off"
            onChange={(e) => setEmployee({...employee, address: e.target.value})}
          />
        </div>
        <div className="col-12">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="category" id="category" className="form-select"
              onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
            {category.map((cat) => {
              return <option value={cat.id}>{cat.name}</option>;
            })}
          </select>
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile01">
            Select Image
          </label>
          <input
            type="file"
            className="form-control rounded-0"
            id="inputGroupFile01"
            name="image"
            onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EditEmployee
