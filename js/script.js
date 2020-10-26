$.ajax('https://api.nasa.gov/planetary/apod?api_key=AzFJGwKfWFx8g0pdrerNqnov5QcSwLELz1ctz0od&date=2020-10-01')
.then(function(data) {
  console.log(data)
},
function(error) {
  console.log(error)
});

