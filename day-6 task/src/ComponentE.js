import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from './App'

const ComponentE = () => {

    const user=UserContext(UserContext)
    const channel=UserContext(ChannelContext)



  return (
    <div>
        {user}-{channel}
        {/* <ComponentF/> */}
    </div>
  )
}

export default ComponentE