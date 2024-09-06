import axios from 'axios'
import nodemailer from 'nodemailer'

// URL do site que será monitorado
const siteUrl = 'https://invalid-site.com'

// Configuração do email para envio de alertas
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ceplojas834@gmail.com',
    pass: 'ceplojasdp834294',
  },
})

// Função para enviar e-mail quando o site cair
const sendAlert = async (error: string) => {
  try {
    await transporter.sendMail({
      from: 'ceplojas834@gmail.com',
      to: 'uskenmellorios@gmail.com',
      subject: 'Alerta: Seu site está fora do ar!',
      text: `O site ${siteUrl} está fora do ar. Erro: ${error}`,
    })
    console.log('Alerta enviado com sucesso')
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err)
  }
}

// Função que verifica a disponibilidade do site
const checkSite = async () => {
  try {
    const response = await axios.get(siteUrl)
    if (response.status === 200) {
      console.log('Site está online')
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Site está fora do ar:', error.message)
      sendAlert(error.message)
    } else {
      console.error('Erro desconhecido:', error)
      sendAlert('Erro desconhecido')
    }
  }
}

// Verificar o site a cada 5 minutos
setInterval(checkSite, 1 * 60 * 1000)
