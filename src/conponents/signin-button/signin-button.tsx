import React from 'react'
import { FaApple } from 'react-icons/fa';


interface Props{
    text: string
    color: string
    bgColor: string
}
export default function SigninButton(props: Props) {
    return (
        <>
            
            <button className={`w-full p-2 mt-7 rounded-3xl font-bold bg-[${props.bgColor}] text-black`}>
                <span className='flex items-center text-center relative ml-11 gap-2'> 
                    <FaApple/> 
                    { props.text}
                </span>
            </button>
        </>
    )
}

// bg-[${props.color}]
