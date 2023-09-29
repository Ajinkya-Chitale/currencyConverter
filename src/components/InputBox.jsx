import React from 'react'

const InputBox = ({label, id, isDisabled, bottomMargin, currentAmount}) => {
  return (
    <div className={bottomMargin}>
        <label className='text-white' htmlFor={id}>{label}:</label>
        <input className='w-full mt-1 px-2 focus:outline-none' type="number" id={id} disabled={isDisabled} onChange={currentAmount} />
        <div className='errorMsg text-sm mt-1 text-red-500'></div>
    </div>
  )
}

export default InputBox
