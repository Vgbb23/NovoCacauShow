import { Raleway } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Trophy } from 'phosphor-react'
import Header from '@/components/header'
import { Carroussel } from '@/components/carrousel'
import ProdList from '@/components/prodList'
import Footer from '@/components/footer'
import Logo from '../../public/logo.svg'

const inter = Raleway({ subsets: ['latin'] })

export default function CaixasBrancas() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [loading])

  return (
    <>
      <Head>
        <title>Quiz - Cacau Show</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-center text-center bg-cacau ${inter.className}`}
      >
        {loading ? (
          <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
            <Image
              alt="logo"
              src={Logo}
              quality={100}
              className="animate-pulse invert"
            />
            <h1 className="">Carregando estoque...</h1>
          </div>
        ) : (
          <>
            <Header />
            <Carroussel />
            <div className="w-[90%] flex flex-col gap-4 mt-4">
              <div className="flex flex-col items-center">
                <Trophy size={32} color="#4a2511" weight="fill" />
                <p className="text-xs uppercase">
                  <u>
                    <b>atenção:</b>
                  </u>{' '}
                  Permitido apenas um pedido por CPF
                </p>
              </div>
              <ProdList />
            </div>
            <Footer />
          </>
        )}
      </main>
    </>
  )
}
