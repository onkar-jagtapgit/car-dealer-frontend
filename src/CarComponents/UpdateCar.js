import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UpdateCar() {
  const [cars, setCars] = useState(
    {
      carId: '',
      brand: '',
      dealerId: '',
      model: '',
      yearOfManufaturing: '',
      registrationNo: ''
    });
  const { carId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/car/get/" + carId).then(resp => setCars(
      {
        carId: resp.data.carId,
        brand: resp.data.brand,
        dealerId: resp.data.dealerId,
        model: resp.data.model,
        yearOfManufaturing: resp.data.yearOfManufaturing,
        registrationNo: resp.data.registrationNo,
      }
    ));
  }, [])

  const handleChange = (event) => {
    setCars(cars => ({ ...cars, [event.target.name]: event.target.value }));
  }

  const handleUpdate = (event) => {
    let payload = {
      carId: cars.carId,
      brand: cars.brand,
      dealerId: cars.dealerId,
      model: cars.model,
      yearOfManufaturing: cars.yearOfManufaturing,
      registrationNo: cars.registrationNo
    }
    axios.put("http://localhost:8080/car/update", payload).then(resp =>
      alert("Car updated"));
  }
  return (
    <form>
      <div className='container'>
      <br></br>
        <h2> Update Car Details</h2>
        
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Car Id</label>
          <div class="col-sm-10">
            <input type="text" name="carId" class="form-control form-control-sm" id="carId" onChange={handleChange} value={cars.carId} />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Brand</label>
          <div class="col-sm-10">
            <input type="text" name="brand" class="form-control form-control-sm" id="brand" onChange={handleChange} value={cars.brand} />
          </div>
        </div>
        
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Dealer Id</label>
          <div class="col-sm-10">
            <input type="text" name="dealerId" class="form-control form-control-sm" id="dealerId" onChange={handleChange} value={cars.dealerId} />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Model</label>
          <div class="col-sm-10">
            <input type="text" name="model" class="form-control form-control-sm" id="model" onChange={handleChange} value={cars.model} />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Year Of Manufaturing</label>
          <div class="col-sm-10">
            <input type="text" name="yearOfManufaturing" class="form-control form-control-sm" id="yearOfManufaturing" onChange={handleChange} value={cars.yearOfManufaturing} />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Registration No</label>
          <div class="col-sm-10">
            <input type="text" name="registrationNo" class="form-control form-control-sm" id="registrationNo" onChange={handleChange} value={cars.registrationNo} />
          </div>
        </div>
        <div>
          <button className='btn btn-success' onClick={handleUpdate}>Update</button>
        </div>
      </div>
      
    </form>
  );
}

export default UpdateCar;