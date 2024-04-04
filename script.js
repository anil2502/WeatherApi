
// let keyid='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
let apikey='a1e2c555b58a4d583500dafe40412667'

let aa='bangalore'


let form=document.querySelector('form')
form.addEventListener('submit',(event_object)=>{
    event_object.preventDefault()
    let inp_city=document.getElementById('city').value
   let data=async ()=>{
    let a1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp_city}&appid=${apikey}
    `)
    let a2=await a1.json()

    let temp=Math.round(a2.main.temp-273)
    let humudity=Math.round(a2.wind.speed)
    let snow=a2.weather[0].main

let snow_change=document.getElementById('p0')
snow_change.innerHTML=`${snow}`
let temp_change=document.getElementById('p1')

temp_change.innerHTML=`${temp}<sup>o</sup>C`

let humid_change=document.getElementById('p2')

humid_change.innerHTML=`${humudity} Kmph`



    
   }

    data()

})