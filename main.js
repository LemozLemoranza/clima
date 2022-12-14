//`https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=es&units=metric&appid=57bc0c4223e3a1997226b441454b8c52` LUGAR


//`https://timezone.abstractapi.com/v1/current_time/?api_key=474d6e7de4b74bfd9d80427b90a2b2cc&location=${query}`  HORA


// INPUTS
const principal= document.querySelector('.principal')
const formulario = document.querySelector('.formulario')
const caja = document.querySelector('.input');
const subir = document.querySelector('.subir');

//PARA LLENAR
const lugar = document.querySelector('.lugar');
const horario = document.querySelector('.hora');
const clima = document.querySelector('.clima');
const descripcion = document.querySelector('.descripcion');
const maximo = document.querySelector('.maximo');
const minimo = document.querySelector('.minimo');
const viento = document.querySelector('.viento');


//LLAMANDOS A LAS APIS

async function busqueda (valor){

    try{

        let datos = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valor}&lang=es&units=metric&appid=57bc0c4223e3a1997226b441454b8c52`);

        datos = await datos.json();
        console.log(datos);
        

        //REMPLAZANDO


        lugar.innerHTML = `${datos.name}, ${datos.sys.country}`;

        clima.innerHTML = `${datos.main.temp}°C`;

        descripcion.innerHTML = `${datos.weather[0].description.toUpperCase()} `;
        
        maximo.innerHTML = `<i class="fa-solid fa-arrow-up"></i> ${datos.main.temp_max}°C` ;
        
        minimo.innerHTML = `<i class="fa-solid fa-arrow-down"></i> ${datos.main.temp_min}°C` ;

        viento.innerHTML = `<i class="fa-solid fa-wind"></i> ${datos.wind.speed} m/s` ;

        // IMAGEN

        principal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./imagenes/${datos.weather[0].main}.jpg)`  

    }catch{
        lugar.innerHTML = ``;
        clima.innerHTML = ``;
        descripcion.innerHTML = `CIUDAD NO ENCONTRADA`;
        maximo.innerHTML = `` ;        
        minimo.innerHTML = `` ;
        viento.innerHTML = `` ;
    }








}



formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(caja.value);
    busqueda(caja.value);

})

