import Image from 'next/image'
import React from 'react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  LogoutIcon
} from '@heroicons/react/outline'
import Headericon from './Headericon'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {

  const { data: session, status } = useSession()

  return (
    <div className='flex items-center p-2 lg:px-5 shadow-md sticky top-0 z-50 bg-white'>

        {/* Left */}
        <div className='flex items-center'>
            <Image 
                src='https://links.papareact.com/5me' 
                width={40} 
                height={40} 
                layout='fixed' 
            />
            <div className='hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-6 text-gray-600'/>
                <input 
                  type="text" 
                  placeholder='Search Facebook' 
                  className='hidden lg:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
                />
            </div>
        </div>

        {/* Center */}
        <div className='flex justify-center flex-grow'>
          <div className='flex space-x-6 md:space-x-2'>
            <Headericon active Icon={HomeIcon}/>
            <Headericon Icon={FlagIcon}/>
            <Headericon Icon={PlayIcon}/>
            <Headericon Icon={ShoppingCartIcon}/>
            <Headericon Icon={UserGroupIcon}/>
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
          {/* Profile pic */}
          <Image 
            className='rounded-full'
            src={session.user.image}
            width='40'
            height='40'
            style={{objectFit: 'cover'}}
            />

          <p className='hidden lg:flex whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
          <ViewGridIcon className='icon' />
          <ChatIcon className='icon' />
          <ChevronDownIcon className='icon' />
          <LogoutIcon className='icon' onClick={signOut} />
        </div>
    </div>
  )
}

export default Header