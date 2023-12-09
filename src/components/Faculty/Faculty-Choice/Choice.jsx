import React from 'react'
import './Choice.css';
import { Link } from 'react-router-dom';

const Choicet = () => {
  return (
    <>
      <div className='dashboard'>
      <div className="card" >
  <img className="card-img-top" src="https://myviewboard.com/blog/wp-content/uploads/2020/08/MP0027-01-scaled.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">ClassRooms</h5>
    <button className='btn btn-primary'><Link to="/login">Go Somewhere</Link></button>
  </div>
</div>

<div className="card" >
  <img className="card-img-top" src="https://selftaught.blog/wp-content/uploads/2020/04/onlinecommunities.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Labs</h5>
<button  className='btn btn-primary'><Link to="/lab">Go Somewhere</Link></button>
  </div>
</div>
      </div>
    </>
  )
}

export default Choicet
