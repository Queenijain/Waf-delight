import React from "react";
import Lastlg from "../assets/bgndlg/imgLg.png";

const HeroSecc04 = () => {
  return (
    <>
      <div className="container-last p-5" id="last">
        <p className="text-dark text-center" style={{"fontFamily": '"Dancing Script", cursive'}}>
          At Waf-Delights, we are passionate about creating desserts that
          bring joy and satisfaction.We believe in the magic of desserts and
          their power to bring people together, creating memorable moments with
          every bite.
        </p>
        <span className="d-flex justify-content-evenly p-2 flex-wrap">
          <img
            src={Lastlg}
            alt=""
            width="30%"
            height="40%"
            className="d-inline-block align-text-center"
          />
          <div className="mt-5">
            <h6 className="mb-3 text-warning fw-bolder">Locations :</h6>
            <h5 className="text-warning fw-bolder">INDIA</h5>
             <h6 className="text-warning fw-bolder">HEADQUARTER</h6>
            <p className="fw-bolder">
            A407, Arihant Complex,<br />
            Saket, Indore,<br />
            – 452018
            </p>

            <h5 className="text-warning fw-bolder">UNITED STATES</h5>
            <p className="fw-bolder">45490 Ford Road,<br />
               Canton, MI 48187 <br />
               734.354.8700</p>
          </div>
          <div className="mt-5" >
          <h6 className="text-warning fw-bolder">MON – FRI</h6>
          <p className="fw-bolder">11:00 am – 9:00 pm</p>
          <h6 className="text-warning fw-bolder">SAT – SUN</h6>
          <p className="fw-bolder">11:00 am – 11:00 pm</p>
          
          <h6 className="text-warning fw-bolder">CONTACT US:</h6>
          <p className="fw-bolder">+91 7400778484</p>
          <p className="fw-bolder">+91 8349717175</p>
          <p className="fw-bolder">+91 9409424532</p>

          <h6 className="text-warning fw-bolder">POLICIES</h6>
          <p className="fw-bolder">Cancellation & Refund Policy</p>
          <p className="fw-bolder">Terms & Conditions</p>
          <p className="fw-bolder">Privacy Policy</p>
          </div>
        </span>
      </div>
    </>
  );
};

export default HeroSecc04;
