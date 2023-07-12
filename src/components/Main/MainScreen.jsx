import React, { useContext } from 'react'
import './MainScreen.css'
import Sidebar from '../Sidebar/Sidebar'
import Suggestions from '../Rightbar/Suggestions'
import Modal from '../Modal/Modal'
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from '../../state/context/GlobalContext'
import Profile from '../Profile/Profile'

const MainScreen = () => {
    const { user } = useContext(GlobalContext)

    return (
        <div className='MainScreen'>
            <div className='container'>
                <div className="MainScreen__body">
                    Instagram
                    {/* <Sidebar />
                    <Modal />
                    <div className="MainScreen__content">
                        <Routes >
                            <Route path='/' element={<Home />} />
                            <Route path={`/${user.username}`} element={<Profile />} />
                        </Routes>
                    </div>
                    <Suggestions /> */}
                </div>
            </div>
        </div>
    )
}

export default MainScreen