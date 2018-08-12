import React, { Component } from 'react';

class SponsorForm extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Want to be a Sponsor?</h1>
                <p className="lead">Hello, feel free to leave your contact info so that we can reach out to you.</p>
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
                        <label for="contact">Select One*</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Email</option>
                            <option>Phone</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <p>Email / Phone</p>
                        <input type="text" className="form-control" placeholder="" name="contactinfo" />
                    </div>

                    <div className="form-group">
                        <p>Organization / Website</p>
                        <textarea className="form-control" placeholder="" rows="3" name="organization" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default SponsorForm;
