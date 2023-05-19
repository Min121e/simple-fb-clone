import React from 'react'

const Headericon = ( { Icon, active }) => {
  return (
    <div className='flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group'>
//         <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-600 ${active && 'text-blue-600'}`}/>
    <Icon
        className="h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-600"
        style={{ color: active ? '#3182ce' : '' }}
    />
    </div>
  )
}

export default Headericon
