import { MouseEvent } from "react"

interface Props{
    text: string
    icon: any
    onClick?: any
}

export default function SidebarLink(props: Props) {
    return (
        <div className='flex p-3 rounded-full gap-5 items-center w-fit hover:bg-[#181818]' onClick={props.onClick}>
            {props.icon}
            <div className='text-lg font-bold lg:block hidden text-center'>
                {props.text}
            </div>
        </div>
    )
}
