import React from "react";
import "./Registration.css";
import swal from 'sweetalert';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import YupPassword from 'yup-password';
import "yup-phone";
import Footer from "../Footer";
import Header from "../Header";
YupPassword(yup) 
const Registration = () => {
  // write code for backend connect to frontend
  const History = useNavigate();

  const validate = yup.object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    phone: yup.string().phone().required(),
    password: yup.string().password().required(),
    confirm_password: yup.string().password().required(),
  });

  const user = useFormik({
    initialValues: {
      name:"",
      email:"",
      phone:"",
      password:"",
      confirm_password:""
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const {name, email, phone, password, confirm_password} = values;
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/registration_user`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, email, phone, password, confirm_password
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
      else if(res.status === 422 ) {
        swal("Error", "User already exist", "warning");
      }
      else if(res.status === 423){
        swal("Error","Passwords does not match correctly", "warning");
      }
      else{
        swal("Good job!", "Register Successfully!", "success")
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
            <div className="signup-content">
              <div className="signup-form">
                <h1 className="form-title mb-4 margin-top">Registration Form</h1>
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
                      placeholder="Your Name"
                      className="roshan"
                      value={user.values.name}
                      onChange={user.handleChange}
                    />
                    {user.touched.name && user.errors.name && <p className="error-part">{user.errors.name}</p>}
                  </div>
                  {/* email */}
                  <div className="form-group mb-2">
                    <label htmlFor="email">
                      <EmailIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Your Email"
                      className="roshan"
                      value={user.values.email}
                      onChange={user.handleChange}
                    />
                    {user.touched.email && user.errors.email && <p className="error-part">{user.errors.email}</p>}
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
                      placeholder="Your Phone"
                      className="roshan"
                      value={user.values.phone}
                      onChange={user.handleChange}
                    />
                    {user.touched.phone && user.errors.phone && <p className="error-part">{user.errors.phone}</p>}
                  </div>

                  {/* password */}
                  <div className="form-group mb-2">
                    <label htmlFor="password">
                      <PasswordIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Your Password"
                      className="roshan"
                      value={user.values.password}
                      onChange={user.handleChange}
                    />
                    {user.touched.password && user.errors.password && <p className="error-part">{user.errors.password}</p>}
                  </div>

                  {/* confirm password */}
                  <div className="form-group">
                    <label htmlFor="confirm_password">
                      <PasswordIcon className="material-icons-name"/>
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      autoComplete="off"
                      placeholder="Your Password"
                      className="roshan"
                      value={user.values.confirm_password}
                      onChange={user.handleChange}
                    />
                    {user.touched.confirm_password && user.errors.confirm_password && <p className="error-part">{user.errors.confirm_password}</p>}
                  </div>

                  {/*submit button */}

                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                  </div>



                </form>
                
              </div>
              <div className="signup-image">
                  
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png" alt="" />
                  
                </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
    
    
  );
};

export default Registration;
