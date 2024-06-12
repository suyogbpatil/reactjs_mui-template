import React, { useState } from 'react'
import { createContext } from 'react'

const MyContext = createContext()

//React context for storing access token
const DataContext = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('encoded_token')
    return token
  })
  const states = {
    token,
    setToken
  }
  return <MyContext.Provider value={states}>{children}</MyContext.Provider>
}

export { DataContext, MyContext }
