const path = require('path')
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

// Serv frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

// Add error handler
app.use(errorHandler)

// Run server
app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
})