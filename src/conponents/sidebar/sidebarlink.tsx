import { MouseEvent } from "react"

interface Props{
    text: string
    icon: any
    onClick?: any
    className?: string
}

export default function SidebarLink(props: Props) {
    return (
        <button className={`flex p-3 rounded-full gap-5 items-center w-fit hover:bg-[#181818] ${props.className}`} onClick={props.onClick}>
            {props.icon}
            <div className='text-lg font-bold lg:block hidden text-center'>
                {props.text}
            </div>
        </button>
    )
}
