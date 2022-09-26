import { MouseEvent } from "react"

interface Props{
    text: string
    icon: any
    onClick?: any
    className?: string
}

export default function SidebarLink(props: Props) {
    return (
        <button className={`flex my-1 p-3 rounded-full gap-5 items-center w-fit hover:bg-[#181818] ${props.className}`} onClick={props.onClick}>
            {props.icon}
            <div className='text-[1.025rem] font-bold lg:block hidden text-center'>
                {props.text}
            </div>
        </button>
    )
}
