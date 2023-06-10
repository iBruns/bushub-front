'use client';

import { ReactNode, useState } from "react"
import { IoChevronDown } from "react-icons/io5"

interface NavigationDropdownProps {
    label: string
}

export default function NavigationDropdown({ label }: NavigationDropdownProps) {
    const focus = 'focus:outline-none focus:ring'
    const font = 'text-sm text-center'
    const hover = 'hover:text-white'

    const styleSettings = `${focus} ${font} ${hover}`

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <button
            onFocus={handleOpen}
            onBlur={handleClose}
            className={` transition-all duration-200 w-28 h-full font-sm font-light text-stone-300 space-x-3 flex justify-center items-center ${styleSettings}`}
        >
            <span>{label}</span>
            <IoChevronDown
                className={
                    isOpen ? "transition-transform duration-200 origin-center rotate-180"
                        : "transition-transform duration-200 origin-center rotate-0"
                } />
        </button>
    )
}