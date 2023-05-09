const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Gujarat', (error, {longitude,latitude,location} = {}) => {
    
    if (error) {
        return console.log(error)
    }
    
    forecast(latitude, longitude, (error, forecastData) => {
    
        if (error) {
            return console.log(error)
        }
        
        console.log(location)
        console.log(forecastData)
    })
})