import { useState } from 'react';
import { signup } from '../../services/userService';

import styles from './Signup.module.css'

function SignupPage (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }}

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();

            await signup(formState);

            setFormState(getInitialFormState);
            props.handleSignupOrLogin();

            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message);
        }

    }
    return(
        <div className="formDiv">
            
            <form onSubmit={handleSubmit}>
                <div><input 
                value={formState.firstName} 
                onChange={handleChange} 
                placeholder="First Name"
                name="firstName" 
                type="text"
                required />
                </div>
                <div><input 
                value={formState.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"
                name="lastName" 
                type="text" />
                </div>
                <div><input 
                value={formState.email} 
                onChange={handleChange} 
                placeholder="Email"
                name="email" 
                type="email"
                required />
                </div>
                <div><input 
                value={formState.password} 
                onChange={handleChange} 
                placeholder="Password"
                name="password" 
                type="password"
                required />
                </div>
                <button className={styles.button}>Sign Up</button>
            </form>
        </div>
    );

}

export default SignupPage;