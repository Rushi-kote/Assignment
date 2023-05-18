import React, { useState, useEffect} from "react";
import "../Styles/Form.css";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [fname, setFName] = useState("");
  const [fnameerr, setFnameErr] = useState(null);
  const [lname, setLName] = useState("");
  const [lnameerr, setlnameErr] = useState(null);
  const [email, setemail] = useState("");
  const [emailerr, setemailErr] = useState(null);
  const [Company, setComp] = useState("");
  const [companyerr, setcompErr] = useState(null);
  const [mobile, setmobile] = useState("");
  const [mobileerr, setmobileErr] = useState(null);

  useEffect(() => {
    if (fnameerr === "" && companyerr === "" && emailerr === "" && lnameerr === "" && mobileerr === "") {
      console.log("hello");
      toast.success('form saved succesfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      setTimeout(() => {
        const form = document.getElementsByClassName("form");
        if (form.length > 0) {
          form[0].style.display = 'none';
        }
      }, 3000);
    }
  }, [fnameerr, companyerr, emailerr, lnameerr, mobileerr]);
  
  const handleValidation = () => {
    if (!fname) {
      setFnameErr("Name is required");
    } else if (!/^[a-zA-Z\s]+$/.test(fname)) {
      setFnameErr("Invalid name format");
    } else {
      setFnameErr("");
    }

    if (!lname) {
      setlnameErr("Name is required");
    } else if (!/^[a-zA-Z\s]+$/.test(lname)) {
      setlnameErr("Invalid name format");
    } else {
      setlnameErr("");
    }

    if (!email) {
      setemailErr("Email is required");
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setemailErr("Invalid email format");
    } else {
      setemailErr("");
    }

    if (!Company) {
      setcompErr("Company name is required");
    } else if (Company.length < 3) {
      setcompErr("Company name should be at least 3 characters long");
    } else {
      setcompErr("");
    }

    const regex = /^[0-9]{10}$/;

    if (!mobile) {
        setmobileErr("Contact number is required");
    } else if (!regex.test(mobile)) {
        setmobileErr("Please enter a valid 10-digit contact number");
    } else {
        setmobileErr("");
    }
    
  };
  return (
    <div className="form">
        <div>
        <h3 className="form-heading ">Connect with us</h3>
      <p className="form-para">for outstanding protective overlaminates</p>
        </div>
      <div className="inputHolder">
        <div className="input-lable-holder">
          <label htmlFor="fname" className="aktifoa-book">
            First Name
          </label>
          <input
            type="text"
            onChange={(e) => setFName(e.target.value)}
            name="fname"
            id="fname"
          />
          {fnameerr && <div className="error">{fnameerr}</div>}
        </div>
        <div className="input-lable-holder">
          <label htmlFor="lname" className="aktifoa-book">
            Last Name
          </label>
          <input
            type="text"
            onChange={(e) => setLName(e.target.value)}
            name="lname"
            id="lname"
          />
          {lnameerr && <div className="error">{lnameerr}</div>}
        </div>
        <div className="input-lable-holder">
          <label htmlFor="email" className="aktifoa-book">
            email
          </label>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            name="email"
            id="email"
          />
          {emailerr && <div className="error">{emailerr}</div>}
        </div>
        <div className="input-lable-holder">
          <label htmlFor="company" className="aktifoa-book">
            Company
          </label>
          <input
            type="text"
            onChange={(e) => setComp(e.target.value)}
            name="company"
            id="company"
          />
          {companyerr && <div className="error">{companyerr}</div>}
        </div>
        <div className="input-lable-holder">
          <label htmlFor="contact" className="aktifoa-book">
            contact
          </label>
          <input
            type="number"
            onChange={(e) => setmobile(e.target.value)}
            name="contact"
            id="contact"
          />
          {mobileerr && <div className="error">{mobileerr}</div>}
        </div>
        <div className="input-lable-holder">
          <label htmlFor="state" className="aktifoa-book">
            State
          </label>
          <select name="state" id="state">
            <option value="none">--Select--</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Punjab">Punjab</option>
            <option value="Goa">Goa</option>
            <option value="Kerala">Kerala</option>
          </select>
        </div>
      </div>
      <div className="input-lable-holder-out">
        <label htmlFor="whoAreYou" className="aktifoa-book">
          How would you like to discribe yourself
        </label>
        <select name="whoAreYou" className="out-selection" id="whoAreYou">
          <option value="none">--Select--</option>
          <option value="installer">Installer</option>
          <option value="User">User</option>
          <option value="Seller">Seller</option>
        </select>
      </div>
      <div className="input-lable-holder-out">
        <label htmlFor="distributor" className="aktifoa-book">
          Preferred Distributor:
        </label>
        <select name="distributor" className="out-selection" id="distributor">
          <option value="none">--Select--</option>
          <option value="Aerotec">Aerotec</option>
          <option value="formersel">Formersel</option>
        </select>
      </div>
      <div className="input-lable-holder-out">
        <label htmlFor="additionalInfo" className="aktifoa-book">
          Additional Information
        </label>
        <textarea
          name="additionalInfo"
          className="out-selection"
          id="additionalInfo"
          cols="60"
          rows="10"
        ></textarea>
      </div>
      <button className="btn" onClick={handleValidation}>
        Submit
      </button>
      <ToastContainer/>
    </div>
  );
};

export default Form;
