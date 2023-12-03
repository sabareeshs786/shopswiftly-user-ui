import { useContext } from "react";
import { Link } from "react-router-dom";
import '../css/login-signup.css';
import '../css/signup.css';
import Logo from "./Logo";
import ErrorMsg from "./ErrorMsg";
import SignupForm from "./SignupForm";
import SignUpContext from "../context/SignUpContext";

function SignupContainer() {

    const { success } = useContext(SignUpContext);

    return (
        <>
            {success ? (
                <section className="auth-container">
                    <div className="image-container">
                        <Logo />
                    </div>
                    <div className="card custom-card">
                        <div className="card-body">
                            <h1>Success!</h1>
                            <p>
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="auth-container">
                    <div className="image-container">
                        <Logo />
                    </div>
                    <div className="card custom-card">
                        <div className="card-body">
                            <h3>Sign Up</h3>
                            <ErrorMsg context={SignUpContext} />
                            <SignupForm />
                        </div>
                    </div>
                    <div className="separator">
                        Already have an account?
                    </div>
                    <Link
                        className="btn btn-primary signinAccountButton"
                        to="/login"
                        role="button"
                    >Sign in</Link>
                </section>
            )}
        </>
    );

}

export default SignupContainer;