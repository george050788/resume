import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, About } from '../views'
import { Header } from '../component'
export default function AppRouter () {





  return (
    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path='about' exact element={<About />} />
      </Routes>




    </>
  )
}
