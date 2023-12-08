import React from 'react'

interface RegProps {
    text: string;
}

const RegButton = (props: RegProps) => {
    const {text} = props
    return (
        <>
        <button className="rounded-2xl  divide-solid h-16 w-80  text-2xl font-semibold bg-[#dd9973] border border-black"><a href="">{text}</a></button>
        
        </>
    )
}


export default RegButton