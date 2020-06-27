const express = require('express')
const api = require('./utils/api')

const port = process.env.PORT || 3000

const app = express()

app.get('/india', (req, res) => {
    api.stateWiseData((error, data) => {
        if (error) return res.status(500).send(error)
        res.send(data)
    })
})

app.get('/india/district', (req, res) => {
    api.districtData((error, data) => {
        if (error) return res.status(500).send(error)
        res.send(data)
    })
})

app.get('/india/cases_time_series', (req, res) => {
    api.casesTimeSeries((error, data) => {
        if (error) return res.status(500).send(error)
        res.send(data)
    })
})

app.get('/global', (req, res) => {
    api.globalData(req.query.order_by, (error, data) => {
        if (error) return res.status(500).send(error)
        res.send(data)
    })
})

app.get('*', (req, res) => {
    res.status(404).send({
        error: 'Not a valid request',
        status: 404
    })
})

app.listen(port, () => console.log('Server is running at', port))