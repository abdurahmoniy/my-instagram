import React, { useContext, useState } from 'react'
import { GlobalDispatchContext } from '../../state/context/GlobalContext'
import { Link, NavLink } from 'react-router-dom'

const SidebarIcon = ({ name, icon, url, iconFill }) => {
    const dispatch = useContext(GlobalDispatchContext)

    const handleClickIcon = () => {
        if (name === 'Create') {
            dispatch({
                type: 'SET_IS_UPLOAD_POST_MODAL_OPEN',
                payload: {
                    isOpen: true
                }
            })
        }
        if (name === 'Profile') {
            dispatch({
                type: 'SET_SHOW_RIGHTBAR',
                payload: {
                    showRightbar: true
                }
            })
        } else {
            dispatch({
                type: 'SET_SHOW_RIGHTBAR',
                payload: {
                    showRightbar: false
                }
            })
        }
    }

    return (
        <NavLink to={url} onClick={handleClickIcon} className='bar__item'>
            <span className='bar__icon'>{icon}</span>
            <span className='bar__icon-fill'>{iconFill}</span>
            <span className='bar__name'>{name}</span>
        </NavLink>
    )
}

export default SidebarIcon