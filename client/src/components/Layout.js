import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
        <main style={{minHeight:"70vh"}}>
            {children}
        </main>
    </div>
  )
}

export default Layout
