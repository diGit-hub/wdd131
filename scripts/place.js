const time = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = time.getFullYear();
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;

const temperature = 10;
const windSpeed = 10;

document.querySelector("#temperature").textContent = `${temperature}°C`;
document.querySelector("#wind-speed").textContent = `${windSpeed}k/h`;

let windChill = "N/A";
function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8){
    windChill = calculateWindChill(temperature, windSpeed) + "°C"
}


document.querySelector("#wind-chill").textContent = windChill;