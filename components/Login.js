import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import fb  from '../assets/fb.png'

const Login = () => {
  return (
    <div className='grid place-items-center'>
        <Image
            src={fb}
            height={400}
            width={400}
            style={{objectFit: 'contain'}}
        />
        <h1 
          onClick={signIn}
          className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login