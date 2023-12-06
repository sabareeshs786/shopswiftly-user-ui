import { Link } from "react-router-dom";

export default function Logo({ forLogin = true }) {
    return (
        forLogin ? <img src="/shopswiftly.png" alt="Shopswiftly Logo" /> :
            <div className="cust-logo">
                <Link to="/">
                    <img
                        src="/shopswiftly-blue.png"
                        alt="Shopswiftly Logo"
                        id="logo"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Link>
            </div>
    );
}