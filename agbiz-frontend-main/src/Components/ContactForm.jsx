import React, {useState, useRef} from 'react';
import swal from 'sweetalert';
import { useFormik } from 'formik';
import { useNavigate  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from 'yup';
import "yup-phone";
import './Registration/Registration.css';
const ContactForm = () => {
   const History = useNavigate();
   
    const validate = yup.object({
      name: yup.string().min(2).required(),
      companyname: yup.string().min(2).required(),
      phone: yup.string().phone().required()
    });

    const user = useFormik({
      initialValues: {
        name:"",
        companyname: "",
        phone:""
      },
      validationSchema: validate,
      onSubmit: async (values) => {
        const {name, companyname, phone} = values;
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contact_form`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name, companyname, phone
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
          swal("Good job!", "Message Successfully!", "success")
          .then((value) => {
            History("/about")
          });
          
        }
  
    }
  });

  return (
    <>
    <section className="text-gray-400  body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-indigo-400">
              Let's Connect
            </h1>
            <p className="text-white leading-relaxed mt-4">
              AGBIZ Provides Free Business consultation!!<br/>Its Time To Understand & Expand Your Business Upto The Latest Market Trends, All Under Your Own Budget.<br/>We are available 10AM - 10PM (Everyday) <br/> Call At : 08533873389<br/>E-mail At: connect@agbiztech.in
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Book Your Call
            </h2>
            {/* <form ref={formRef} onSubmit={handleSubmit} name="google-sheet"> */}
            <form onSubmit={user.handleSubmit} name="google-sheet">
            <div className="relative mb-4">
              {/* name */}
              <label
                htmlFor='name'
                className="leading-7 text-sm text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                // id='name'
                name="name"
                placeholder="Enter Your Name"
                autoComplete="off"
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={user.values.name}
                onChange={user.handleChange}
              />
              {user.touched.name && user.errors.name && <p className="error-part">{user.errors.name}</p>}
            </div>
            {/* company name */}
            <div className="relative mb-4">
              <label
              htmlFor='name'
                className="leading-7 text-sm text-gray-400"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyname"
                placeholder="Your Business Title"
                autoComplete="off"
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={user.values.companyname}
                onChange={user.handleChange}
              />
              {user.touched.companyname && user.errors.companyname && <p className="error-part">{user.errors.companyname}</p>}
            </div>
            <div className="relative mb-4">
              <label  htmlFor='name' className="leading-7 text-sm text-gray-400">
                Contact Number
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Your Mobile Number"
                autoComplete="off"
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={user.values.phone}
                onChange={user.handleChange}             
              />
              {user.touched.phone && user.errors.phone && <p className="error-part">{user.errors.phone}</p>}
            </div>
            <button  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <input type="submit" name="signup"  value="Register" />
            </button>
            </form>
            <p className="text-xs mt-3">
              We Will Connect You Within Next 6 Working Hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm
