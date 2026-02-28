function celciusToFahrenheit(celcius){
    let konversi = (celcius * (9/5)) + 32
    console.log (konversi+"°F")
}

function fahrenheitToCelcius(fahrenheit){
    let konversi = (fahrenheit - 32) * 5/9
    console.log (konversi+"°C")
}


celciusToFahrenheit(10)
fahrenheitToCelcius(50)
