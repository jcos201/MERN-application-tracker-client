import { useState } from 'react';

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

    function handleSubmit (event) {
        event.preventDefault();
        console.log('submitted form data', formState)
        //TODO: make ajax request to signup user
        setFormState(getInitialFormState);
        props.history.push('/dashboard');
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