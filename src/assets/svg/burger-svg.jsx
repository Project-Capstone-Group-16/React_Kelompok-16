import React from 'react'

function BurgerSVG(props) {
  const { color = '#1652F9' } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" fill="none" viewBox="0 0 18 12">
      <path fill={color} d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z"></path>
    </svg>
  )
}

export default BurgerSVG
