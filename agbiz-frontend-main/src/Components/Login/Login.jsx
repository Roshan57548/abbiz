import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { contextAPi } from "../../App";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Footer from "../Footer";
import Header from "../Header";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import first from './1.svg';
import YupPassword from "yup-password";
YupPassword(yup);

const Login = () => {
  // const { state, dispatch } = useContext(contextAPi);

  const History = useNavigate();

  const validate = yup.object({
    email: yup.string().email().required(),
    password: yup.string().password().required(),
  });

  const user = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {

        const { email, password } = values;
      
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/login_user`, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await res.json();

        if (!data || res.status === 400) {
          swal("Error", "Invalid Login", "warning");
        }else if (res.status === 404) {
          swal("Error", "Invalid Credential", "warning");
        } else {
          swal("Good job!", "Login Successfully!", "success").then((value) => {
            History("/");
          });
        }
      
    },
  });

  return (
    <div>
      <Header />
      <div className="container registration-page">
        <div className="login">
          <div className="container mt-5">
            <div className="login-content">
              <div className="login-image">
                <img
                  src={first}
                  alt=""
                />
              </div>
              <div className="login-form mt-5 mb-5">
                <h2 className="form-title mb-4 margin-top">Login</h2>
                <form
                  className="register-form"
                  id="register-form"
                  onSubmit={user.handleSubmit}
                >
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
                    {user.touched.email && user.errors.email && (
                      <p className="error-part">{user.errors.email}</p>
                    )}
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
                    {user.touched.password && user.errors.password && (
                      <p className="error-part">{user.errors.password}</p>
                    )}
                  </div>

                  {/*submit button */}

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      className="form-submit"
                      value="Login"
                    />
                  </div>
                  Don't have an account? <a href="/registration_user">Register</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
