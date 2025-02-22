import { Raleway } from 'next/font/google'
import Head from 'next/head'
import { Trophy } from 'phosphor-react'
import Header from '@/components/header'
import { Carroussel } from '@/components/carrousel'
import ProdList from '@/components/prodList'
import Footer from '@/components/footer'

const inter = Raleway({ subsets: ['latin'] })

export default function CaixasBrancas() {
  return (
    <>
      <Head>
        <title>Quiz - Cacau Show</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script>
  window.pixelId = "67ba2e79903a0cc09303ebb7";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
  </script>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-center text-center bg-cacau ${inter.className}`}
      >
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
      </main>
    </>
  )
}
