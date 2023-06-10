import { ReactNode } from "react"

interface NavigationButtonProps {
    label: string
}


export default function NavigationButton({ label }: NavigationButtonProps) {
    const focus = 'focus:outline-none focus:ring'
    const font = 'text-sm text-center'
    const hover = 'hover:text-white'

    const styleSettings = `${focus} ${font} ${hover}`

    return (
        <button className={` transition-all duration-200 w-28 h-full font-sm font-light text-stone-300 space-x-3 flex justify-center items-center ${styleSettings}`}>
            <span>{label}</span>
        </button>
    )
}