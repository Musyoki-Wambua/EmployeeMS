import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://locakhost:3000/auth/category')
    .then(result => {
      //console.log(result)
      if(result.data.Result){
        setCategory()
      }else{
        alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Category List</h3>
        </div>
        <Link to="/dashboard/add_category" className='btn  btn-success' >Add Category</Link>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
    </div>
  ); 
}

export default Category;
