import Header from '@/components/header'
import Quiz from '@/components/quiz'
import Head from 'next/head'
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'] })

export default function QuizPage() {
  return (
    <>
      <Head>
        <title>Desafio - Cacau Show</title>
        <meta
          name="description"
          content="Sua compra foi confirmada com sucesso! Aproveite suas Caixas Brancas e lembre-se que 50% do valor gerado foi destinado a causas sociais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-[#e5ded3] ${inter.className}`}
      >
        <Header />
        <Quiz />
      </main>
    </>
  )
}
