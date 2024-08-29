export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-[#28140c] text-center mt-8">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex">
          <p className="text-[#e5dfd4] hover:text-white mx-2 transition underline">
            Termos de Serviço
          </p>
          <p className="text-[#e5dfd4] hover:text-white mx-2 transition underline">
            Política de Privacidade
          </p>
        </div>
        <div className="flex space-x-4">
          <p className="text-[#e5dfd4] hover:text-white transition">
            <i className="fab fa-facebook-f"></i>
          </p>
          <p className="text-[#e5dfd4] hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </p>
          <p className="text-[#e5dfd4] hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[#e5dfd4] text-sm">
          © Copyright 2023. Todos os direitos reservados. | Cacau Comércio
          Eletrônico LTDA 32.143.933/0002-05. | Endereço: Avenida Helio Ossamu
          Daikuara, 1445 Bairro Jardim Vista Alegre Município Embu das Artes -
          SP CEP: 06807-000
        </p>
      </div>
    </footer>
  )
}
