import express from 'express'

const app = express()

//www.minhapai.com/ads
//localhost:3333/ads
// se tivesse console.log("acessou ads!") => iria mostrar apenas no console e não no navegador!
//reponse.send() = envia texto no navegador, response.json() = manda uma estrutura de dados
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: "Anuncio 1"},
        { id: 2, name: "anuncio 2"},
        { id: 3, name: "Anuncio 3"}

    ])
})

app.listen(3333)