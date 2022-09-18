
import './styles/main.css'//configuração do tailwind para desenvolvimento do  style e css

import logoImg from './assets/logo-nlw-esports.png'


import { GameBanner } from './components/GameBanner'

import { CreateAdBanner } from './components/CreateAdBanner'

import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { CreateAdModal } from './components/CreateAdModal'

import axios from 'axios'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  }
}

function App() {
  //oque está aki dentro sempre reexecuta quando faz algum comando
  const [games, setGames] = useState<Game[]>([])

  // useEffect(()=> {
  //   fetch('http://localhost:3333/games')
  //   .then(response => response.json())
  //   .then(data => {
  //     setGames(data)
  //   })
  // })

  useEffect(()=> {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  })



  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt=""/>

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradiente bg-clip-text'>duo</span> está aqui</h1>
      
      <div className='grid grid-cols-6 gap-6 mt-16'>

        {games.map(game => {
          return <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.Ads} />
        })}

      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  )

  
}


export default App



