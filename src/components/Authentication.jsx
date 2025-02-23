import {useState} from 'react'
import { useAuth } from '../context/AuthContext' 

export default function Authentication(props) {
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAuthenticating, setisIsAuthenticating] = useState(false)
    const [error, setError] = useState(null)

    const {signUp, login} = useAuth()

    const { handleCloseModal } = props
    async function handleAuthenticate(){
        if (!email || !email.includes('@') || !password || password.length < 6 || isAuthenticating) {
            return
        }

        try {
            setisIsAuthenticating(true)
            setError(null)
            if (isRegistration) {
                // register a user
                await signUp(email, password)
            } else {
                // login a user
                await login(email, password)
            }
            handleCloseModal()
            
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setisIsAuthenticating(false)

        }

       
    }

    return (
        <>
            <h2 className="sign-up-text"> {isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p> {isRegistration ? 'Create an account!' : "Sing in to your account!"}</p>
            {error && (
                <p>❌{error}</p>)}
            <input value = {email} placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
            {/* Type tells the html input what type of input you want, in this specific case putting the type as  */}
            <input value = {password} placeholder="********" type="password" onChange = {(e) => setPassword(e.target.value)}/>
            <button onClick = {handleAuthenticate}><p>{ isAuthenticating ? 'Authenticating...' : 'Submit'}</p></button>
            <hr/>
            <div className = "register-content">
                <p>{ isRegistration ? "Already have an account?" : "Don't have an account?"}</p>
                <button onClick={()=> setIsRegistration(!isRegistration)}> <p>{isRegistration ? "Sign in" : "Sign up"}</p></button>

            </div>

        </>
    )
}