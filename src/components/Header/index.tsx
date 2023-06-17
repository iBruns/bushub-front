'use client';

import Image from 'next/image';
import { IoChatbubble, IoLogIn } from "react-icons/io5";

import Button from '../Button';

import Logo from '../../../public/logo.svg';
import NavigationButton from './NavigationButton';
import NavigationDropdown from './NavigationDropdown';
import { useHeaderSticky } from '@/contexts/HeaderStickyContext';


export default function Header() {
    const { isSticked } = useHeaderSticky();

    return (
        <>
            <div className='h-4 w-full' />
            <div className={
                !isSticked
                    ? 'z-20 mx-6 sticky top-0 px-2 flex flex-row items-center justify-center space-x-3 transition-all duration-300 pt-6 w-auto'
                    : 'z-20 mx-2 sticky top-0 px-2 flex flex-row items-center justify-center space-x-4 transition-all duration-300 pt-6 w-auto'
            }
            >
                <Button
                    preset='ghost'
                    className={isSticked ? 'h-9 min-w-max backdrop-blur-lg' : 'min-w-max'}
                >
                    <Image
                        src={Logo}
                        alt='Logo vai bus'
                        className={isSticked ? 'w-20 transition-all duration-100' : 'w-[5.5rem] transition-all duration-100'}
                    />
                </Button>
                <div className=
                    {
                        !isSticked
                            ? 'transition-all duration-100 backdrop-blur-md h-10 w-full bg-stone-700/60 rounded-full border border-stone-600 flex px-14 flex-row justify-around align-middle'
                            : 'transition-all duration-100 backdrop-blur-md h-9 w-full bg-stone-700/60 rounded-full border border-stone-600 flex px-14 flex-row justify-around align-middle'
                    }
                >
                    <NavigationDropdown label='promoções' />
                    <NavigationDropdown label='descubra' />
                    <NavigationButton label='sobre nós' />
                </div>
                <Button
                    className={isSticked ? 'h-9 backdrop-blur-lg' : ''}
                    preset='outline'
                    rightIcon={<IoChatbubble />}
                >
                    ajuda
                </Button>
                <Button
                    className={isSticked ? 'h-9' : ''}
                    rightIcon={<IoLogIn />}
                >
                    entrar
                </Button>
            </div>
        </>
    )
}