import servicos from './servicos.js'

export default {
  importar (req, res) {
    try {
      servicos.importar()
      res.sendStatus(200)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}