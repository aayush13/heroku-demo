import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';


import './form.css'

export default class InputForm extends Component {
    state={
        today : new Date().toISOString().split('T')[0],
        confirmationModal:false,
        paymentModal: false,
    }

    openConfirmationModal = (event) =>{
        event.preventDefault();
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
        this.setState({paymentModal:false});
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
                            <label for="fromDate">From</label>
                            <input type="date" class="form-control form-control-lg" id="fromDate" placeholder="" min={this.state.today} required/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="toDate">To</label>
                            <input type="date" class="form-control form-control-lg" id="toDate" placeholder="" min={this.state.today} required/>
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
                <Modal show={this.state.confirmationModal} onHide={!this.state.confirmationModal}>
                    <Modal.Header>
                        <Modal.Title>Confirm booking</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Please "Proceed" to make the payment of amount XYZ for your booking.</p>
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
                </Modal>
            </div>
        )
    }
}