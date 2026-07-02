import createApp from "./app";

const app = createApp()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`API rodando em: http://localhost:${PORT}`)
})