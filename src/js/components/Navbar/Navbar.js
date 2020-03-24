import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import plane from '../../../img/plane.gif';

const AircraftTrainNavBar = () => {
    
    let tokenAuth = localStorage.getItem('token');
    let firstname = localStorage.getItem('firstname');
    let lastname = localStorage.getItem('lastname');
    let avatar = localStorage.getItem('avatar');
   
    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarAirplane].join(' ')}>
            <div className="container">
                <Link className="navbar-brand mobile" to="/">
                    <img src={plane} width="30" height="30" className="d-inline-block align-top" alt="airplane"/>
                    &nbsp;
                    <span className={styles.wash}> AircraftTrainingRecords</span>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {!tokenAuth ?
                        <li>
                            <Link to="/login" className={styles.btn}> 
                                Login
                            </Link>
                            <Link to="/register" className={styles.btn}> 
                                Register
                            </Link>
                        </li>
                    : 
                        <li>
                            <div className="btn-group">
                                <button className={["dropdown-toggle", styles.dropBtn].join(' ')} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="avatar" width="30px" /> {firstname} {lastname}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="/training-records" >Current Training Records</Link>
                                    <Link className="dropdown-item" to="/expire-next-month" >Courses will expire next month</Link>
                                    <Link className="dropdown-item" to="/expire-between-dates" >Courses will expire between dates</Link>
                                    <Link className="dropdown-item" to="/addRecord" >Add New Training Records</Link>
                                    <Link className="dropdown-item" to="/editRecord" >Edit Training Records to Update</Link>
                                    <Link className="dropdown-item" to="/showToDelRecord" >Delete a course from Training Records</Link>
                                    <button 
                                        className="dropdown-item" 
                                        onClick={async () => {
                                            localStorage.clear();
                                            window.location.href = "/";
                                        }}
                                    >
                                        LogOut
                                    </button>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default AircraftTrainNavBar;