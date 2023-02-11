import React, { useEffect, useState } from "react";
import "./Booking.css";
import swal from 'sweetalert';
import { useFormik } from 'formik';
import * as yup from 'yup';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import bookingimage from './booking.png';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { useNavigate  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import YupPassword from 'yup-password';
import "yup-phone";
import Footer from "../Footer";
import Header from "../Header";
YupPassword(yup) 
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Website Development',
  'Digital Marketing',
  'Business Management Software`s',
  'CRM Softwared',
  'Business Consultation',
  'IT Consultation'
];
const Booking = () => {
  // write code for backend connect to frontend
  const History = useNavigate();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {

      setPersonName(
        event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
      );
  }; 
  const validate = yup.object({
    name: yup.string().min(2).required(),
    companyname: yup.string().min(2).required(),
    phone: yup.string().phone().required(),
    date: yup.string().required(),
    time: yup.string().required(),
    service: yup.string(),
    message: yup.string()
  });

  const user = useFormik({
    initialValues: {
      name:"",
      companyname: "",
      phone:"",
      date: "",
      time: "",
      product: [],
      service: "",
      message: ""
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const {name, companyname, phone, date, time, product, service, message} = values;
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/booking`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name, companyname, phone, date, time, product, service, message
        })
      })
      
      const data = await res.json();
      console.log(data);
    
      if(res.status === 400 || !data){
        swal("Error", "error", "warning");
      }
      else if(res.status === 421 || !data){
        swal("Error", "All field are required", "warning");
      }
      else{
        swal("Good job!", "Booking Successfully!", "success")
        .then((value) => {
          History("/")
        });
        
      }

    }
    
  });

  return (
    <div>
      <Header />
      <div className="container registration-page">
        <div className="signup">
          <div className="container mt-5">
            <div className="booking-content">
              <div className="signup-form">
                <h1 className="form-title mb-4 margin-top">Booking Form</h1>
                <form className="register-form" id="register-form" onSubmit={user.handleSubmit}>
                  {/* name */}
                  <div className="form-group mb-2">
                    <label htmlFor="name">
                      <PersonIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      placeholder="Your Name *"
                      className="roshan"
                      value={user.values.name}
                      onChange={user.handleChange}
                      required
                    />
                    {user.touched.name && user.errors.name && <p className="error-part">{user.errors.name}</p>}
                  </div>
                  {/* Company name */}
                  <div className="form-group mb-2">
                    <label htmlFor="name">
                      <ApartmentIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="text"
                      name="companyname"
                      autoComplete="off"
                      placeholder="Your Company Name *"
                      className="roshan"
                      value={user.values.companyname}
                      onChange={user.handleChange}
                      required
                    />
                    {user.touched.companyname && user.errors.companyname && <p className="error-part">{user.errors.companyname}</p>}
                  </div>
                  {/* phone */}
                  <div className="form-group mb-2">
                    <label htmlFor="phone">
                      <PermPhoneMsgIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      autoComplete="off"
                      placeholder="Your Phone Number *"
                      className="roshan"
                      value={user.values.phone}
                      onChange={user.handleChange}
                      required
                    />
                    {user.touched.phone && user.errors.phone && <p className="error-part">{user.errors.phone}</p>}
                  </div>
                  {/* Date */}
                  <div className="form-group mb-2">
                        <label htmlFor="date">
                            <DateRangeIcon className="material-icons-name"/>
                        </label>
                        <input
                            type="date"
                            name="date"
                            autoComplete="off"
                            className="roshan"
                            value={user.values.date}
                            onChange={user.handleChange}
                            required
                        />
                        {user.touched.date && user.errors.date && <p className="error-part">{user.errors.date}</p>}
                  </div>
                  {/* Time */}
                  <div className="form-group mb-2">
                        <label htmlFor="time">
                            <DateRangeIcon className="material-icons-name"/>
                        </label>
                        <input
                            type="time"
                            name="time"
                            autoComplete="off"
                            className="roshan"
                            value={user.values.time}
                            onChange={user.handleChange}
                            required
                        />
                        {user.touched.time && user.errors.time && <p className="error-part">{user.errors.time}</p>}
                  </div>
                  {/* Product & Service */}
                  <div class="form-groups">
                    
                    <FormControl sx={{ m: 1 }} className="roshan">
                        <InputLabel id="demo-multiple-checkbox-label">Product & Service</InputLabel>
                        <Select
                        name="product"
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={user.values.product}
                        onChange={user.handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        required
                        
                        >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    
                  </div> 
                  {/* Other service */}
                  <div className="form-group mb-2">
                    <label htmlFor="service">
                      <DevicesOtherIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="text"
                      name="service"
                      autoComplete="off"
                      placeholder="Other Service"
                      className="roshan"
                      value={user.values.service}
                      onChange={user.handleChange}
                    />
                    
                  </div>
                  {/* Any message */}
                  <div className="form-group mb-2">
                    <label htmlFor="name">
                      <QuestionAnswerIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="text"
                      name="message"
                      autoComplete="off"
                      placeholder="Your Message"
                      className="roshan"
                      value={user.values.message}
                      onChange={user.handleChange}
                    />
                    
                  </div>

                  {/*submit button */}

                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Book"/>
                  </div>



                </form>
                
              </div>
              <div className="signup-image">
                  
                    <img src={bookingimage} alt="" />
                  
                </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
    
    
  );
};

export default Booking;
