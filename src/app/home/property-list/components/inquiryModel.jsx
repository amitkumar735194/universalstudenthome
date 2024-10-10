import React from 'react'

const InquiryModel = () => {
  return (
    <div>
      <div className="login-and-register-form modal">
        <div className="main-overlay" />
        <div className="main-register-holder">
            <div className="main-register fl-wrap">
            <div className="close-reg">
                <i className="fa fa-times" />
            </div>
            <h3>Send your enquiry for accommodation </h3>
            <div id="tabs-container">
                <div className="custom-form">
                <form method="" name="registerform">
                    <div className="row">
                    <div className="col-lg-6">
                        <label>Full Name</label>
                        <input name="name" type="text" placeholder="Full Name" />
                    </div>
                    <div className="col-lg-6">
                        <label>Email Address</label>
                        <input name="name2" type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-6">
                        <label>Phone Number</label>
                        <input name="number" type="text" placeholder="Phone Number" />
                    </div>
                    <div className="col-lg-6">
                        <label>Nationality</label>
                        <select className="select">
                        <option>Select Nationality</option>
                        <option value="indian">Indian</option>
                        <option value="british">British</option>
                        <option value="chinese">Chinese</option>
                        <option value="irish">Irish</option>
                        <option value="nigerien">Nigerien</option>
                        <optgroup label="OTHER NATIONALITIES" />
                        <option value="afghan">Afghan</option>
                        <option value="albanian">Albanian</option>
                        <option value="algerian">Algerian</option>
                        <option value="american">American</option>
                        <option value="andorran">Andorran</option>
                        </select>
                    </div>
                    <div className="col-lg-12">
                        <label>Select University</label>
                        <select className="select">
                        <option>Select University</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-12">
                        <p className="not">
                        By submitting, you agree to our <a href="#">Privacy Policy</a>{" "}
                        and <a href="#">Terms &amp; Conditions</a>
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-center update_on">
                        Get updates on <i className="fa fa-whatsapp" /> WhatsApp
                        <button
                            type="button"
                            className="btn btn-xs btn-toggle active"
                            data-toggle="button"
                            aria-pressed="true"
                            autoComplete="off"
                        >
                            <div className="handle" />
                        </button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" className="log-submit-btn2">
                        <span>Submit</span>
                        </button>
                    </div>
                    <div className="clearfix" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default InquiryModel
