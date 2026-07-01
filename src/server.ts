import express from 'express'

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: 'API rodando'})
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`API rodando em: http://localhost:${PORT}`)
})