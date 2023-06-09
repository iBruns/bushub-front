import { IconType } from "react-icons/lib"

interface ButtonProps {
    children: React.ReactNode
    className?: string
    contentClassName?: string
    rightIcon?: React.ReactNode
    preset?: "outline" | "solid" | "ghost"
}


export default function Button({ children, className, contentClassName, preset, rightIcon }: ButtonProps) {

    const focus = 'focus:outline-none focus:ring'
    const font = 'text-sm text-center'

    const styleSettings = `${focus} ${font} ${className}`

    const presets = {
        'solid': `bg-sky-400 hover:bg-sky-500 text-white h-10 px-5 rounded-full transition-all duration-200 font-bold align-top ${styleSettings}`,
        'outline': `bg-transparent hover:bg-stone-700/50 border border-stone-700 text-stone-400 h-10 px-5 rounded-full transition-all duration-200 font-bold align-top ${styleSettings}`,
        'ghost': `bg-transparent hover:bg-stone-700/50 text-stone-400 h-10 px-5 rounded-full transition-all duration-200 font-bold align-top ${styleSettings}`,
    }

    return (
        <button className={
            preset == 'solid' ? presets['solid'] :
                preset == 'outline' ? presets['outline'] :
                    preset == 'ghost' ? presets['ghost'] :
                        presets['solid']
        }
        >
            <div className={`h-full w-full flex flex-row space-x-3 items-center justify-center ${contentClassName}`}>
                {children && <span className="truncate">{children}</span>} {rightIcon}
            </div>
        </button>
    )
}