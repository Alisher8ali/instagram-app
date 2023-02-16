import React from 'react'
import cls from "../../../assets/styles/forms/Forms.module.scss"
const Divider = ({children}) => {
  return (
    <div className={cls.divider}>
        {children}
    </div>
  )
}

export default Divider
