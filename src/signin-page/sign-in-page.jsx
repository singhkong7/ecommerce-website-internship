import React from "react";
import CustomButton from "../custom-button/custom-button";
import './sign-in-page.scss';
import FormInput from "./sign-up";
import {signInWithGoogle} from "../firebase/firebase-utility";
class SignInPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password: " "
        }
    }
    handleSubmit=async event => {
        event.preventDefault();
        const{email, password}=this.state;
        try {
            //await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:" ", password:" "});
        } 
        catch (error) 
        {
                
        }
        
    }
    handleChange= event => {
        const{value, name}= event.target;
        this.setState({[name]: value})
    }
    render()
    {
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign with your mail and password</span><br></br>

                
                <form onSubmit={this.handleSubmit}>
                        <label>Email</label><br></br>
                        <FormInput
                            name="email" 
                            type="email"  
                            handleChange={this.handleChange} 
                            value={this.state.email}
                            required 
                        /><br></br>

                        <label>Password</label><br></br>
                        <FormInput 
                            name="password" 
                            type="password" 
                            handleChange={this.handleChange} 
                            value={this.state.password} 
                            required 
                        /><br></br>

                        <div className="button">
                            <CustomButton type="submit">SIGN IN</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                {' '}
                                Sign In With Google{' '}
                            </CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}
export default SignInPage; 