import dotenv from 'dotenv'
dotenv.config()

export default {
  async importar () {
    try {
      console.log('importar')
    } catch (error) {
      throw error
    }
  }
}