import React from 'react'
export const FunctionalContext = React.createContext(function () {})
export const USERCONTEXT = React.createContext({})
export const PRODUCTCONTEXT = React.createContext({})

export const Context = FunctionalContext.Provider
export const USER = USERCONTEXT.Provider
export const PRODUCT = PRODUCTCONTEXT.Provider
