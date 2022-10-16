import React, { MouseEvent } from 'react'

interface Props{
    text: string
    icon: any
    className?: string
    onClick?: any
}

export default function MobileSidelink(props: Props) {
    return (
        <div className={`flex py-3 font-bold ${props.className}`} onClick={props.onClick}>
            {props.icon}
            
            <div className='ml-5'>
                {props.text}
            </div>
        </div>
    )
}