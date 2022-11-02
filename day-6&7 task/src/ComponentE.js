import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from './UserContext'

export default class ComponentE extends Component {
  render() {
    return (
        <>
            Component E context {this.context}
            <ComponentF/>

      </>
    )
  }
}

ComponentE.contextType=UserContext
