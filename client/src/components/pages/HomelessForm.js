import React, { Component } from 'react';

class HomelessForm extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Need Help?</h1>
                <p className="lead">Hello, feel free to leave your contact info so that we can help you with your needs.</p>
                <form>

                    <div className="form-group">
                        <p>Name*</p><div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First" name="first_name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last" name="last_name" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <p>Date of Birth</p>
                        <input type="date" className="form-control" placeholder="" name="birthday" />
                    </div>

                    <div className="form-group">
                        <label for="contact">Select One*</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Male Child</option>
                            <option>Female Child</option>
                            <option>Male Adult</option>
                            <option>Female Adult</option>
                        </select>
                    </div>

                    <div className="form-group row">
                        <div className="col">
                            <label for="contact">Shirt Size*</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="contact">Pant Size*</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col">
                            <label for="contact">Sock Size*</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="contact">Underwear Size*</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default HomelessForm;
