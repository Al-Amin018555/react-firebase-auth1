import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";


const Login = () => {

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('google sign in clicked');

        signInWithPopup(auth, provider).then(result => console.log(result)).catch(error => console.log(error))
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}>Sing in With Google</button>
        </div>
    );
};

export default Login;