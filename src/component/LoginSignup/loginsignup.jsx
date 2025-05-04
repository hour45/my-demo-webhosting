import react, { useState } from "react";
import './loginsignup.css';
import envelope from '../asset/envelope.png';
import lock from '../asset/lock.png';
import user from '../asset/user.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className=" container ">
            <div className="header"><div className="text">{action}</div>
                <div className="underline"></div></div>


            <div className="inputs">
                {action === "login" ? <div></div> :
                    <div className="input">

                        <img className="usericon" src={user} alt="" />
                        <input type="text" placeholder="Name" />
                    </div>
                }


                <div className="input">
                    <img className="mailicon" src={envelope} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img className="passicon" src={lock} alt="" />
                    <input type="text" className="" placeholder="Password" />
                </div>

                <div className="forgot">Lost Password? <span className="">Click Here!</span></div>
                <div className="submit-container">
                    <div className={action === "log in" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Log in") }}>Login</div>
                </div>
            </div>


        </div>
    )
}

export default LoginSignup;