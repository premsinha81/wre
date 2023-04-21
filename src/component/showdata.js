import React, { useState, useEffect } from "react";


const DataShow = () => {
    const [status, setStatus] = useState('');
    const [post, setPost] = useState([])
    const getData = () => {
        fetch('https://admin.allnuud.com/api/job_list_all')
            .then((res) => res.json())
            .then((json) => setPost(json.data))
            .catch((e) => console.log(e))
    }
    console.log(status);
    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id, user_id) => {
        const user =  id+ " " + user_id;
        fetch('https://admin.allnuud.com/api/delete_job_post/'+id+'/'+user_id)
            .then((res) => res.json())
            .then((json) => setStatus(json.data))
            .catch((e) => console.log(e))
        
    }
    return (
        <div>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2>
                                    Job Employee <b>Details</b>
                                </h2>
                            </div>
                            <div className="col-sm-4">
                             <a href="/Jobpostform"  >   <button type="button" className="btn btn-info add-new">
                                    <i className="fa fa-plus" /> Add New
                                </button></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titile</th>
                                <th>Company</th>
                                <th>Workplace </th>
                                <th>Location</th>
                                <th>Description</th>
                                <th>About</th>
                                <th>Skill1</th>
                                <th>Skill2</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{items.id}</td>
                                        <td>{items.job_titile}</td>
                                        <td>{items.job_company}</td>
                                        <td>{items.job_workplace_type}</td>
                                        <td>{items.job_location}</td>
                                        <td>{items.job_description}</td>
                                        <td>{items.job_hear_about}</td>
                                        <td>Subhas</td>
                                        <td>Subhas</td>
                                        <td>{items.job_type}</td>
                                        <td>
                                            <a className="add" title="Add" data-toggle="tooltip">
                                                <i className="material-icons"></i>
                                            </a>
                                            <a href={"/jobedit/" + items.user_id + "/" + items.id} className="edit" title="Edit" data-toggle="tooltip">
                                                <i className="material-icons"></i>
                                            </a>
                                            <a className="delete" title="Delete" data-toggle="tooltip">
                                                <i className="material-icons" onClick={()=> handleDelete(items.id, items.user_id)}></i>
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataShow