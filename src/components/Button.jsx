import React from 'react'

const Button = ({text, type, bgColorCode, myClass, onClick}) => {
  return (
      <button type={type} className={`focus:outline-none text-white font-medium ${myClass}`} style={{background: bgColorCode}} onClick={onClick}>{text}</button>
  )
}

export default Button
