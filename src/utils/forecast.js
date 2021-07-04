const request = require('request')



const forecast =(latitude,longitude, callback) =>{
const url = 'http://api.weatherstack.com/current?access_key=0d8403d5e4f0d58d550d97c19e89dfe5&query=' + latitude + ',' + longitude + '&units=m'

request({ url,json:true}, (error, {body})=> {
   if (error) {
      callback('Unable to connect to weather service!', undefined);
      }
      else if (body.error) {
        callback('not found info',undefined)
      } 
      else{
      callback(undefined,body.current.weather_descriptions[0]  +'. It is currently ' + body.current.temperature + ' degress celsius out. It feels like ' + body.current.feelslike + " degress celsius out."+ body.current.precip+'% chance of rain.');
   }
})
}


module.exports = forecast
      
 



