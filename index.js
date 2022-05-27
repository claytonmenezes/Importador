import express from 'express'
import cors from 'cors'
import rotas from './src/rotas.js'
import rabbitmq from './src/rabbitmq.js'
import dotenv from 'dotenv'
dotenv.config()

let app = express()
app.set('port', 2510)
app.use(cors())
app.use(express.json())

async function start () {
  try {
    rabbitmq()
    rotas(app)
    app.listen(app.get('port'), async () => {
      console.log('Servidor rodando na porta', app.get('port'))
    })
  } catch (error) {
    console.error(error)
  }
}

start()