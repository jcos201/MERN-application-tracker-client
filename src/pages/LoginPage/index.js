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
    }
    return(
        <div className={styles.formDiv}>
            <form onSubmit={handleSubmit}>
                <div >
                    <input 
                    value={formState.email} 
                    onChange={handleChange}
                    placeholder="Email" 
                    name="email" 
                    type="email"
                    required />
                </div>
                <div>
                    <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    placeholder="Password"
                    name="password" 
                    type="password"
                    required />
                    <br/>
                </div>
                <div>
                    <button className={styles.button}>Login</button>
                </div>

            </form>
        </div>
    );

}

export default LoginPage;