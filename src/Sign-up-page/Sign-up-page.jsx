import React from "react";
import FormInput from "../signin-page/sign-up";
import CustomButton from "../custom-button/custom-button";
import {auth, createUserProfileDocument} from "../firebase/firebase-utility";
import "./sign-up-page.scss";
class SignUp extends React.Component{
    constructor()
    {
        super();
        this.state={
            displayName:" ",
            email:" ",
            password: " ",
            confirmPassword: " "
        }
    }
    handleSubmit= async event =>
    {
        event.preventDefault();
        const{displayName,email, password, confirmPassword}=this.state;
        if(password != confirmPassword) 
        {
            alert("Password is incorrect");
            return;
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, displayName);
            this.setState={
                displayName:" ",
                email:" ",
                password: " ",
                confirmPassword: " "
            }
        } catch (error) {
            console.error(error);   
        }

    };
    handleChange= event =>
    {
        const{name,value}=event.target;
        this.setState({[name]:value});
    } 
    render()
    {
        const{displayName,email, password, confirmPassword}=this.state;
        return(
            <div className="Sign-up">
                <h1 className="title">I do not have an account</h1>
                <h4>Sign up with your emailId and password</h4>
                <form className="sign-up-page" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='text'
                        name='Password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='text'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
            
        )
    }
}
export default SignUp;