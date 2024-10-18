import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function FetchAllCars() {
    const [car, setCar] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/car/getAll").then(resp => setCar(resp.data));
    }, []
    )
    return (
        <div className=''>
            <br></br>
                <h2>All Car Details</h2>
                
            {
                car.length > 0 ?
                    <table class="table table-bordered">
                        <thead class="table_head">
                            <tr>
                                <th>Car Id</th>
                                <th>Brand</th>
                                <th>Dealer Id</th>
                                <th>Model</th>
                                <th>Year of Manufacturing</th>
                                <th>Registration No </th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {car.map(c =>
                                <tr>
                                    <td>{c.carId} </td>
                                    <td>{c.brand}</td>
                                    <td>{c.dealerId}</td>
                                    <td>{c.model}</td>
                                    <td>{c.yearOfManufaturing}</td>
                                    <td>{c.registrationNo}</td>
                                    <td><Link to={`/car/${c.carId}`}>View</Link></td>
                                    <td><Link to={`/car/update/${c.carId}`}>Edit</Link></td>
                                    <td><Link to={`/car/delete/${c.carId}`}>Delete</Link></td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>

                    : <h3><div class="spinner-border"></div></h3>
            }
            
        </div>
    )
}

export default FetchAllCars;