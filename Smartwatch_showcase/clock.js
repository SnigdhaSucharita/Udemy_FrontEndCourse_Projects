function getTime() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerHTML = timeString;
}

getTime();
setInterval(() => {
    getTime();
}, 1000);