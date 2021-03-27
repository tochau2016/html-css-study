import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';

function SignUp() {

    const [loginForm, setLoginForm] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    })

    const [loginError, setLoginError] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    })
    const newLoginError = {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    }

    function handleChange(e) {
        // const value = e.target.value;
        // const name = e.target.name;

        const { name, value } = e.target;

        setLoginForm({
            ...loginForm,
            [name]: value,
        });
        if (loginForm.name === 0) {

        }
    }   

    function handleSubmit() {
        let isValid = true;
        if (loginForm.email.length === 0) {
            isValid = false;
            // setLoginError({...newLoginError, email: "Ban can nhap email"})
            newLoginError.email = "Ban can nhap email";

        } else {
            newLoginError.email = "";
        }

        if (loginForm.name.length === 0) {
            isValid = false;
            newLoginError.name = "Ban can nhap ten"
        } else {
            newLoginError.name = "";
        }

        if (loginForm.password.length === 0) {
            isValid = false;
            newLoginError.password = "Ban can nhap mat khau"
        } else {
            newLoginError.password = ""
        }

        if (loginForm.confirmPassword.length === 0) {
            isValid = false;
            newLoginError.confirmPassword = "Ban can xac nhan mat khau"
        } else {
            newLoginError.confirmPassword = ""
        }

        if (isValid) {
            console.log(loginForm)
            setLoginError({ ...loginError, ...newLoginError })
        } else {
            setLoginError({ ...loginError, ...newLoginError })
        }

    }

    return (
        <div className="container login-form">
            <center><h4>Đăng ký</h4></center>
            <form class="w-100">
                <label for="register-email">Email:</label>
                <input
                    autoComplete="off"
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    id="register-email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                />
                <p className="text-danger">{loginError.email}</p>

                <label for="register-name" class="mt-2">Name:</label>
                <input
                    type="name"
                    class="form-control"
                    placeholder="Enter name"
                    id="register-name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                />
                <p className="text-danger">{loginError.name}</p>

                <label for="register-password" class="mt-2">Password:</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Enter password"
                    id="register-password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                />
                <p className="text-danger">{loginError.password}</p>

                <label for="register-confirm-password" class="mt-2">Confirm Password:</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Enter confirm password"
                    id="register-confirm-password"
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                />
                <p className="text-danger">{loginError.confirmPassword}</p>

                <button
                    type="button"
                    id="register-submit"
                    class="btn btn-danger mt-4 w-100"
                    onClick={() => handleSubmit()}
                >
                    Đăng Ký
              </button>
            </form>
        </div>
    )
}
export default SignUp;