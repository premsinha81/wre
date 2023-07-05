
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const loadingContext = createContext()

const Loading = ({children}) => {

    const[loadingd , setLoadingd]=useState(1)
  return (
    <loadingContext.Provider value={{loadingd , setLoadingd}}>
        {children}
    </loadingContext.Provider>
  )
}

export default Loading