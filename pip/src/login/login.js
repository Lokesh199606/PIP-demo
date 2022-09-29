import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";
import avatorIcon from "../images/avator.png";

function LoginPage(props) {

    const cbRef = useRef();
    const usrRef = useRef();
    const pwdRef = useRef();
    const navigate = useNavigate();

    const [cbSelected, setCbSelected] = useState(false);

    const cbChanged = () => {
        setCbSelected(cbRef.current.checked);
    }

    const submit = (event) => {
        event.preventDefault();
        if (usrRef.current.value === "admin") {
            props.role(true);
        }
        else {
            props.role(false);
        }
        navigate("/employees", { state: { loginName: usrRef.current.value } });
    }

    return (
        <div className="formClass">
            <form method="post" onSubmit={submit}>
                <div className="imgcontainer">
                    <img src={avatorIcon} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input ref={usrRef} type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input ref={pwdRef} type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input ref={cbRef} style={{ paddingTop: "6px" }} type="checkbox" checked={cbSelected} name="remember" onChange={cbChanged} /> <span>Remember me</span>
                        <span className="psw"><a href="#" style={{ fontSize: "14px" }}>Forgot password?</a></span>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;