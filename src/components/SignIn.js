import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [fullName, setFullName] = useState('');
    const [registration, setRegistration] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if(name === 'fullName'){
            setFullName(value);
        }else if(name === 'registration'){
            setRegistration(value);
        }
    };

    return (
        <div className='signin-box'>
            <h2>Sign In</h2>
            <form action="">
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
                <Link to="/" className="btn w-100">Sign In</Link>
            </form>

        </div>
    );
}

export default SignIn;