import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Root() {
  return (
    <div className='bg-base-200 '>
      <div className='max-w-5xl mx-auto '>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
