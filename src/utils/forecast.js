const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // console.log(longitude)
    // console.log(latitude)
    const _url = 'http://api.weatherstack.com/current?access_key=b89d8003de07c26f531113ce63058c56&query=' + latitude + ',' + longitude
    const key = `e6a856597d8d762f3b46bce3db408178`
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${key}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(body.current)
            // console.log(url)
            callback(undefined, body)
            // callback('nonde', undefined)
            // callback(undefined, (body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.humidity + ' humidity.'))
        }
    })
}

module.exports = forecast