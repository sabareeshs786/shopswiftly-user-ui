import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import '../css/home.css';
import HomeContainer from "./HomeContainer";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/linkpage');
  }

  return (
    <HomeContainer />
  )
}

export default Home
