import React from "react";
import "./sign-in.scss";
import SignInPage from "./sign-in-page";
import SignUp from "../Sign-up-page/Sign-up-page";
const Signin = () =>
(
    <div className="signIn">
        <div>
            <SignInPage />
        </div>
        <div>
            <SignUp />
        </div>

    </div>
);
export default Signin;