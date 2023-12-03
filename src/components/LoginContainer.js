import { Link } from 'react-router-dom';
import '../css/login-signup.css';
import '../css/login.css';
import Logo from './Logo';
import ErrorMsg from './ErrorMsg';
import LoginForm from './LoginForm';
import Notice from './Notice';
import Help from './Help';
import LoginContext from '../context/LoginContext';

function LoginContainer() {

    return (
            <section className="auth-container">
                <div className="image-container">
                    <Logo />
                </div>
                <div className="card custom-card">
                    <div className="card-body">
                        <h3>Sign In</h3>
                        <ErrorMsg context={LoginContext}/>
                        <LoginForm />
                        <Notice />
                        <Help help="Forget password" />
                    </div>
                </div>
                <div className="separator">
                    New to Shopswiftly?
                </div>
                <Link
                    className="btn btn-primary createAccountButton"
                    to="/register"
                    role="button"
                >Sign Up</Link>
            </section>
    );
};

export default LoginContainer;