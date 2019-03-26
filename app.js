//IMPORTS
let express = require('express')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let bluebird = require('bluebird')
let helmet = require('helmet')
let uploader = require('express-fileupload')
let cors = require('cors')
let middlewares = require('./utils/middlewares')

//CREACION DE LA APLICACION
let app = express()
app.enable('strict routing')

//SECURITY
app.use(helmet())

//CONFIGURACION DE CORREO
mail.extend(app, config.email)

//CONFIGURACION DEL LOGGER
app.use(logger('dev'))

//COMO SE ESPERAN LOS DATOS
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//COOKIES
app.use(cookieParser())

//HABILITAR CORS Y SEGURIDAD
app.use(cors({
  origin: [
    "http://localhost"
  ],
  credentials: true
}))

//OBJETOS ESTATICOS
app.use('/public', express.static(path.join(__dirname, 'public')))

//middleware para subir ficheros
app.use(uploader())

//TIPOS DE RESPUESTAS
app.use(middlewares.responses)

//CONFIGURACION DE LAS RUTAS
app.use(routes)

//CONFIGURACION PARA ERRORES
// catch 404 and forward to error handler
app.use(middlewares.show_404)

module.exports = app