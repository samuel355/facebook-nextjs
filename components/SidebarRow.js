import Image from "next/image"

function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 cursor-pointer">
            {
                //If src exit, execute this statement
                src && (
                    <Image 
                        className="rounded-full cursor-pointer"
                        src={src}
                        width ={30}
                        height={30}
                        layout ="fixed"
                    />
                )
            }

            {
                //if icon, execute this statement
                Icon && (
                    <Icon 
                        className="h-8 w-8 text-blue-500 cursor-pointer"
                    />
                )
            }

            <p className="hidden sm:inline-flex font-medium"> {title}</p>
        </div>
    )
}

export default SidebarRow
