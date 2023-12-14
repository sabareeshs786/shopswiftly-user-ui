import { Outlet } from "react-router-dom"
import HomeHeader from "./HomeHeader"

const Layout = () => {
    return (
        <main className="App">
            <HomeHeader />
            <Outlet />
        </main>
    )
}

export default Layout
