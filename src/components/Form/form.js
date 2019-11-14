import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import moment from 'moment';


import './form.css'

export default class InputForm extends Component {
    state={
        today : new Date().toISOString().split('T')[0],
        confirmationModal:false,
        paymentModal: false,
        availableRooms:[],
        selectedRoom:null,
        checkInDate:null,
        checkOutDate:null
    }

    openConfirmationModal = async(event) =>{
        event.preventDefault();
        let filteredRooms,allRoomsData;
        let type= document.getElementById("inputRoomType").value;
        console.log(typeof(type),type,this.state.checkInDate,this.state.checkOutDate);
        let url ="https://stepin-api.herokuapp.com/rooms/available"
        let fetchRooms = await fetch(url,{  
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "checkIn" : this.state.checkInDate,
                "checkOut" : this.state.checkOutDate,
                "bookingId" : null
                }),
        }) 
        allRoomsData = await fetchRooms.json()
        filteredRooms = allRoomsData.filter(room => room.roomType === type)
        numberOfRooms = getElementById("inputRoom")
        console.log(numberOfRooms);
        selectedRooms = getMultipleRooms (filteredRooms, numberOfRooms)
        this.setState({availableRooms:allRoomsData,selectedRoom:filteredRooms[0]});
        this.setState({confirmationModal:true});
    }

    closeConfirmationModal = () =>{
        this.setState({confirmationModal:false});
    }

    openPaymentModal = () =>{
        this.closeConfirmationModal();
        this.setState({paymentModal:true});
    }

    closePaymentModal = () =>{
        let url ="https://stepinbooking.herokuapp.com/bookings/insert"
        console.log(moment.unix(this.state.checkInDate).utc().utcOffset("+05:30").format())
        let fetchRooms =  fetch(url,{  
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "checkIn" :moment.unix(this.state.checkInDate).utc().utcOffset("+05:30").format(),
                "checkOut" : moment.unix(this.state.checkOutDate).utc().utcOffset("+05:30").format(),
                "firstName" :"aayush",
                "lastName": "nagpal",
                "rooms":[this.state.selectedRoom._id]                
                }),
        }) 
        this.setState({paymentModal:false});
    }

    setCheckIn = (event) =>{
        this.setState({checkInDate:moment(event.target.value).unix()})
    }

    setCheckOut = (event) =>{
        this.setState({checkOutDate:moment(event.target.value).unix()})
    }

    render(){
        console.log(this.state);
        return (
            <div className="main_div">
                <h1>Room Booking</h1>
                <form  onSubmit={this.openConfirmationModal}>
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
                            <label for="checkInDate">Check In</label>
                            <input type="date" class="form-control form-control-lg" id="checkInDate" placeholder="" min={this.state.today} onChange={this.setCheckIn} required/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="checkOutDate">Check Out</label>
                            <input type="date" class="form-control form-control-lg" id="checkOutDate" placeholder="" min={this.state.today} onChange= {this.setCheckOut} required/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputRoom">No. of Rooms</label>
                        <input type="number" class="form-control form-control-lg" id="inputRoom" min="1" required/>
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
                        <input type="number" class="form-control form-control-lg" min="1"  id="inputZip"/>
                        </div>
                    </div>
                    <div class="form-row" style={{ marginTop: 20}}>
                    <button type="submit" class="btn btn-primary">
                        Launch demo modal
                    </button>
                    </div>
                </form>
                {this.state.selectedRoom ?
                (<div><Modal show={this.state.confirmationModal } onHide={!this.state.confirmationModal}>
                    <Modal.Header>
                        <Modal.Title>Confirm booking</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Please "Proceed" to make the payment of amount <b>{this.state.selectedRoom.roomRate}</b> for your booking.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeConfirmationModal}>Close</Button>
                        <Button variant="primary" onClick={this.openPaymentModal}>Proceed</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.paymentModal} onHide={!this.state.paymentModal}>
                    <Modal.Header>
                        <Modal.Title>Payment Gateway</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Pay up!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closePaymentModal}>Pay</Button>
                    </Modal.Footer>
                </Modal></div>):(null)}
            </div>
        )
    }
}