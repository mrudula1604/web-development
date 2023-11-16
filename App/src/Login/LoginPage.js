import React from "react";
import { useNavigate } from "react-router-dom";
import "../Login/LoginPage.css"

export default function LoginPage({...props}){
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    /*const handleSignIn = () => {
        if(email === "admin" && password === "admin"){
            props.handle();
            navigate('/main')
        }else{
            alert("Invalid Credentials")
        }
    }*/
    const handleSignIn = (event) => {
        event.preventDefault();
        // Show a loading indicator while the request is in progress
    
        fetch('http://localhost:3000/user/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(response => {
            if (response.status === 200) {
                // User authenticated, navigate to the main page
                props.handle();
                navigate('/main');
            } else {
                // Error occurred, display error message
                response.json().then(errorData => {
                    setError(errorData.error);
                });
            }
        }).catch(error => {
            console.log(error)
        })
    };
    return(
        <div className="login-page">
            <h1> Login Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" className="login-input" onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" className="login-input" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    )
}