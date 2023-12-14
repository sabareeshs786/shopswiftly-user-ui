import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import '../css/common.css';
import MobileContainer from "./MobileContainer";

export default function Mobiles() {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }
    return (
        <>
            <MobileContainer />
        </>
    )
}