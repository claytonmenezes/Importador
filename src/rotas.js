import controller from './controllers.js'

export default function (app) {
  try {
    app.get('/', (req, res) => {res.sendStatus(200)})
    app.post('/importar', controller.importar)
  } catch (error) {
    throw error
  }
}