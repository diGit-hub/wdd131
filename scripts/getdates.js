const time = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = time.getFullYear();
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;
