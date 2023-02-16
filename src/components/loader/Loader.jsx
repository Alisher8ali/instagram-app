import React from 'react'
import { Components } from '..'
import Logo from "../../assets/images/logo/inca.png"

export const Loader = () => {
  return (
    <div className="loader">
        <Components.Image src={Logo}/>
    </div>
  )
}
