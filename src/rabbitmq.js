import amqp from 'amqplib/callback_api.js'
import servicos from './servicos.js'

export default function () {
  try {
    amqp.connect({
      hostname: process.env.RABBIT_HOSTNAME,
      port: process.env.RABBIT_PORT,
      username: process.env.RABBIT_USERNAME,
      password: process.env.RABBIT_PASSWORD
    }, (error0, connection) => {
      if (error0) { throw error0 }
      connection.createChannel((error1, channel) => {
        if (error1) { throw error1 }
        channel.consume('Importador', async (msg) => {
          if (msg) {
            await servicos.importar()
          }
        }, {
          noAck: true
        })
      })
    })
  } catch (error) {
    throw error
  }
}