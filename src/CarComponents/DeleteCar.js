import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function DeleteCar() {

    const [cars, setCars] = useState(
        {
            carId: '',
            brand: '',
            dealerId: '',
            model: '',
            yearOfManufaturing: '',
            registrationNo: ''
        }
    );
    const { carId } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/car/get" + carId).then(resp => setCars(
            {
                carId: resp.data.carId,
                brand: resp.data.brand,
                dealerId: resp.data.dealerId,
                model: resp.data.model,
                yearOfManufaturing: resp.data.yearOfManufaturing,
                registrationNo: resp.data.registrationNo
            }
        ));
    }, [])

    const handleDelete = () => {
        axios.delete("http://localhost:8080/car/delete/" + carId).then(resp =>
            alert(cars.carId+"deleted successfully"));
    }

    return (
        <div style={{height :'43.8vh'}}>
            {
                cars != null &&
                <div className='delete-margin'>
                    <br></br>
                    <h2>Car Id :{carId}</h2>
                    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>&nbsp;
                </div>
            }
            
        </div>
    );

}
export default DeleteCar;