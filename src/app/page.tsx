import Image from 'next/image'

import Button from '@/components/Button';
import Header from '@/components/Header';
import Switch from '@/components/Switch';
import SearchTripForm from '@/components/SearchTripForm';
import ShinyButton from '@/components/ShinyButton';
import SocialButton from '@/components/SocialButton';
import { IoAt, IoAtCircle, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export default function Home() {
  return (
    <main className='max-w-5xl mx-auto sm:px-6 lg:px-8 '>
      <Header />
      <SearchTripForm />
      <div className=' bg-gradient-to-t from-stone-900 fixed w-full h-[30vh] bottom-0 left-0' />
      <div className='w-full mx-auto px-1 mt-[50vh]'>
        <div className='w-full pt-12 px-6 border-t border-stone-700 flex flex-col justify-center items-center '>
          <p className='text-stone-200 text-justify'>
            BusHub é um projeto desenvolvido em Next.js, Tailwind e Typescript que visa criar um header com animações CSS de transição, especialmente projetadas para um site de compra de passagens de ônibus. Uma das principais características desse header é a animação do formulário, que cola no topo do header enquanto o usuário navega pelo site. Essa abordagem proporciona uma experiência visualmente atraente e fluida, tornando a interação do usuário mais intuitiva e agradável. Para conhecer mais sobre o meu trabalho, visite o meu portfólio através do botão abaixo, onde você poderá encontrar mais detalhes e exemplos de projetos semelhantes.
          </p>
          <div className='flex items-center justify-center h-20 w-full mt-10'>

            <ShinyButton />
          </div>
          <div className='relative z-10 flex items-center justify-center  w-full border-b  border-stone-700 space-x-6 pb-10 pt-6 mb-28'>
            <SocialButton leftIcon={<IoLogoGithub className='text-lg' />}>/igordamm</SocialButton>
            <SocialButton leftIcon={<IoAtCircle className='text-lg' />}>igor.gomes.dev@gmail.com</SocialButton>
            <SocialButton leftIcon={<IoLogoLinkedin className='text-lg' />}>/igor-gomes-pereira</SocialButton>
          </div>
        </div>
      </div>
      <div className='fixed flex items-center justify-center top-[1.85rem] right-[1.85rem] '>
        <Switch />
      </div>
    </main>
  )
}
