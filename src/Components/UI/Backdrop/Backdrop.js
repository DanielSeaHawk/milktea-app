import React from 'react'
import style from './Backdrop.module.css'
import { createPortal } from 'react-dom'

const backDropRoot = document.getElementById('backdrop-root')

const Backdrop = (props) => {
  return (
    createPortal(<div 
    {...props}
    className={`${style.Backdrop} ${props.className}`}>
        {props.children}
    </div>,backDropRoot)
  )
}

export default Backdrop