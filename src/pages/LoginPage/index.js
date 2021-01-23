import { useState } from 'react';
import { login } from '../../services/userService'
import styles from './Login.module.css'



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
        <div>
            <form onSubmit={handleSubmit}>
                <div class="input-field col s6">
                    <input 
                    value={formState.email} 
                    onChange={handleChange}
                    placeholder="Email" 
                    name="email" 
                    type="email" />
                </div>
                <div>
                    <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    placeholder="Password"
                    name="password" 
                    type="password" />
                    <br/>
                </div>
                <div>
                    <button>Login</button>
                </div>

            </form>
        </div>
    );

}

export default LoginPage;