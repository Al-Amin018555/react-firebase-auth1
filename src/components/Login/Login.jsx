import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google sign in clicked');

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign out successful");
                setUser(null)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sing in With Google</button>
            <button onClick={handleSignOut} >Sign Out</button> */}
            {
                user ? <button onClick={handleSignOut} >Sign Out</button> : <div>
                    <button onClick={handleGoogleSignIn}>Sing in With Google</button>
                    <button onClick={handleGithubSignIn}>Sing in With Github</button>
                </div>
            }

            {
                user && <div>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;