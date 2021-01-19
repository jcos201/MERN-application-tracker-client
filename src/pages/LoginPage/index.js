import { useState } from 'react';
import { login } from '../../services/userService'

function LoginPage (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
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

            await login(formState);

            setFormState(getInitialFormState);
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
                    value={formState.email} 
                    onChange={handleChange} 
                    name="email" 
                    type="email" />
                    <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    name="password" 
                    type="password" />
                    <button>Login</button>
                </div>

            </form>
        </div>
    );

}

export default LoginPage;