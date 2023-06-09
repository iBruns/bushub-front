import Image from 'next/image'

import Button from '@/components/Button';
import Header from '@/components/Header';
import Switch from '@/components/Switch';
import SearchTripForm from '@/components/SearchTripForm';

export default function Home() {
  return (
    <main className='max-w-5xl mx-auto sm:px-6 lg:px-8 h-[500vh]'>
      <Header />
      <SearchTripForm />
      <div className='w-full text-stone-200 mt-[50vh] pt-8 px-6 border-t border-stone-600 text-justify'>
        A Buser é um jeito diferente pra sua viagem de ônibus. A plataforma conecta pessoas que querem viajar com as empresas de fretamento. Assim, as viagens chegam a custar menos que a metade do preço da rodoviária, além de contarem com seguro grátis, motoristas parceiros treinados, ônibus de qualidade, diversas opções de poltronas e tecnologias de segurança. E se tiver que remarcar, aqui tem facilidade e reembolso rápido.

        Você compra a sua viagem direto no site ou no app e conta com diversas opções de ponto de embarque e desembarque, sem fila e sem burocracia. É tudo mais rápido, prático e você ainda paga menos pra viajar. É do app direto pra poltrona do ônibus. Com a Buser, você escolhe o destino e viaja numa boa! Vai de Buser!
      </div>
      <div className='fixed top-7 right-7'>
        <Switch />
      </div>
    </main>
  )
}
