window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor= document.getElementById('temperatura-valor')
    let temperaturaDescripcion= document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad= document.getElementById('viento-velocidad')


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
   
           const url = `https://api.openweathermap.org/data/2.5/weather?q=La Plata&lang=es&units=metric&appid=67988b5cd4f06c57c61e24a67618c907`
      
           fetch(url)
           .then(response=>{return response.json()})
           .then(data=>{
               let temp = Math.round(data.main.temp)
               temperaturaValor.textContent= `${temp} °c`
               let desc = data.weather[0]. description
               temperaturaDescripcion.textContent = desc.toUpperCase()
               ubicacion.textContent = data.name
               vientoVelocidad.textContent =`${data.wind.speed}m/s`
               switch (data.weather[0].main){
                   case'Clear':
                   iconoAnimado.src ='animated/day.svg'
                   break;
                   case'Cloud':
                   iconoAnimado.src ='animated/cloudy-day-1.svg'
                   break;
                   case 'Thunderstorm':
                    iconoAnimado.src='animated/thunder.svg'
                    break;
                    case 'Drizzle':
                    iconoAnimado.src='animated/rainy-2.svg'
                    break;
                    case 'Rain':
                    iconoAnimado.src='animated/rainy-7.svg'
                    break;
                    case 'Snow':
                    iconoAnimado.src='animated/snowy-6.svg'
                    break;
                    case 'Atmosphere':
                    iconoAnimado.src='animated/weather.svg'
                    break;
                    default:
                    iconoAnimado.src='animated/cloudy-day-1.svg'


               }
                
           })
           .catch(error=>{
               console.log(error)
               
           })

         
            })

          
    }
})
