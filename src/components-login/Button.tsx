const Button = (props: any) => {
    const {text} = props
    return (
        <>
        <button className="rounded-2xl bg-[#94c3ad] h-16 w-80 text-2xl font-semibold border border-black">{text}</button>
        </>
    )
}


export default Button
