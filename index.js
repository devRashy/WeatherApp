const request = require('request')
const yargs = require('yargs').argv


const apiKey = '9c51fb778eabb68ccba56f0c40a8a3f6'
const city =  yargs.b || 'Abuja' 


let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
        console.log('body:', body);

    }
  });

 