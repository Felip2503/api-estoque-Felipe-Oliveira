const express = require('express')

const app = express()
const PORT = 3000

const produtosRoutes = require('./routes/produtos')

app.use(express.json())

app.use('/produtos', produtosRoutes)

app.get('/', (req, res) => {
  res.send('API de Estoque funcionando!')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})