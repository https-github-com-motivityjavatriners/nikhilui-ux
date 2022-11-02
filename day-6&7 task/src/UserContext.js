import React from 'react'

const UserContext =React.createContext('nikhil kumar')

const UserProvider=UserContext.Provider

const UserConsumer=UserContext.Consumer


export {UserProvider,UserConsumer,UserContext}