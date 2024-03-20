
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const Jobapplicationform = () => {
    const [status, setStatus] = useState('');
    const [post, setPost] = useState([])
    
    // console.log(status);
    const getData = () => {
        return fetch("https://admin.allnuud.com/api/job_application")
              .then((response) => response.json())
              .then((data) => setPost(data.data));
      }
    
    useEffect(() => {
        getData();
      },[])
console.log("ppp",post);
    // const handleDelete = (id, user_id) => {
    //     const user =  id+ " " + user_id;
    //     fetch('https://admin.allnuud.com/api/delete_job_post/'+id+'/'+user_id)
    //         .then((res) => res.json())
    //         .then((json) => setStatus(json.data))
    //         .catch((e) => console.log(e))
        
    // }
  return (
    <div>
         <div className="container table-responsive py-5">
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">DOB</th>
          <th scope="col">EMAIL</th>
          <th scope="col">MOBILE</th>
          <th scope="col">JOB ROLE</th>
          <th scope="col">EXP</th>
          <th scope="col">Address</th>
          <th scope="col">CITY</th>
          <th scope="col">PINCODE</th>
          <th scope="col">CV</th>
        </tr>
      </thead>
      <tbody>
      {post.map(post => (
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.dob}</td>
          <td>{post.email}</td>
          <td>{post.mobile}</td>
          <td>{post.job_role}</td>
          <td>{post.job_exp}</td>
          <td>{post.address}</td>
          <td>{post.city}</td>
          <td>{post.pincode}</td>
          <td><a target='_blank' href={`https://admin.allnuud.com/public/uploads/jobAplication/cv/${post.cv}`}>View CV</a></td> 
        </tr>
         ))}
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default Jobapplicationform