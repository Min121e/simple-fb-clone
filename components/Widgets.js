import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import billgates_profile_pic from '../assets/billgates_profile_pic.jpg'
import jeff_bezos_profile_pic from '../assets/jeff_bezos_profile_pic.jpg'
import taylorswift_profilepic from '../assets/taylorswift_profilepic.jpg'
import Mark_Zuckerberg_profile_pic from '../assets/Mark_Zuckerberg_profile_pic.webp'
import harry from '../assets/harry.webp'
import thequeen from '../assets/thequeen.webp'
import Jamesbond from '../assets/Jamesbond.webp'

import React from 'react'
import Contact from './Contact'
const contacts = [
    { src: billgates_profile_pic, name: 'Bill Gates'},
    { src: jeff_bezos_profile_pic, name: 'Jeff Bezos'},
    { src: taylorswift_profilepic, name: 'Taylor Swift'},
    { src: Mark_Zuckerberg_profile_pic, name: 'Mark Zuckerberg'},
    { src: harry, name: 'Harry Potter'},
    { src: thequeen, name: 'The Queen'},
    { src: Jamesbond, name: 'James Bond'}
]

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5 '>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6' />
                <SearchIcon className='h-6' />
                <DotsHorizontalIcon className='h-6' />
            </div>
        </div>
            {contacts.map((contact) => (
            <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
    </div>

    
  )
}

export default Widgets