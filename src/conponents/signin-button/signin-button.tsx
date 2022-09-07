import React from 'react'
import * as hehe from 'react-icons/fa';


interface Props{
    text: string
    color: string
    bgColor: string
    icon?: any
    className?: any
}
export default function SigninButton(props: Props) {
    return (
        <>
        {/* {`bg-${props.icon}`} */}
            <button className={`w-full p-2 rounded-3xl font-bold text-center flex justify-center text-sm bg-${props.bgColor} text-${props.color} ${props.className}` }>
                <span className='flex items-center gap-2'> 
                    {/* <FaApple/>  */}
                    {props.icon}
                    { props.text}
                </span>
            </button>
        </>
    )
}

// bg-[${props.color}]
