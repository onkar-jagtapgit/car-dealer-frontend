import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GetCar.css';
import { useParams } from 'react-router-dom';

function GetCar() {
    const [car,setCar] = useState(null);
    const {carId} = useParams();
    useEffect(()=> {
        axios.get("http://localhost:8080/car/get/"+carId).then(resp => setCar( resp.data));
    },[])
    return(
        <div>
       <div className="container getcar">
       <br></br>
                <h2>Car Details</h2>
                {
                    car !== null &&
                    <table class="table table-bordered">
                        <thead class="table_head">
                        <tr>
                            <th>Car Id</th>
                            <th>Brand</th>
                            <th>Dealer Id</th>
                            <th>Model</th>
                            <th>Year Of Manufacturing</th>
                            <th>Registration No </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>{car.carId} </td>
                                <td>{car.brand}</td>
                                <td>{car.dealerId}</td>
                                <td>{car.model}</td>
                                <td>{car.yearOfManufaturing}</td>
                                <td>{car.registrationNo}</td>
                        </tr>
                        </tbody>
                    </table>
                }
                </div>
                
            </div>
    )
}
export default GetCar;