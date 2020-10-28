let main = $('main') 
let nasaData; 

$.ajax('https://api.nasa.gov/planetary/apod?api_key=AzFJGwKfWFx8g0pdrerNqnov5QcSwLELz1ctz0od&date=2020-10-01')
.then(function(data) {
  nasaData = data;
  render()
},

function(error) {
  console.log(error)
});


function render(){
let img = $('<img>')
img.attr('src', nasaData.hdurl)
main.html(img)
}

