import React from 'react';
import './form.css'

function InputForm () {
    return (
        <div className="main_div">
            <h1> Room Booking App</h1>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" class="form-control form-control-lg" id="inputFirstName" placeholder="First Name" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputLastName">Last Name</label>
                    <input type="text" class="form-control form-control-lg" id="inputLastName" placeholder="Last Name" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="fromDate">From</label>
                        <input type="date" class="form-control form-control-lg" id="fromDate" placeholder="" required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="toDate">To</label>
                        <input type="date" class="form-control form-control-lg" id="toDate" placeholder="" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                    <label for="inputRoom">No. of Rooms</label>
                    <input type="number" class="form-control form-control-lg" id="inputRoom" required/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputRoomType">Type</label>
                    <select id="inputRoomType" class="form-control form-control-lg">
                        <option selected>Choose...</option>
                        <option>AC</option>
                        <option>Non AC</option>
                        <option>Suite</option>
                    </select>
                    </div>
                    <div class="form-group col-md-4 ">
                    <label for="inputZip">No. of Guests</label>
                    <input type="numbers" class="form-control form-control-lg" id="inputZip"/>
                    </div>
                </div>
                <div class="form-row" style={{ marginTop: 20}}>
                    <button type="submit" class="btn btn-danger btn-lg btn-block">Check Availability</button>
                </div>
                
            </form>
        </div>
            
    )
}

export default InputForm;