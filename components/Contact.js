import Image from 'next/image'
function Contact({ name, src }) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl">
            <Image 
                className="rounded-full"
                objectFit="cover"
                width={50}
                height={50}
                layout="fixed"
                src={src}
            />
            <p className="s">{name}</p> 
            <div className="absolute bottom-2 left-7 bg-green-400 rounded-full h-3 animate-bounce"></div>
        </div>
    )
}

export default Contact
