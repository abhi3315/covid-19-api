const request = require('request')

const indiaUrl = "https://api.covid19india.org"
const worldUrl = "https://api.covid19api.com/"

const stateWiseData = (callBack) => {
    request({ url: `${indiaUrl}/data.json`, json: true }, (error, { body } = {}) => {
        if (error) callBack({ error: 'Unable to connect to api', status: 500 }, undefined)
        else callBack(undefined, body.statewise)
    })
}

const districtData = (callBack) => {
    request({ url: `${indiaUrl}/state_district_wise.json`, json: true }, (error, { body } = {}) => {
        if (error) callBack({ error: 'Unable to connect to api', status: 500 }, undefined)
        else callBack(undefined, body)
    })
}

const casesTimeSeries = (callBack) => {
    request({ url: `${indiaUrl}/data.json`, json: true }, (error, { body } = {}) => {
        if (error) callBack({ error: 'Unable to connect to api', status: 500 }, undefined)
        else callBack(undefined, body.cases_time_series)
    })
}

const globalData = (orderBy, callBack) => {
    request({ url: `${worldUrl}/summary`, json: true }, (error, { body } = {}) => {
        if (error) callBack({ error: 'Unable to connect to api', status: 500 }, undefined)
        else {
            body.Global.flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/800px-International_Flag_of_Planet_Earth.svg.png'
            body.Countries.forEach(country => country.flag = `https://www.worldometers.info/img/flags/${country.CountryCode.toLowerCase()}-flag.gif`)
            if (orderBy === 'total_cases') {
                body.Countries.sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : ((b.TotalConfirmed < a.TotalConfirmed) ? -1 : 0))
                callBack(undefined, body)
            } else if (orderBy === 'country_name') {
                callBack(undefined, body)
            } else {
                callBack(undefined, { error: 'Provide a valid query', status: 400 })
            }
        }
    })
}

module.exports = {
    stateWiseData,
    districtData,
    casesTimeSeries,
    globalData
}