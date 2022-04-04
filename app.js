const app = require('./config/server')

const configs = require('./config/port_message')
const config = configs()

//const rotaNoticias = require('./app/routes/noticias')
//rotaNoticias(app)
//
//const rotaInclusaoNoticias = require('./app/routes/inclusaoNoticias')
//rotaInclusaoNoticias(app)
//
//const rotaHome = require('./app/routes/home')
//rotaHome(app)

app.listen(config.PORT, config.message)