import React from 'react'
import HomeHeader from './HomeHeader';
import { Outlet } from 'react-router-dom';

function LayoutNav() {
    return (
        <>
            <HomeHeader bgBlue={true}/>
            <Outlet />
        </>
    )
}

export default LayoutNav;