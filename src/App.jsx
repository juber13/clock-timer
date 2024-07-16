/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import Register from './pages/Register'
import Login from './pages/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoures'

function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Content />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <ToastContainer toastOptions={{
          style: {
            fontSize: '12px',
            padding: '8px 10px',
            width: "100px"
          },
        }} />
      </div>
    </BrowserRouter>
  )
}

export default App
