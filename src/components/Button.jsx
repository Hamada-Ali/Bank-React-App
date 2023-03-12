import React from 'react'

function Button({style, children}) {
  return (
    <button type='button' className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-primary outline-none text-[18px] ${style}`}>
      {children}
    </button>
  )
}

export default Button