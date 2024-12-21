import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const SignIn = ({onSignInSuccess}) => {
    const [fullName, setFullName] = useState('');
    const [registration, setRegistration] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if(name === 'fullName'){
            setFullName(value);
        }else if(name === 'registration'){
            setRegistration(value);
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        onSignInSuccess();
        navigate('/home');
    }

    return (
        <div className='signin-box'>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <div className="mb-3">
                    <label htmlFor="fullNAme" className="form-label"></label>
                    <input
                        type="fullName"
                        className="form-control"
                        id="fullNameInput"
                        name="fullName"
                        value={fullName}
                        placeholder="Full Name"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registrationInput" className="form-label"></label>
                    <input
                        type="registration"
                        className="form-control"
                        id="registrationInput"
                        name="registration"
                        value={registration}
                        placeholder="Registration Number"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button to="/home" className="btn-primary">Sign In</button>
            </form>

        </div>
    );
}

export default SignIn;