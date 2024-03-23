import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import './Layout.scss'

function Layout({children}) {
  return (
    <div className='container'>
      <Navbar/>
      <div className='content'>
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default Layout