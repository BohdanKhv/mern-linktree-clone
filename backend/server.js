const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Router
app.use('/api/links', require('./routes/linkRoutes'))

// Add error handler
app.use(errorHandler)

// Run server
app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
})