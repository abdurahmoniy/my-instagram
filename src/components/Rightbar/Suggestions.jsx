import React, { useContext } from 'react'
import './Suggestions.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../lib/firebase'

import anon from '../../assets/users/anon.webp'
import { GlobalContext } from '../../state/context/GlobalContext'

const USERS = [
  {
    name: 'user1',
    sub: 'New to Intstagram',
    image: anon
  },
  {
    name: 'user2',
    sub: 'Your follower',
    image: anon
  },
  {
    name: 'user3',
    sub: 'Followed by user1',
    image: anon
  },
  {
    name: 'user4',
    sub: 'Followed by user1 and +1 more',
    image: anon
  },
  {
    name: 'user5',
    sub: 'New to Instagram',
    image: anon
  },
]

const Suggestions = () => {
  const handleLogout = async () => {
    await signOut(auth)
    window.location.reload()
  }

  const { user, showSuggestions } = useContext(GlobalContext)

  return (
    <>
      {!showSuggestions ?
        <div className='Suggestions'>
          <div className="container" >
            <div className="Suggestions__body">
              <div className="Suggestions__header">
                <div className="Suggestions__person">
                  <img src={anon} alt="" />
                  <div className="Suggestions__name">
                    <span style={{ fontWeight: '500' }}>{user.username}</span>
                    <span style={{ color: 'gray' }}>{user.fullname}</span>
                  </div>
                </div>
                <span className='blue' onClick={handleLogout}>Переключиться</span>
              </div>
              <div className="Suggestions__recom">
                <div className="recom__me">
                  <span style={{ color: 'gray' }}>Рекомендации для вас</span>
                  <span style={{ fontSize: '13px' }}>Все</span>
                </div>
                <div className="recom__users">
                  {USERS.map((el, i) => {
                    return (
                      <div key={i} className="recom__user">
                        <img src={el.image} alt="" />
                        <div className="user__info">
                          <span style={{ fontWeight: '500' }}>{el.name}</span>
                          <span style={{ color: 'gray' }} className='sub'>{el.sub}</span>
                        </div>
                        <span className='blue'>Подписаться</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="Suggestions__footer">
                <span>
                  About .
                  Help .
                  Press .
                  API .
                  Jobs .
                  Privacy .
                  Terms .
                  Locations .
                  Language .
                  Meta Verified
                </span>

                <div>
                  © 2023 INSTAGRAM FROM AZIZBEK
                </div>
              </div>
            </div>
          </div >
        </div > : null
        }
    </>
  )
}

export default Suggestions