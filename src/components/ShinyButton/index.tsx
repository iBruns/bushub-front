'use client';
import React, { useEffect, useRef } from 'react';
import './ShinyButton.css';

export default function ShinyButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    function mouseMoveEvent(e: MouseEvent) {
        const rect = buttonRef.current?.getBoundingClientRect();
        const { x, y } = rect ?? { x: 0, y: 0 };
        buttonRef.current?.style.setProperty('--x', `${e.clientX - x}`);
        buttonRef.current?.style.setProperty('--y', `${e.clientY - y}`);
    }

    useEffect(() => {
        const buttonElement = buttonRef.current;
        if (buttonElement) {
            buttonElement.addEventListener('mousemove', mouseMoveEvent);
        }

        return () => {
            if (buttonElement) {
                buttonElement.removeEventListener('mousemove', mouseMoveEvent);
            }
        };
    }, []);

    return (
        <button className='shiny focus:outline-none focus:ring w-80  border border-stone-700 hover:border-stone-600  h-16 hover:h-[4.5rem] hover:rounded-2xl hover:w-[21rem] px-5 rounded-xl transition-all duration-200 ease-out font-bold' ref={buttonRef}>
            <span className='relative z-10 text-stone-300'>Quero Conhecer Mais!</span>
        </button>
    );
}
