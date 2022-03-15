import './Button.css'
import React from 'react'


const STYLES = ['btn--primary', 'btn--outline', 'btn--test']

const SIZES = ['btn--small', 'btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button
      className={`bttn ${checkButtonStyle} ${checkButtonSize} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}