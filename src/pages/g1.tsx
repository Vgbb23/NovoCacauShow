/* eslint-disable react/no-unescaped-entities */
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Circle, List, MagnifyingGlass } from 'phosphor-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { SVGIcon1 } from '../../public/icon'
import Img1 from '../../public/dep1.webp'
import Prop from '../../public/prop1.webp'
import Logo from '../../public/favicon.avif'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const currentDate = new Date()

  const formattedDate = format(currentDate, 'dd/MM/yyyy', { locale: ptBR })

  return (
    <>
      <Head>
        <title>As Caixas Brancas Da Cacau Show</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.avif" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen mx-auto bg-white ${inter.className}`}
      >
        <header>
          <div className="flex justify-between">
            <p className="text-[#0669DE] py-3 px-[11px] font-semibold">
              globo.com
            </p>
            <p className="text-[#C4170C] py-3 px-[11px] font-semibold">g1</p>
            <p className="text-[#06AA48] py-3 px-[11px] font-semibold">ge</p>
            <p className="text-[#FF6700] py-3 px-[11px] font-semibold">gshow</p>
            <p className="text-[#FB0334] py-3 px-[11px] font-semibold">
              globoplay
            </p>
          </div>

          <div className="flex items-center justify-between bg-[#C4170C] py-4 px-4">
            <div className="flex items-center gap-2">
              <List size={20} color="#fff" weight="bold" />
              <SVGIcon1 />
            </div>

            <h1 className="text-white text-2xl font-light">SÃO PAULO</h1>

            <MagnifyingGlass size={20} color="#fff" weight="bold" />
          </div>
        </header>

        <div className="w-full px-5 my-5">
          <h1 className=" text-[28px] text-[#1f2123] font-bold leading-8">
            Caixas Brancas da Cacau Show: o que são e onde encontrar essa
            promoção que pode chegar a 80% de desconto
          </h1>

          <p className="text-[15px] text-[#4f5257] mt-[15px]">
            Para a loucura dos chocólatras, a Cacau Show voltou com suas caixas
            brancas! Perdeu essa novidade que foi febre em 2023? Não tem
            problema, agora é sua hora!
          </p>
        </div>

        <div className="w-full px-5 mb-5 text-[#4f5257]">
          <p className="text-sm">
            <b>
              Por <span className="text-[#c4170c]">Kleber Tomaz</span>, g1 SP
            </b>{' '}
            — São Paulo
          </p>
          <p className="flex items-center gap-1 text-xs">
            {formattedDate} <Circle size={3} weight="fill" />
            Atualizado há 47 minutos
          </p>
        </div>

        <div className="w-full px-5">
          <Image alt="image" src={Img1} quality={100} className="rounded-xl" />
        </div>

        <div className="px-4 my-5">
          <h1 className="font-bold mb-2">
            A Magia por Trás das Caixas Brancas
          </h1>
          <p className="mb-5">
            As Caixas Brancas contêm chocolates que{' '}
            <b>não atenderam aos rigorosos critérios visuais da Cacau Show,</b>{' '}
            mas que, em termos de qualidade e sabor,{' '}
            <span className="text-[#c4170c] font-bold">
              continuam excepcionais.
            </span>
            Esses chocolates estão completamente dentro do prazo de validade e
            mantêm sua frescura, ou seja, são perfeitamente{' '}
            <b>seguros e deliciosos para o consumo.</b>
          </p>
          <p className="mb-5">
            O que torna as Caixas Brancas tão especiais é a atenção à{' '}
            <span className="text-[#c4170c] font-bold">
              sustentabilidade e ao combate ao desperdício.{' '}
            </span>{' '}
            <b>Ao invés de descartar esses chocolates de alta qualidade,</b> a
            Cacau Show os disponibiliza em Caixas Brancas, proporcionando uma
            opção econômica para os consumidores enquanto{' '}
            <b>evita o desperdício de alimentos.</b>
          </p>
        </div>

        <div className="w-full flex justify-center px-5">
          <Image alt="image" src={Prop} quality={100} className="rounded-xl" />
        </div>

        <div className="px-4 my-5">
          <p className="mb-5">
            Então, se você está se perguntando “
            <b>
              Será que é verdade essa coisa de caixas brancas da Cacau Show?
            </b>
            ” Saiba que sim,{' '}
            <span className="text-[#c4170c] font-bold">é verdade</span>
          </p>

          <p className="mb-5">
            Isso <b>não muda em nada a qualidade do seu sabor,</b> mas muda o
            preço! os descontos{' '}
            <span className="text-[#c4170c] font-bold">
              chegam a 80% do preço normalmente comercializado,
            </span>{' '}
            mas como esses produtos são raros, afinal a Cacau Show é bem
            rigorosa no seu padrão de qualidade, também é raro encontrá-las…
            <b>Quer saber onde achar esse pote ouro?</b>
          </p>
        </div>

        <div className="px-4 my-5">
          <h1 className="font-bold mb-2">
            Onde encontrar a caixa branca da cacau show?
          </h1>
          <p className="mb-5">
            As embalagens brancas podem ser encontradas no próprio site da
            cacaushow <b>Siga o link a baixo para acessar:</b>
          </p>
          <Link href="/caixas-brancas" className="underline text-[#c4170c]">
            https://www.cacaushow.com.br/caixas-brancas
          </Link>
        </div>

        <footer className="w-full px-6 py-5 bg-[#c4170c] text-white">
          <div className="flex items-center gap-2 mb-3">
            <Image alt="logo" src={Logo} quality={100} />
            <p className="flex items-center gap-1 text-sm">
              Últimas Notícias <Circle size={3} weight="fill" /> Globo Notícias
            </p>
          </div>

          <p>© Copyright 2000-2024 Globo Comunicação e Participações S.A.</p>
        </footer>
      </main>
    </>
  )
}
