const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// Body parser
app.use(express.json({limit: '2mb'}))
app.use(express.urlencoded({ limit: '2mb', extended: false }))

// Router
app.use('/api/links', require('./routes/linkRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Add error handler
app.use(errorHandler)

// Run server
app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
})