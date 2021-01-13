import { useState } from 'react';
import { signup } from '../../services/userService';

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
            //todo: comment out to see that user doesn't get added to state without
            props.handleSignupOrLogin();

            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message);
        }
        //console.log('submitted form data', formState)
        //TODO: make ajax request to signup user
    }
    return(
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    value={formState.firstName} 
                    onChange={handleChange} 
                    name="firstName" 
                    type="text" />
                    <input 
                    value={formState.lastName} 
                    onChange={handleChange} 
                    name="lastName" 
                    type="text" />
                    <input 
                    value={formState.email} 
                    onChange={handleChange} 
                    name="email" 
                    type="email" />
                    <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    name="password" 
                    type="password" />
                    <button>Sign Up</button>
                </div>

            </form>
        </div>
    )

}

export default SignupPage;