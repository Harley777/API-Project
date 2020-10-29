

let button = $('button')
let main = $('main') 
let nasaData; 
let input = $('input')

button.on('click', function(evt) {
  $.ajax('https://api.nasa.gov/planetary/apod?api_key=AzFJGwKfWFx8g0pdrerNqnov5QcSwLELz1ctz0od&date='+input.val())
  .then(function(data) {
    nasaData = data;
    render()
  },
  
  function(error) {
    console.log(error)
  });
  
})


$.ajax('https://api.nasa.gov/planetary/apod?api_key=AzFJGwKfWFx8g0pdrerNqnov5QcSwLELz1ctz0od')
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

