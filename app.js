const app = require('./config/server')

const rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

const rotaInclusaoNoticias = require('./app/routes/inclusaoNoticias')
rotaInclusaoNoticias(app)

const rotaHome = require('./app/routes/home')
rotaHome(app)


const server = {
    PORT: 4100,
    message(){
        console.log("Server rodando com express - Porta: 4100")
    }
}
app.listen(server.PORT, server.message)