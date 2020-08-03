import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Avatar from '../layout/Avatar';

const Student = () => {
    const {id} = useParams();
    return (
        <div className="container">
        <div className="py-4">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card card-body shadow">
                <div className="row">
                  <div className="col-md-4">
                    <Avatar url={`https://i.pravatar.cc/150?img=${id}`} />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li
                        className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                      >
                        <h3 className="m-0">STUDENT NAME</h3>
                        <Link className="btn btn-primary" to={`/studentForm/${id}`}  >
                          edit profile
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <p>email: STUDENT_EMAIL</p>
                        <p>phone: STUDENT_PHONE</p>
                        <p>class: STUDENT_STANDARD</p>
                        <p>address 1: STUDENT_ADDRESS1</p>
                        <p>address 2: STUDENT_ADDRESS2</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Student
