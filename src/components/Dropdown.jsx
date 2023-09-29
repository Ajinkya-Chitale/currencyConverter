import React from 'react'

const Dropdown = ({id, text, country, countryOption, change}) => {
    return (
        <div className='flex flex-col mb-4'>
            <label htmlFor={id} className="text-white">{text}:</label>
            <select id={id} className="w-full text-sm px-2 py-2.5" onChange={change}>
                {
                    Object.entries(countryOption).map((ele) => {
                        if(ele[1].currency_code !== "") {
                            return (
                                <option key={ele[0]} value={ele[1].currency_code} selected={country === ele[1].currency_code}>{ele[1].currency_code.toUpperCase()}</option>
                            )
                        }
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown
