interface Props{
    text: string
    icon: any
}

export default function SidebarLink(props: Props) {
    return (
        <div className='flex p-3 rounded-full gap-5 items-center w-fit hover:bg-[#181818]'>
            {props.icon}
            <div className='text-lg font-bold lg:block hidden text-center'>
                {props.text}
            </div>
        </div>
    )
}
