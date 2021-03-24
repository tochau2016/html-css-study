import React, {useState} from 'react'

function Form() {
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

    function handleChange(e){
        // const value = e.target.value;
        // const name = e.target.name;

        const { name, value } = e.target;

        setLoginForm({
            ...loginForm,
            [name]: value,
        });
        if (loginForm.name === 0){
            
        }
    }
    const newLoginError = {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    }
    function handleSubmit(){
        let isValid = true; 
        

        if (loginForm.email.length === 0){
            isValid = false;
            // setLoginError({...newLoginError, email: "Ban can nhap email"})
            newLoginError.email = "Ban can nhap email";

        } else {
            newLoginError.email = "";
        }

        if (loginForm.name.length === 0){
            isValid = false;
            newLoginError.name ="Ban can nhap ten"
        }else {
            newLoginError.name = "";
        }

        if (loginForm.password.length === 0){
            isValid = false;
            newLoginError.password ="Ban can nhap mat khau"
        } else {
            newLoginError.password = ""
        }

        if (loginForm.confirmPassword.length === 0){
            isValid = false;
            newLoginError.confirmPassword ="Ban can xac nhan mat khau"
        } else {
            newLoginError.confirmPassword = ""
        }
    
        if (isValid){
            console.log(loginForm)
            setLoginError({...loginError, ...newLoginError})
        } else {
            setLoginError({...loginError, ...newLoginError})
        }

    }
    return (
        <form>
            <input type="email" name="email" onChange={(e) => handleChange(e)} placeholder="Email"/>
            <p className="text-danger">{loginError.email}</p>
            <input type="text" name="name" onChange={(e) => handleChange(e)} placeholder="Name"/>
            <p className="text-danger">{loginError.name}</p>
            <input type="password" name="password" onChange={(e) => handleChange(e)} placeholder="Password"/>
            <p className="text-danger">{loginError.password}</p>
            <input type="password" name="confirmPassword" onChange={(e) => handleChange(e)} placeholder="Confirm Password"/>
            <p className="text-danger">{loginError.confirmPassword}</p>
            <button type="button" onClick={() => handleSubmit()}>Sign Up</button>
        </form>
    )
}

export default Form;